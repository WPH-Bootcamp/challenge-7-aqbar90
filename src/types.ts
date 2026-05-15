// TODO: Definisikan tipe data untuk To-Do item di sini
// Hint: To-Do sebaiknya memiliki id, text, dan status completed

// TODO: Buat interface untuk To-Do item

// TODO: Buat tipe untuk status To-Do (active/done)

// TODO: Buat tipe untuk fungsi-fungsi yang akan digunakan

type ToDoStatus = 'Active' | 'Done';

interface ToDoItem {
  id: number;
  text: string;
  completed: boolean;
  status: ToDoStatus;
  created: Date;
}

type AddToDo = (text: string) => void;
type StatusToDo = (completed: boolean) => void;
type DeleteTDo = (id: number) => void;
type ListToDo = () => void;
type SearchToDo = (Keyword: string) => void;
