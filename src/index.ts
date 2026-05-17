// TODO: Import readline untuk membaca input dari command line
import readline from 'readline';
import { ToDoStatus, ToDoItem } from './types';
import { readToDos, saveToDos, initStorage } from './storage';

// TODO: Import fungsi-fungsi dari todoService

import {
  addToDo,
  completedToDo,
  deleteToDo,
  listTodos,
  searchToDo,
} from './todoService';

// TODO: Import fungsi-fungsi dari utils (termasuk type guards)

import { isToDoItem, validateToDo, formatDate, isValidString } from './utils';

// TODO: Buat fungsi untuk menampilkan menu utama
// Tampilkan opsi seperti:
// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todos
// 5. Search todos
// 6. Exit

// export async function showMainMenu(): Promise<void> {
//   console.clear();

//   console.log(`=== TODO APP CLI ===

// 1. Add new todo
// 2. Mark todo as complete
// 3. Delete todo
// 4. List all todo
// 5. Search todos
// 6. Exit

// =========================`);

//   const choice = await handleUserInput(`Pilih menu : `);

//   switch (choice) {
//     case '1':
//       console.log(`Menu Add Todo di pilih`);
//       break;
//     case '2':
//       console.log(`Menu Complete Todo di pilih`);
//       break;
//     case '3':
//       console.log(`Menu Delete Todo di pilih`);
//       break;
//     case '4':
//       console.log(`Menu List All Todo di pilih`);
//       break;
//     case '5':
//       console.log(`Menu Search Todos di pilih`);
//       break;
//     case '6':
//       console.log(`Keluar dari App...`);
//       return;
//     default:
//       console.log(`Menu tidak valid`);
//   }

//   await showMainMenu();
// }

// showMainMenu();
// TODO: Buat fungsi untuk handle input dari user
// Gunakan readline.question untuk menerima input

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function handleUserInput(question: string): Promise<string> {
  return new Promise((resolve) => {
    r1.question(question, (answer: string) => {
      resolve(answer.trim());
    });
  });
}

// TODO: Buat fungsi main yang akan menjalankan aplikasi secara loop
// Hint: Gunakan recursive function atau while loop

function showMenu(): void {
  console.log(`=== TODO APP CLI ===

1. Add new todo
2. Mark todo as complete
3. Delete todo
4. List all todo
5. Search todos
6. Exit

=========================`);
}

async function main(): Promise<void> {
  while (true) {
    showMenu();

    const choice = await handleUserInput(`Pilih menu: `);
    switch (choice) {
      case '1': {
        const text = await handleUserInput(`Input todo text: `);
        addToDo(text);
        break;
      }
      case '2': {
        const id = await handleUserInput(`Input todo id: `);
        completedToDo(Number(id));
        break;
      }
      case '3': {
        const id = await handleUserInput(`Input todo id: `);
        deleteToDo(Number(id));
        break;
      }
      case '4': {
        listTodos();
        break;
      }
      case '5': {
        const keyword = await handleUserInput(`Input keyword: `);
        searchToDo(keyword);
        break;
      }
      case '6': {
        console.log(`Keluar dari App...`);
        r1.close();
        return;
      }
      default:
        console.log(`Menu tidak valid`);
    }
  }
}

// TODO: Jalankan fungsi main
console.log('Welcome to TypeScript To-Do App!');
console.log('Start building your app here...');

main();
