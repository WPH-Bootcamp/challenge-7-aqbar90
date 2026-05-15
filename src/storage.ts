import fs from 'fs';
import path from 'path';
import { ToDoItem } from './types';

// TODO: Definisikan path file untuk menyimpan data To-Do

const DATA_FOLDER = path.join(__dirname, '../data');
const TODO_FILE = path.join(DATA_FOLDER, 'todos.json');

// TODO: Buat fungsi untuk membaca To-Do dari file
// Hint: Gunakan try-catch untuk handle error saat membaca file

export function readToDos(): ToDoItem[] {
  try {
    const data = fs.readFileSync(TODO_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.log('Gagal membaca file', error);
    return [];
  }
}

// TODO: Buat fungsi untuk menyimpan To-Do ke file
// Hint: Jangan lupa konversi ke JSON string sebelum disimpan

export function saveToDos(todos: ToDoItem[]): void {
  try {
    const jsonData = JSON.stringify(todos, null, 2);
    fs.writeFileSync(TODO_FILE, jsonData);
  } catch (error) {
    console.log('Gagal menyimpan file', error);
  }
}

// TODO: Buat fungsi untuk inisialisasi storage (buat file kosong jika belum ada)
export function initStorage(): void {
  try {
    if (!fs.existsSync(DATA_FOLDER)) {
      fs.mkdirSync(DATA_FOLDER);
    }
    if (!fs.existsSync(TODO_FILE)) {
      fs.writeFileSync(TODO_FILE, JSON.stringify([]));
    }
  } catch (error) {
    console.log('Gagal Inisialisasi storage', error);
  }
}
