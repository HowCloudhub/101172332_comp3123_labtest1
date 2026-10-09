const fs = require("node:fs");
const path = require("node:path");

const originalDirectory = process.cwd();
const logsDirectory = path.join(originalDirectory, "Logs");

try {
    if (!fs.existsSync(logsDirectory)) {
        fs.mkdirSync(logsDirectory);
    }

    process.chdir(logsDirectory);

    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const filePath = path.join(process.cwd(), fileName);

        fs.writeFileSync(
            filePath,
            `This is the content of ${fileName}.\n`,
            "utf8"
        );

        console.log(fileName);
    }
} catch (error) {
    console.error("Log files could not be created:", error.message);
    process.exitCode = 1;
} finally {
    process.chdir(originalDirectory);
}