const {
    pciPath,
    typeIdentifier,
    version,
    label,
    description,
    cardinality,
    baseType
} = require('../../../helpers/prompts.js');

module.exports = [pciPath, typeIdentifier, version, label, description, cardinality, baseType];
