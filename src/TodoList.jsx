import { useStore } from "./store.js"

const TodoList = () => {
	const todos = useStore(state => state.todos)
	const toggleTodo = useStore(state => state.toggleTodo)
	return (
		<div className="todo-list">
		{todos.map(t => (
			<div className="item" key={t.id}>
			<input type="checkbox" checked={t.done} onChange={() => toggleTodo(t.id)} />
			<label onClick={() => toggleTodo(t.id)}> {t.title} </label>
			</div>
		))}
		</div>
	)
}

export default TodoList
