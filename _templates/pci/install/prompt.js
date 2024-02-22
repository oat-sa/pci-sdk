const { validatePath, validateIdentifier } = require('../../../helpers/validators.js');

const path = require('path');

let root = '';

module.exports = [
    {
        type: 'input',
        name: 'root',
        message: 'Where is TAO installed (path)?',
        initial: '.',
        validate: value => {
            const result = validatePath(value);
            if (result !== true) {
                return result;
            }
            root = value;
            return true;
        }
    },
    {
        type: 'input',
        name: 'extension',
        message: "What's the extension name?",
        validate: value => {
            const result = validateIdentifier(value);
            if (result !== true) {
                return result;
            }
            const resolved = path.resolve(root, value);
            if (validatePath(resolved) !== true) {
                return `There is no extension named ${value}`;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'typeIdentifier',
        message: "What's the PCI typeIdentifier?",
        validate: validateIdentifier
    }
];
