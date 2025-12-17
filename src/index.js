const Task = require('./models/Task')
const FileHandler = require('./utils/fileHandler')

async function main() {
    console.log('🎯 Task Manager CLI v1.0');
    console.log('========================\n');

    // Test: Create a task
    const task1 = new Task(1, 'Learn JavaScript', 'Master async/await patterns');
    console.log('Created task:', task1.title);

    // Test: Save to file
    const tasks = [task1.toJSON()];
    await FileHandler.writeTasks(tasks);
    console.log('✅ Saved to file');

    // Test: Read from file
    const loadedTasks = await FileHandler.readTasks();
    console.log('📖 Loaded tasks:', loadedTasks.length);

    console.log('\n✨ Basic functionality working!');
}

main().catch(console.error);