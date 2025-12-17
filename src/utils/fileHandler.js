const fs = require('fs/promises');
const path = require('path');

const DATA_FILE = path.join(__dirname, '../../data/tasks.json');

class FileHandler {
    static async ensureDataFile() {
        try {
            await fs.access(DATA_FILE);
        } catch (err) {
            await fs.writeFile(DATA_FILE, JSON.stringify([], null, 2));
        }
    }

    static async readTasks() {
        await this.ensureDataFile();
        const data = await fs.readFile(DATA_FILE, 'utf-8');

        return JSON.parse(data);
    }

    static async writeTasks(tasks) {
        await this.ensureDataFile();
        await fs.writeFile(DATA_FILE, JSON.stringify(tasks, null, 2));
    }
}

module.exports = FileHandler;