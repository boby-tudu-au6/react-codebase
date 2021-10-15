#!/usr/bin/env node
const func = require('./createFiles')

function main() {
    func(process.argv[2])
}

if (require.main === module) {
    main();
}


