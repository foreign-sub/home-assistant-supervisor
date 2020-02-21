"""Init file for Supervisor info RESTful API."""
import logging
from typing import Any
from typing import Dict

from aiohttp import web

from ..const import ATTR_ARCH
from ..const import ATTR_CHANNEL
from ..const import ATTR_HASSOS
from ..const import ATTR_HOMEASSISTANT
from ..const import ATTR_HOSTNAME
from ..const import ATTR_LOGGING
from ..const import ATTR_MACHINE
from ..const import ATTR_SUPERVISOR
from ..const import ATTR_SUPPORTED_ARCH
from ..const import ATTR_TIMEZONE
from ..coresys import CoreSysAttributes
from .utils import api_process

_LOGGER: logging.Logger = logging.getLogger(__name__)


class APIInfo(CoreSysAttributes):
    """Handle RESTful API for info functions."""

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Show system info."""
        return {
            ATTR_SUPERVISOR: self.sys_supervisor.version,
            ATTR_HOMEASSISTANT: self.sys_homeassistant.version,
            ATTR_HASSOS: self.sys_hassos.version,
            ATTR_HOSTNAME: self.sys_host.info.hostname,
            ATTR_MACHINE: self.sys_machine,
            ATTR_ARCH: self.sys_arch.default,
            ATTR_SUPPORTED_ARCH: self.sys_arch.supported,
            ATTR_CHANNEL: self.sys_updater.channel,
            ATTR_LOGGING: self.sys_config.logging,
            ATTR_TIMEZONE: self.sys_timezone,
        }
