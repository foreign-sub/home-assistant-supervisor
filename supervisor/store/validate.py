"""Validate add-ons options schema."""
import voluptuous as vol

from ..const import ATTR_MAINTAINER
from ..const import ATTR_NAME
from ..const import ATTR_URL

# pylint: disable=no-value-for-parameter
SCHEMA_REPOSITORY_CONFIG = vol.Schema(
    {
        vol.Required(ATTR_NAME): vol.Coerce(str),
        vol.Optional(ATTR_URL): vol.Url(),
        vol.Optional(ATTR_MAINTAINER): vol.Coerce(str),
    },
    extra=vol.REMOVE_EXTRA,
)
