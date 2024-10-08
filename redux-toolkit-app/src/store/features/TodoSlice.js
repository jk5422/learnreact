import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

const TodoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        clearTodos: (state) => {
            state.todos = [];
        },
        updateTodo: (state, action) => {
            const { id, newText } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = newText;
            }
        }
    }
})

export const { addTodo, deleteTodo, clearTodos, updateTodo } = TodoSlice.actions;
export default TodoSlice.reducer;