#!/usr/bin/env node

const { runner } = require('hygen');
const Logger = require('hygen/dist/logger');
const path = require('path');
const defaultTemplates = path.join(__dirname, 'templates');

const commands = {
    'create:runtime': ['pci', 'runtime'],
    'create:creator': ['pci', 'creator'],
    'create:installer': ['pci', 'installer'],
    'create:migration': ['pci', 'migration']
};

function generateTemplate(command) {
    if ('string' === typeof command) {
        command = command.split(/\s+/g);
    }
    runner(command, {
        templates: defaultTemplates,
        cwd: process.cwd(),
        logger: new Logger.default(console.log.bind(console)),
        createPrompter: () => require('enquirer'),
        exec: (action, body) => {
            const opts = body && body.length > 0 ? { input: body } : {};
            return require('execa').shell(action, opts);
        },
        debug: !!process.env.DEBUG
    });
}

const command = process.argv[2];
if (!commands[command]) {
    console.log(`The command ${command} does not exist!`);
    process.exit(-1);
}

generateTemplate(commands[command]);
