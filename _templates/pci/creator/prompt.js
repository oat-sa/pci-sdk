const {
    validatePath,
    validateIdentifier,
    validateVersion,
    validateNotEmpty
} = require('../../../helpers/validators.js');

module.exports = [
    {
        type: 'input',
        name: 'root',
        message: 'Where do we generate the PCI (path)?',
        initial: '.',
        validate: validatePath
    },
    {
        type: 'input',
        name: 'typeIdentifier',
        message: "What's the PCI typeIdentifier?",
        validate: validateIdentifier
    },
    {
        type: 'input',
        name: 'version',
        message: "What's the PCI version?",
        initial: '0.0.1',
        validate: validateVersion
    },
    {
        type: 'input',
        name: 'label',
        message: "What's the PCI name to display?",
        validate: validateNotEmpty
    },
    {
        type: 'input',
        name: 'description',
        message: 'What does the PCI do?',
        validate: validateNotEmpty
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
    }
];
