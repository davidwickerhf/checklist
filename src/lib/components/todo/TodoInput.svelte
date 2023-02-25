<script>
	import { deleteTodo, toggleComplete, editTodo } from '../../store/TodoStore';

	export let todo;

	$: completeClass = todo.complete ? 'bg-green-three' : 'bg-leaf-one';
</script>

<link
	rel="stylesheet"
	href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>
<div class="flex items-center justify-between rounded-md border-2 border-gray-one px-5 py-4 ">
	<div class="flex w-full max-w-lg items-center justify-start">
		<label for={`${todo.id}-checkbox`} class="sr-only">Compelete todo</label>
		<input
			type="checkbox"
			id={`${todo.id}-checkbox`}
			checked={todo.complete}
			on:change={() => toggleComplete(todo.id)}
			class="bg-cream h-4 w-4 rounded border-gray-three text-green-four outline-none focus:outline focus:outline-2 focus:outline-green-five"
		/>
		<label for={`${todo.id}-text`} class="sr-only">Edit todo</label>
		<input
			type="text"
			id={`${todo.id}-text`}
			placeholder="Enter a todo"
			value={todo.text}
			on:input={(e) => editTodo(todo.id, e.target.value)}
			class="ml-5 flex-1 text-ellipsis rounded-none border-x-0 border-t-0 border-b border-dashed border-b-gray-two bg-cream-four px-0 pb-1 text-base font-normal text-gray-three placeholder:text-gray-two focus:border-gray-three focus:outline-none focus:ring-0"
		/>
		<span
			class="{completeClass}  ml-5 hidden rounded-full py-0.5 px-2 text-sm font-normal text-gray-five md:block"
		>
			{todo.complete ? 'Complete' : 'In Progress'}
		</span>
	</div>
	<button
		type="button"
		on:click={() => deleteTodo(todo.id)}
		class="group ml-4 flex items-center justify-center rounded-md bg-cream-four p-2 hover:bg-steel-one focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-five"
	>
		<span class="sr-only">Delete todo</span>
		<span class="material-symbols-outlined h-5 w-5 text-steel-three group-hover:text-gray-five">
			delete_forever
		</span>
	</button>
</div>
