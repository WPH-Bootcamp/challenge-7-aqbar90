import { ToDoItem } from './types';

// TODO: Implementasikan type guards di sini
// Hint: Type guard berguna untuk memastikan tipe data saat runtime

function isToDoItem(value: any): value is ToDoItem {
  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.id === 'number' &&
    typeof value.text === 'string' &&
    typeof value.completed === 'boolean' &&
    (value.status === 'Active' || value.status === 'Done')
  );
}

// TODO: Buat fungsi untuk memvalidasi apakah suatu objek adalah To-Do yang valid

function validateToDo(todo: any): boolean {
  if (!isToDoItem(todo)) {
    console.log('Data todo tidak valid');
    return false;
  }
  return true;
}

// TODO: Buat fungsi helper untuk menampilkan tanggal/waktu dengan format yang bagus

function formatDate(date: Date): string {
  return date.toLocaleString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

// TODO: Buat fungsi untuk memastikan input dari user adalah string yang valid

function isValidString(input: any): input is string {
  return typeof input === 'string' && input.trim().length > 0;
}
