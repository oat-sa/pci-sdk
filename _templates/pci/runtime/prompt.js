const path = require("path");
const fs = require("fs");

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
