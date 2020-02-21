"""Discovery service for AdGuard."""
import voluptuous as vol

from ..const import ATTR_HOST
from ..const import ATTR_PORT
from supervisor.validate import network_port


SCHEMA = vol.Schema(
    {vol.Required(ATTR_HOST): vol.Coerce(str), vol.Required(ATTR_PORT): network_port}
)
