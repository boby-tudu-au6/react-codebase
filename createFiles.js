const fs = require('fs');
const path = require('path');
const reactData = require('./reactData')
const nextData = require('./nextData')
const { exec } = require('child_process');

async function copyDir(src, dest) {
    try {
        if (!fs.existsSync(dest)) {
            fs.mkdirSync(dest)
        }
        let entries = fs.readdirSync(src, { withFileTypes: true });

        for (let entry of entries) {
            let srcPath = path.join(src, entry.name);
            let destPath = path.join(dest, entry.name);

            entry.isDirectory() ?
                await copyDir(srcPath, destPath) :
                fs.copyFileSync(srcPath, destPath);
        }
    } catch (error) {
        console.log(error)
    }
}

const main = (type, name) => {
    copyDir(path.join(__dirname, type), name)
    var writeStream = fs.createWriteStream(`${name}/package.json`);
    if (type==='react') {
        writeStream.write(JSON.stringify(reactData(name), null, 2));
    } else if (type==='next') {
        writeStream.write(JSON.stringify(nextData(name), null, 2));
    }
    writeStream.end();
    exec(`cd ${name} && git init && git add .`, (err, stdout, stderr) => {
        if (err) {
            //some err occurred
            console.error(err)
        } else {
            // the *entire* stdout and stderr (buffered)
            console.log(`stdout: ${stdout}`);
            console.log(`stderr: ${stderr}`);
        }
    });
}

module.exports = main