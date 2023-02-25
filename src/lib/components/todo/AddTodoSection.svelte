<script>
    import {addTodo} from '../../store/TodoStore'
</script>

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
<section class="flex justify-between">
    <h3 class="text-xl font-bold text-gray-three">Checklist</h3>
    <button
        type="button"
        on:click={addTodo}
        class="group flex items-center rounded-md border-cream-four bg-green-one px-6 py-3 text-lg font-semibold text-gray-five outline outline-2 outline-offset-2 outline-green-one hover:text-green-five focus-visible:text-green-five focus-visible:outline-green-five"
    >
        <p>Add Task</p>
        <i class=" ml-3 text-grey-five group-hover:text-green-five group-focus:text-green-five text-lg material-symbols-outlined">
            add_circle
        </i>
    </button>
</section>