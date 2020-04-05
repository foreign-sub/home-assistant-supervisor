"""Init file for Supervisor HA cli RESTful API."""
import asyncio
import logging
from typing import Any
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
from ..coresys import CoreSysAttributes
from .utils import api_process
from .utils import api_validate

_LOGGER: logging.Logger = logging.getLogger(__name__)

SCHEMA_VERSION = vol.Schema({vol.Optional(ATTR_VERSION): vol.Coerce(str)})


class APICli(CoreSysAttributes):
    """Handle RESTful API for HA Cli functions."""

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Return HA cli information."""
        return {
            ATTR_VERSION: self.sys_plugins.cli.version,
            ATTR_VERSION_LATEST: self.sys_plugins.cli.latest_version,
        }

    @api_process
    async def stats(self, request: web.Request) -> Dict[str, Any]:
        """Return resource information."""
        stats = await self.sys_plugins.cli.stats()

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
        """Update HA CLI."""
        body = await api_validate(SCHEMA_VERSION, request)
        version = body.get(ATTR_VERSION, self.sys_plugins.cli.latest_version)

        await asyncio.shield(self.sys_plugins.cli.update(version))
