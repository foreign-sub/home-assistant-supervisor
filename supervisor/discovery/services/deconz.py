"""Discovery service for MQTT."""
import voluptuous as vol

from ..const import ATTR_API_KEY
from ..const import ATTR_HOST
from ..const import ATTR_PORT
from ..const import ATTR_SERIAL
from supervisor.validate import network_port


SCHEMA = vol.Schema(
    {
        vol.Required(ATTR_HOST): vol.Coerce(str),
        vol.Required(ATTR_PORT): network_port,
        vol.Required(ATTR_SERIAL): vol.Coerce(str),
        vol.Required(ATTR_API_KEY): vol.Coerce(str),
    }
)
