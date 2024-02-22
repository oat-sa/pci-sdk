const path = require('path');
const fs = require('fs');

const reIdentifier = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const reVersion = /^\d+\.\d+\.\d+$/;

module.exports = {
    validatePath(value) {
        const resolved = path.resolve(value);
        if (!fs.existsSync(resolved)) {
            return `${resolved} doesn't seems to exist`;
        }
        return true;
    },

    validateIdentifier(value) {
        if (!reIdentifier.test(value)) {
            return `${value} is not a valid identifier. It must follow the format ${reIdentifier.source}`;
        }
        return true;
    },

    validateVersion(value) {
        if (!reVersion.test(value)) {
            return `${value} is not a valid version number. It must follow the format ${reVersion.source}`;
        }
        return true;
    },

    validateNotEmpty(value) {
        if (!value.trim()) {
            return `This value is mandatory!`;
        }
        return true;
    }
};
