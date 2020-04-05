"""Validate functions."""
import voluptuous as vol

from ..const import ATTR_ACCESS_TOKEN
from ..const import ATTR_IMAGE
from ..const import ATTR_SERVERS
from ..const import ATTR_VERSION
from ..validate import dns_server_list
from ..validate import docker_image
from ..validate import token

SCHEMA_DNS_CONFIG = vol.Schema(
    {
        vol.Optional(ATTR_VERSION): vol.Maybe(vol.Coerce(str)),
        vol.Optional(ATTR_IMAGE): docker_image,
        vol.Optional(ATTR_SERVERS, default=list): dns_server_list,
    },
    extra=vol.REMOVE_EXTRA,
)

SCHEMA_AUDIO_CONFIG = vol.Schema(
    {
        vol.Optional(ATTR_VERSION): vol.Maybe(vol.Coerce(str)),
        vol.Optional(ATTR_IMAGE): docker_image,
    },
    extra=vol.REMOVE_EXTRA,
)

SCHEMA_CLI_CONFIG = vol.Schema(
    {
        vol.Optional(ATTR_VERSION): vol.Maybe(vol.Coerce(str)),
        vol.Optional(ATTR_IMAGE): docker_image,
        vol.Optional(ATTR_ACCESS_TOKEN): token,
    },
    extra=vol.REMOVE_EXTRA,
)

SCHEMA_MULTICAST_CONFIG = vol.Schema(
    {
        vol.Optional(ATTR_VERSION): vol.Maybe(vol.Coerce(str)),
        vol.Optional(ATTR_IMAGE): docker_image,
    },
    extra=vol.REMOVE_EXTRA,
)
