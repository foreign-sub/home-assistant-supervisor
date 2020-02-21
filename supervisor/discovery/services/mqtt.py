"""Discovery service for MQTT."""
import voluptuous as vol

from ..const import ATTR_HOST
from ..const import ATTR_PASSWORD
from ..const import ATTR_PORT
from ..const import ATTR_PROTOCOL
from ..const import ATTR_SSL
from ..const import ATTR_USERNAME
from supervisor.validate import network_port

# pylint: disable=no-value-for-parameter
SCHEMA = vol.Schema({
    vol.Required(ATTR_HOST):
    vol.Coerce(str),
    vol.Required(ATTR_PORT):
    network_port,
    vol.Optional(ATTR_USERNAME):
    vol.Coerce(str),
    vol.Optional(ATTR_PASSWORD):
    vol.Coerce(str),
    vol.Optional(ATTR_SSL, default=False):
    vol.Boolean(),
    vol.Optional(ATTR_PROTOCOL, default="3.1.1"):
    vol.All(vol.Coerce(str), vol.In(["3.1", "3.1.1"])),
})
