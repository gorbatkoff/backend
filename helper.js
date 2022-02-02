const fs = require('fs'); // import file system
const { dataBase } = require('./config'); // import dataBase from cfg

const readDataBase = () => { // function of reading dataBase
    return JSON.parse(fs.readFileSync(dataBase, 'utf8')); // parsing dataBase by JSON.parse
}

const writeDataBase = (todos) => { // function of writing into dataBase
    fs.writeFileSync(dataBase, JSON.stringify(todos));
}

const filter = (filterBy, order, pp, page) => { // Filter function
    let filteredTodos = readDataBase(); // Reading of data base with tasks

    if (filterBy == 'all') filteredTodos = filteredTodos; // Sorting by done
    if (filterBy == 'done') filteredTodos = filteredTodos.filter((task) => task.done == true); // Sorting by done
    if (filterBy == 'undone') filteredTodos = filteredTodos.filter((task) => task.done == false); // Sorting by undone

    if (order === 'asc') filteredTodos.sort((a, b) => a.createdAt - b.createdAt); // Sorting by ascending
    if (order === 'desc') filteredTodos.sort((a, b) => b.createdAt - a.createdAt); // Sorting by descending

    const amountTasks = filteredTodos.length;
    const lastTaskIndex = page * pp; // Index of last task on page
    const firstTaskIndex = lastTaskIndex - pp; // Ondex of first task on page

    let tasksOnPage = filteredTodos.slice(firstTaskIndex, lastTaskIndex); // Calculate count of task on page

    return { numberOfTasks: amountTasks, todos: tasksOnPage }
    // return filteredTodos;
}

module.exports = { readDataBase, writeDataBase, filter } // export three functions into other modules