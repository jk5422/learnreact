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
        }
    }
})

export const { addTodo, deleteTodo, clearTodos } = TodoSlice.actions;
export default TodoSlice.reducer;