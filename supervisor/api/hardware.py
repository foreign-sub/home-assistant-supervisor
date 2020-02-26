"""Init file for Supervisor hardware RESTful API."""
import asyncio
import logging
from typing import Any
from typing import Dict

from aiohttp import web

from ..const import ATTR_AUDIO
from ..const import ATTR_DISK
from ..const import ATTR_GPIO
from ..const import ATTR_INPUT
from ..const import ATTR_OUTPUT
from ..const import ATTR_SERIAL
from ..coresys import CoreSysAttributes
from .utils import api_process

_LOGGER: logging.Logger = logging.getLogger(__name__)


class APIHardware(CoreSysAttributes):
    """Handle RESTful API for hardware functions."""

    @api_process
    async def info(self, request: web.Request) -> Dict[str, Any]:
        """Show hardware info."""
        return {
            ATTR_SERIAL:
            list(self.sys_hardware.serial_devices
                 | self.sys_hardware.serial_by_id),
            ATTR_INPUT:
            list(self.sys_hardware.input_devices),
            ATTR_DISK:
            list(self.sys_hardware.disk_devices),
            ATTR_GPIO:
            list(self.sys_hardware.gpio_devices),
            ATTR_AUDIO:
            self.sys_hardware.audio_devices,
        }

    @api_process
    async def audio(self, request: web.Request) -> Dict[str, Any]:
        """Show pulse audio profiles."""
        return {
            ATTR_AUDIO: {
                ATTR_INPUT: {
                    profile.name: profile.description
                    for profile in self.sys_host.sound.input_profiles
                },
                ATTR_OUTPUT: {
                    profile.name: profile.description
                    for profile in self.sys_host.sound.output_profiles
                },
            }
        }

    @api_process
    def trigger(self, request: web.Request) -> None:
        """Trigger a udev device reload."""
        return asyncio.shield(self.sys_hardware.udev_trigger())
