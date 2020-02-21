"""Validate some things around restore."""
import voluptuous as vol

from ..const import ATTR_ADDONS
from ..const import ATTR_BOOT
from ..const import ATTR_CRYPTO
from ..const import ATTR_DATE
from ..const import ATTR_FOLDERS
from ..const import ATTR_HOMEASSISTANT
from ..const import ATTR_IMAGE
from ..const import ATTR_LAST_VERSION
from ..const import ATTR_NAME
from ..const import ATTR_PORT
from ..const import ATTR_PROTECTED
from ..const import ATTR_REFRESH_TOKEN
from ..const import ATTR_REPOSITORIES
from ..const import ATTR_SIZE
from ..const import ATTR_SLUG
from ..const import ATTR_SSL
from ..const import ATTR_TYPE
from ..const import ATTR_VERSION
from ..const import ATTR_WAIT_BOOT
from ..const import ATTR_WATCHDOG
from ..const import CRYPTO_AES128
from ..const import FOLDER_ADDONS
from ..const import FOLDER_HOMEASSISTANT
from ..const import FOLDER_SHARE
from ..const import FOLDER_SSL
from ..const import SNAPSHOT_FULL
from ..const import SNAPSHOT_PARTIAL
from ..validate import docker_image
from ..validate import network_port
from ..validate import repositories

ALL_FOLDERS = [FOLDER_HOMEASSISTANT, FOLDER_SHARE, FOLDER_ADDONS, FOLDER_SSL]


def unique_addons(addons_list):
    """Validate that an add-on is unique."""
    single = set(addon[ATTR_SLUG] for addon in addons_list)

    if len(single) != len(addons_list):
        raise vol.Invalid("Invalid addon list on snapshot!")
    return addons_list


# pylint: disable=no-value-for-parameter
SCHEMA_SNAPSHOT = vol.Schema(
    {
        vol.Required(ATTR_SLUG):
        vol.Coerce(str),
        vol.Required(ATTR_TYPE):
        vol.In([SNAPSHOT_FULL, SNAPSHOT_PARTIAL]),
        vol.Required(ATTR_NAME):
        vol.Coerce(str),
        vol.Required(ATTR_DATE):
        vol.Coerce(str),
        vol.Inclusive(ATTR_PROTECTED, "encrypted"):
        vol.All(vol.Coerce(str), vol.Length(min=1, max=1)),
        vol.Inclusive(ATTR_CRYPTO, "encrypted"):
        CRYPTO_AES128,
        vol.Optional(ATTR_HOMEASSISTANT, default=dict):
        vol.Schema(
            {
                vol.Optional(ATTR_VERSION):
                vol.Coerce(str),
                vol.Inclusive(ATTR_IMAGE, "custom_hass"):
                docker_image,
                vol.Inclusive(ATTR_LAST_VERSION, "custom_hass"):
                vol.Coerce(str),
                vol.Optional(ATTR_BOOT, default=True):
                vol.Boolean(),
                vol.Optional(ATTR_SSL, default=False):
                vol.Boolean(),
                vol.Optional(ATTR_PORT, default=8123):
                network_port,
                vol.Optional(ATTR_REFRESH_TOKEN):
                vol.Maybe(vol.Coerce(str)),
                vol.Optional(ATTR_WATCHDOG, default=True):
                vol.Boolean(),
                vol.Optional(ATTR_WAIT_BOOT, default=600):
                vol.All(vol.Coerce(int), vol.Range(min=60)),
            },
            extra=vol.REMOVE_EXTRA,
        ),
        vol.Optional(ATTR_FOLDERS, default=list):
        vol.All([vol.In(ALL_FOLDERS)], vol.Unique()),
        vol.Optional(ATTR_ADDONS, default=list):
        vol.All(
            [
                vol.Schema(
                    {
                        vol.Required(ATTR_SLUG): vol.Coerce(str),
                        vol.Required(ATTR_NAME): vol.Coerce(str),
                        vol.Required(ATTR_VERSION): vol.Coerce(str),
                        vol.Optional(ATTR_SIZE, default=0): vol.Coerce(float),
                    },
                    extra=vol.REMOVE_EXTRA,
                )
            ],
            unique_addons,
        ),
        vol.Optional(ATTR_REPOSITORIES, default=list):
        repositories,
    },
    extra=vol.ALLOW_EXTRA,
)
