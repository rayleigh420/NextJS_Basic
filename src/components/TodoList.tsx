"use client";

import useSWR from "swr";
import AddTodoForm from "./AddTodoForm";
import { getTodo } from "@/apis/todoAPi";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";

const TodoList = () => {
	const {
		data: todos,
		isLoading,
		error,
	} = useSWR("/todos", getTodo, {
		onSuccess: (data) => data?.sort((a: Todo, b: Todo) => b.id - a.id),
	});

	let content;
	if (isLoading) {
		content = <p>Loading...</p>;
	} else if (error) {
		content = <p>{error.message}</p>;
	} else {
		content = todos?.map((todo) => {
			return (
				<article key={todo.id}>
					<div className="todo">
						<input
							type="checkbox"
							checked={todo.completed}
							id={String(todo.id)}
							// onChange={() =>
							//     updateTodoMutation({ ...todo, completed: !todo.completed })
							// }
						/>
						<label htmlFor={String(todo.id)}>{todo.title}</label>
					</div>
					<button
						className="trash"
						// onClick={() => deleteTodoMutation({ id: todo.id })}
					>
						<FontAwesomeIcon icon={faTrash} />
					</button>
				</article>
			);
		});
	}

	return (
		<main>
			<h1>
				Todo List
				{/* <span>Indicators: {isFetchingIndicators + isMuatatingIndicators}</span> */}
			</h1>
			<AddTodoForm />
			{content}
			{/* <div>
                <button onClick={() => setPage(prev => prev - 1)} disabled={page == 1} onMouseEnter={() => prefetchPrevPage(page - 1)}>Prev</button>
                <button onClick={() => setPage(prev => prev + 1)} disabled={page == 3} onMouseEnter={() => prefetchNextPage(page + 1)}>Next</button>
            </div> */}
		</main>
	);
};

export default TodoList;
