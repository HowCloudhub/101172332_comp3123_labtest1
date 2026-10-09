const fs = require('node:fs');
const path = require('node:path');

const logsDirectory = path.join(process.cwd(), 'Logs');

try {
    if (!fs.existsSync(logsDirectory)) {
        console.log('Logs directory does not exist.');
    } else {
        const files = fs.readdirSync(logsDirectory).sort();

        for (const fileName of files) {
            const filePath = path.join(logsDirectory, fileName);

            console.log(`delete files...${fileName}`);
            fs.unlinkSync(filePath);
        }

        fs.rmdirSync(logsDirectory);
    }
} catch (error) {
    console.error('Could not remove log files:', error.message);
    process.exitCode = 1;
}