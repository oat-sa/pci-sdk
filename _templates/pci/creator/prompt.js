const path = require("path");
const fs = require("fs");

const reIdentifier = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
const reVersion = /^\d+\.\d+\.\d+$/;

module.exports = [
    {
        type: "input",
        name: "root",
        message: "Where do we generate the PCI (path)?",
        initial: ".",
        validate: value => {
            const resolved = path.resolve(value);
            if (!fs.existsSync(resolved)) {
                return `${resolved} doesn't seems to exist`;
            }
            return true;
        },
    },
    {
        type: "input",
        name: "typeIdentifier",
        message: "What's the PCI typeIdentifier?",
        validate: value => {
            if (!reIdentifier.test(value)) {
                return `${value} is not a valid identifier`;
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'version',
        message: "What's the PCI version?",
        initial: '0.0.1',
        validate: value => {
            if (!reVersion.test(value)) {
                return `${value} is not a valid version number`;
            }
            return true;
        }
    },
    {
        type: "input",
        name: "label",
        message: "What's the PCI name to display?",
        validate: value => {
            if (!value.trim()) {
                return `The label is mandatory. If you omit it, the TAO installer will refuse to install the PCI!`;
            }
            return true;
        }
    },
    {
        type: "input",
        name: "description",
        message: "What does the PCI do?",
        validate: value => {
            if (!value.trim()) {
                return `The description is mandatory. If you omit it, the TAO installer will refuse to install the PCI!`;
            }
            return true;
        }
    },
    {
        type: 'select',
        name: 'cardinality',
        initial: 'single',
        choices: ['single', 'multiple', 'ordered', 'record'],
        message: "What's the cardinality of the PCI response?"
    },
    {
        type: 'select',
        name: 'baseType',
        initial: 'string',
        choices: ['boolean', 'integer', 'float', 'string', 'point', 'pair', 'directedPair', 'duration', 'file', 'uri', 'identifier', 'intOrIdentifier'],
        message: "What's the type of the PCI response?"
    }
];
