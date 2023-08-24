"use client";

import AddTodoForm from "./AddTodoForm";

const TodoList = () => {
	return (
		<main>
			<h1>
				Todo List
				{/* <span>Indicators: {isFetchingIndicators + isMuatatingIndicators}</span> */}
			</h1>
			 <AddTodoForm  /> 
            {/* <div>
                <button onClick={() => setPage(prev => prev - 1)} disabled={page == 1} onMouseEnter={() => prefetchPrevPage(page - 1)}>Prev</button>
                <button onClick={() => setPage(prev => prev + 1)} disabled={page == 3} onMouseEnter={() => prefetchNextPage(page + 1)}>Next</button>
            </div> */} */}
		</main>
	);
};

export default TodoList;
