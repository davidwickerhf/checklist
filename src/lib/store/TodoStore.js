import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list')) ?? [] : [];

export const todos = writable(data);

todos.subscribe((v) => {
	if (browser) {
		localStorage.setItem('st-todo-list', JSON.stringify(v));
	}
});

export const addTodo = () => {
	todos.update((current) => {
		return [...current, { id: uuidv4(), text: '', complete: false }];
	});
};

export const deleteTodo = (id) => {
	todos.update((current) => {
		return current.filter((todo) => todo.id !== id);
	});
};

export const toggleComplete = (id) => {
	todos.update((current) => {
		return current.map((todo) => {
			if (todo.id === id) {
				return { ...todo, complete: !todo.complete };
			}
			return todo;
		});
	});
};

export const editTodo = (id, text) => {
	todos.update((current) => {
		return current.map((todo) => {
			if (todo.id === id) {
				return { ...todo, text: text };
			}
			return todo;
		});
	});
};
