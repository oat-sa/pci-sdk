const path = require('path');

const { validateIdentifier, validateNotEmpty, validatePath, validateVersion } = require('./validators.js');

let taoPath = '';

module.exports = {
    pciPath: {
        type: 'input',
        name: 'pciPath',
        message: 'Where do we generate the PCI (path)?',
        initial: '.',
        validate: validatePath
    },
    typeIdentifier: {
        type: 'input',
        name: 'typeIdentifier',
        message: "What's the PCI typeIdentifier?",
        validate: validateIdentifier
    },
    version: {
        type: 'input',
        name: 'version',
        message: "What's the PCI version?",
        initial: '0.0.1',
        validate: validateVersion
    },
    label: {
        type: 'input',
        name: 'label',
        message: "What's the PCI name to display?",
        validate: validateNotEmpty
    },
    description: {
        type: 'input',
        name: 'description',
        message: 'What does the PCI do?',
        validate: validateNotEmpty
    },
    cardinality: {
        type: 'select',
        name: 'cardinality',
        initial: 'single',
        choices: ['single', 'multiple', 'ordered', 'record'],
        message: "What's the cardinality of the PCI response?"
    },
    baseType: {
        type: 'select',
        name: 'baseType',
        initial: 'string',
        choices: [
            'boolean',
            'integer',
            'float',
            'string',
            'point',
            'pair',
            'directedPair',
            'duration',
            'file',
            'uri',
            'identifier',
            'intOrIdentifier'
        ],
        message: "What's the type of the PCI response?"
    },
    taoPath: {
        type: 'input',
        name: 'taoPath',
        message: 'Where is TAO installed (path)?',
        initial: '.',
        validate(value) {
            const result = validatePath(value);
            if (result === true) {
                taoPath = value;
            }
            return result;
        }
    },
    extension: {
        type: 'input',
        name: 'extension',
        message: "What's the extension name?",
        validate(value) {
            const result = validateIdentifier(value);
            if (result !== true) {
                return result;
            }
            const resolved = path.resolve(taoPath, value);
            if (validatePath(resolved) !== true) {
                return `There is no extension named ${value}`;
            }
            return true;
        }
    }
};
