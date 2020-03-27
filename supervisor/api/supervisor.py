"""Init file for Supervisor Supervisor RESTful API."""
import asyncio
import logging
from typing import Any
from typing import Awaitable
from typing import Dict

import voluptuous as vol
from aiohttp import web

from ..const import ATTR_ADDONS
from ..const import ATTR_ADDONS_REPOSITORIES
from ..const import ATTR_ARCH
from ..const import ATTR_BLK_READ
from ..const import ATTR_BLK_WRITE
from ..const import ATTR_CHANNEL
from ..const import ATTR_CPU_PERCENT
from ..const import ATTR_DEBUG
from ..const import ATTR_DEBUG_BLOCK
from ..const import ATTR_DESCRIPTON
from ..const import ATTR_ICON
from ..const import ATTR_INSTALLED
from ..const import ATTR_IP_ADDRESS
from ..const import ATTR_LOGGING
from ..const import ATTR_LOGO
from ..const import ATTR_MEMORY_LIMIT
from ..const import ATTR_MEMORY_PERCENT
from ..const import ATTR_MEMORY_USAGE
from ..const import ATTR_NAME
from ..const import ATTR_NETWORK_RX
from ..const import ATTR_NETWORK_TX
from ..const import ATTR_REPOSITORY
from ..const import ATTR_SLUG
from ..const import ATTR_STATE
from ..const import ATTR_TIMEZONE
from ..const import ATTR_VERSION
from ..const import ATTR_VERSION_LATEST
from ..const import ATTR_WAIT_BOOT
from ..const import CONTENT_TYPE_BINARY
from ..const import SUPERVISOR_VERSION
from ..const import UpdateChannels
from ..coresys import CoreSysAttributes
from ..exceptions import APIError
from ..utils.validate import validate_timezone
from ..validate import log_level
from ..validate import repositories
from ..validate import wait_boot
from .utils import api_process
from .utils import api_process_raw
from .utils import api_validate

_LOGGER: logging.Logger = logging.getLogger(__name__)

# pylint: disable=no-value-for-parameter
SCHEMA_OPTIONS = vol.Schema({
    vol.Optional(ATTR_CHANNEL):
    vol.Coerce(UpdateChannels),
    vol.Optional(ATTR_ADDONS_REPOSITORIES):
    repositories,
    vol.Optional(ATTR_TIMEZONE):
    validate_timezone,
    vol.Optional(ATTR_WAIT_BOOT):
    wait_boot,
    vol.Optional(ATTR_LOGGING):
    log_level,
    vol.Optional(ATTR_DEBUG):
    vol.Boolean(),
    vol.Optional(ATTR_DEBUG_BLOCK):
    vol.Boolean(),
})

SCHEMA_VERSION = vol.Schema({vol.Optional(ATTR_VERSION): vol.Coerce(str)})


class APISupervisor(CoreSysAttributes):
    """Handle RESTful API for Supervisor functions."""

    @api_process
    async def ping(self, request):
        """Return ok for signal that the API is ready."""
        return True

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Return host information."""
        list_addons = []
        for addon in self.sys_addons.installed:
            list_addons.append({
                ATTR_NAME: addon.name,
                ATTR_SLUG: addon.slug,
                ATTR_DESCRIPTON: addon.description,
                ATTR_STATE: await addon.state(),
                ATTR_VERSION: addon.latest_version,
                ATTR_INSTALLED: addon.version,
                ATTR_REPOSITORY: addon.repository,
                ATTR_ICON: addon.with_icon,
                ATTR_LOGO: addon.with_logo,
            })

        return {
            ATTR_VERSION: SUPERVISOR_VERSION,
            ATTR_VERSION_LATEST: self.sys_updater.version_hassio,
            ATTR_CHANNEL: self.sys_updater.channel,
            ATTR_ARCH: self.sys_supervisor.arch,
            ATTR_IP_ADDRESS: str(self.sys_supervisor.ip_address),
            ATTR_WAIT_BOOT: self.sys_config.wait_boot,
            ATTR_TIMEZONE: self.sys_config.timezone,
            ATTR_LOGGING: self.sys_config.logging,
            ATTR_ADDONS: list_addons,
            ATTR_ADDONS_REPOSITORIES: self.sys_config.addons_repositories,
        }

    @api_process
    async def options(self, request: web.Request) -> None:
        """Set Supervisor options."""
        body = await api_validate(SCHEMA_OPTIONS, request)

        if ATTR_CHANNEL in body:
            self.sys_updater.channel = body[ATTR_CHANNEL]

        if ATTR_TIMEZONE in body:
            self.sys_config.timezone = body[ATTR_TIMEZONE]

        if ATTR_WAIT_BOOT in body:
            self.sys_config.wait_boot = body[ATTR_WAIT_BOOT]

        if ATTR_DEBUG in body:
            self.sys_config.debug = body[ATTR_DEBUG]

        if ATTR_DEBUG_BLOCK in body:
            self.sys_config.debug_block = body[ATTR_DEBUG_BLOCK]

        if ATTR_LOGGING in body:
            self.sys_config.logging = body[ATTR_LOGGING]

        if ATTR_ADDONS_REPOSITORIES in body:
            new = set(body[ATTR_ADDONS_REPOSITORIES])
            await asyncio.shield(self.sys_store.update_repositories(new))

        self.sys_updater.save_data()
        self.sys_config.save_data()

    @api_process
    async def stats(self, request: web.Request) -> Dict[str, Any]:
        """Return resource information."""
        stats = await self.sys_supervisor.stats()

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
        """Update Supervisor OS."""
        body = await api_validate(SCHEMA_VERSION, request)
        version = body.get(ATTR_VERSION, self.sys_updater.version_hassio)

        if version == self.sys_supervisor.version:
            raise APIError("Version {} is already in use".format(version))
        await asyncio.shield(self.sys_supervisor.update(version))

    @api_process
    def reload(self, request: web.Request) -> Awaitable[None]:
        """Reload add-ons, configuration, etc."""
        return asyncio.shield(
            asyncio.wait(
                [self.sys_updater.reload(),
                 self.sys_secrets.reload()]))

    @api_process
    def repair(self, request: web.Request) -> Awaitable[None]:
        """Try to repair the local setup / overlayfs."""
        return asyncio.shield(self.sys_core.repair())

    @api_process_raw(CONTENT_TYPE_BINARY)
    def logs(self, request: web.Request) -> Awaitable[bytes]:
        """Return supervisor Docker logs."""
        return self.sys_supervisor.logs()
