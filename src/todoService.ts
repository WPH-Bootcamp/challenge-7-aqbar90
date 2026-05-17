// TODO: Import tipe-tipe yang sudah didefinisikan di types.ts
import { ToDoItem } from './types';

// TODO: Import fungsi storage untuk baca/tulis file

import { readToDos } from './storage';
import { saveToDos } from './storage';
import { text } from 'stream/consumers';

// TODO: Buat fungsi untuk menambahkan To-Do baru
// - Generate id yang unik (bisa pakai timestamp atau counter)
// - Pastikan text tidak kosong
// - Set default status sebagai active

export function addToDo(text: string): void {
  if (!text || text.trim() === '') {
    console.log('Mohon isi todo');
    return;
  }
  const todos: ToDoItem[] = readToDos();
  const newTodos: ToDoItem = {
    id: Date.now(),
    text: text.trim(),
    completed: false,
    status: 'Active',
    created: new Date(),
  };
  todos.push(newTodos);
  saveToDos(todos);
}
console.log('Todo berhasil ditambahkan');

// TODO: Buat fungsi untuk menandai To-Do sebagai selesai

export function completedToDo(id: number): void {
  const todos: ToDoItem[] = readToDos();

  // - Cari To-Do berdasarkan id

  const todo = todos.find((item) => item.id === id);

  // - Handle kasus jika id tidak ditemukan

  if (!todo) {
    console.log(`Todo dengan id "${id}" tidak ditemukan`);
    return;
  }

  // - Ubah statusnya menjadi completed

  todo.completed = true;
  todo.status = 'Done';
  saveToDos(todos);
  console.log(`Todo "${todo.text}" berhasil di simpan`);
}

// TODO: Buat fungsi untuk menghapus To-Do

export function deleteToDo(id: number): void {
  const todos: ToDoItem[] = readToDos();

  // - Filter To-Do berdasarkan id

  const todo = todos.find((todo) => todo.id === id);

  // - Handle kasus jika id tidak ditemukan

  if (!todo) {
    console.log(`Todo dengan id "${id}" tidak ditemukan`);
    return;
  }

  const updatedTodos = todos.filter((todo) => todo.id !== id);

  saveToDos(updatedTodos);

  console.log(`Todo "${todo?.text}" berhasil di hapus`);
}

// TODO: Buat fungsi untuk menampilkan semua To-Do
// - Tampilkan dengan format yang rapi
// - Tambahkan status [ACTIVE] atau [DONE] di depan setiap To-Do

export function listTodos(): void {
  const todos: ToDoItem[] = readToDos();

  // jika kosong

  if (todos.length === 0) {
    console.log('Belum ada List Todo');
    return;
  }

  console.log('=== TODO LIST ===');

  // looping todo

  todos.forEach((todo, index) => {
    const statusLabel = todo.status === 'Done' ? '[Done]' : '[Active]';

    // - Berikan nomor urut untuk memudahkan user memilih

    console.log(
      `${index + 1}. ${statusLabel} ${todo.text}
    ID      : ${todo.id}
    Created : ${new Date(todo.created).toLocaleString('id-ID')}`
    );
  });

  console.log('=========');
}

// TODO: Buat fungsi untuk mencari To-Do berdasarkan keyword

export function searchToDo(keyword: string): void {
  if (!keyword || keyword.trim() === '') {
    console.log('Isi keyword pencarian');
    return;
  }

  const todos: ToDoItem[] = readToDos();

  // Cari todo berdasarkan keyword

  const result = todos.filter((todo) =>
    todo.text.toLowerCase().includes(keyword.toLowerCase())
  );

  if (result.length === 0) {
    console.log(`Todo dengan keyword "${keyword}" tidak ditemukan`);
    return;
  }

  // Hasil Pencarian

  console.log('=== Hasil Pencarian ===');
  result.forEach((todo, index) => {
    const statusLabel = todo.status === 'Done' ? '[Done]' : '[Active]';

    console.log(`${index + 1}.${statusLabel} ${todo.text}
      ID : ${todo.id}
      Created : ${new Date(todo.created).toLocaleString('id-ID')}`);
  });

  console.log('=========');
}
