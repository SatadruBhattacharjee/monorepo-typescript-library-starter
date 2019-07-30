const pack = require("./package");

module.exports = {
    "mode": "modules",
    "out": "docs",
    exclude: [
        '**/node_modules/**',
        '**/rollup.*.*(ts|js)',
        '**/*+(index|.spec|.test|.e2e).ts'

    ],
    name: pack.name,
    excludePrivate: true,
    skipInternal: true
};