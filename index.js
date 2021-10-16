#!/usr/bin/env node
const func = require('./createFiles')

function main() {
    const type = process.argv[2];
    const name = process.argv[3]
    if (type === 'react' || type === 'next') {
        if (name !== null || name !== undefined) {
            func(type, name)
        } else {
            console.log('name is required')
        }
    } else {
        console.log('invalid type')
    }
}

if (require.main === module) {
    main();
}


