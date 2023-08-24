const AddTodoForm = () => {
	return (
		<form>
			<label htmlFor="new-todo">Enter a new todo item</label>
			<div className="new-todo">
				<input
					type="text"
					id="new-todo"
					placeholder="Enter new todo"
					// value={newTodo}
					// onChange={changeTodo}
				/>
			</div>
			<button className="submit">
				{/* <FontAwesomeIcon icon={faUpload} /> */}
			</button>
			{/* <button onClick={handleErrorTodo}>Error</button> */}
		</form>
	);
};

export default AddTodoForm;
