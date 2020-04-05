"""Init file for Supervisor Multicast RESTful API."""
import asyncio
import logging
from typing import Any
from typing import Awaitable
from typing import Dict

import voluptuous as vol
from aiohttp import web

from ..const import ATTR_BLK_READ
from ..const import ATTR_BLK_WRITE
from ..const import ATTR_CPU_PERCENT
from ..const import ATTR_MEMORY_LIMIT
from ..const import ATTR_MEMORY_PERCENT
from ..const import ATTR_MEMORY_USAGE
from ..const import ATTR_NETWORK_RX
from ..const import ATTR_NETWORK_TX
from ..const import ATTR_VERSION
from ..const import ATTR_VERSION_LATEST
from ..const import CONTENT_TYPE_BINARY
from ..coresys import CoreSysAttributes
from ..exceptions import APIError
from .utils import api_process
from .utils import api_process_raw
from .utils import api_validate

_LOGGER: logging.Logger = logging.getLogger(__name__)

SCHEMA_VERSION = vol.Schema({vol.Optional(ATTR_VERSION): vol.Coerce(str)})


class APIMulticast(CoreSysAttributes):
    """Handle RESTful API for Multicast functions."""

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Return Multicast information."""
        return {
            ATTR_VERSION: self.sys_plugins.multicast.version,
            ATTR_VERSION_LATEST: self.sys_plugins.multicast.latest_version,
        }

    @api_process
    async def stats(self, request: web.Request) -> Dict[str, Any]:
        """Return resource information."""
        stats = await self.sys_plugins.multicast.stats()

        return {
            ATTR_CPU_PERCENT: stats.cpu_percent,
            ATTR_MEMORY_USAGE: stats.memory_usage,
            ATTR_MEMORY_LIMIT: stats.memory_limit,
            ATTR_MEMORY_PERCENT: stats.memory_percent,
            ATTR_NETWORK_RX: stats.network_rx,
            ATTR_NETWORK_TX: stats.network_tx,
            ATTR_BLK_READ: stats.blk_read,
            ATTR_BLK_WRITE: stats.blk_write,
        }

    @api_process
    async def update(self, request: web.Request) -> None:
        """Update Multicast plugin."""
        body = await api_validate(SCHEMA_VERSION, request)
        version = body.get(ATTR_VERSION,
                           self.sys_plugins.multicast.latest_version)

        if version == self.sys_plugins.multicast.version:
            raise APIError("Version {} is already in use".format(version))
        await asyncio.shield(self.sys_plugins.multicast.update(version))

    @api_process_raw(CONTENT_TYPE_BINARY)
    def logs(self, request: web.Request) -> Awaitable[bytes]:
        """Return Multicast Docker logs."""
        return self.sys_plugins.multicast.logs()

    @api_process
    def restart(self, request: web.Request) -> Awaitable[None]:
        """Restart Multicast plugin."""
        return asyncio.shield(self.sys_plugins.multicast.restart())
