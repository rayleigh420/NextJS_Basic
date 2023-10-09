import axios from "../utils/axios";

export const getTodo = async (url: string) => {
	try {
		const result = await axios.get<Todo[]>(`${url}`);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const addTodo = async (initialTodo: Todo) => {
	try {
		if (Math.random() < 0.5) {
			throw Error("Random less 0.5");
		}
		const result = await axios.post<Todo>("/todos", initialTodo);
		return result.data;
	} catch (e: any) {
		console.log(e);
		throw Error(e.message);
	}
};

export const updateTodo = async (initialTodo: Todo) => {
	try {
		const result = await axios.put<Todo>(
			`todos/${initialTodo.id}`,
			initialTodo
		);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};

export const deleteTodo = async (initialTodo: Todo) => {
	try {
		const result = await axios.delete<Todo>(`todos/${initialTodo.id}`);
		return result.data;
	} catch (e) {
		console.log(e);
	}
};
