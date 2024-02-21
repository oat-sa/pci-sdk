const path = require('path');
const fs = require('fs');

const reIdentifier = /^[_a-zA-Z][_a-zA-Z0-9]*$/;

let root = '';

module.exports = [
    {
        type: 'input',
        name: 'root',
        message: 'Where is TAO installed (path)?',
        initial: '.',
        validate: value => {
            const resolved = path.resolve(value);
            if (!fs.existsSync(resolved)) {
                return `${resolved} doesn't seems to exist`;
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
            if (!reIdentifier.test(value)) {
                return `${value} is not a valid identifier`;
            }
            const resolved = path.resolve(root, value);
            if (!fs.existsSync(resolved)) {
                return `There is not extension named${resolved} doesn't seems to exist`;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'typeIdentifier',
        message: "What's the PCI typeIdentifier?",
        validate: value => {
            if (!reIdentifier.test(value)) {
                return `${value} is not a valid identifier`;
            }
            return true;
        }
    }
];
