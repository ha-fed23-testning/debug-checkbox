import { create } from "zustand";


const data = [
	{ id: 1, title: 'todo 1', done: false },
	{ id: 2, title: 'todo 2', done: true },
	{ id: 3, title: 'todo 3', done: false },
]
const useStore = create(set => ({
	todos: data,

	toggleTodo: id => set(state => ({
		todos: state.todos.map(t => t.id === id ? { ...t, done: !t.done } : t)
	}))
}))


export { useStore }
