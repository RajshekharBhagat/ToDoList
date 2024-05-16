import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'toDo',
    initialState: [],
    reducers: {
        addToDo: (state,action) => {
            const newToDo = {
                id:Date.now(),
                title: action.payload.title,
                description: action.payload.description,
                priority:action.payload.priority,
                status: false
            };
            state.push(newToDo);
        },
        toggleComplete: (state,action) => {
            const {id , status} = action.payload;
            const todoToUpdate = state.find((todo) => todo.id === id);
            if(todoToUpdate) {
                const updateTodo = {...todoToUpdate,status};

                const updatedState = state.map(todo => todo.id === id ? updateTodo: todo);

                return updatedState;
            };
            return state;
        },
        deleteToDo: (state, action) => {
            const idToDelete = action.payload;
            return state.filter(todo => todo.id !== idToDelete);
        }
    }

});

export const { addToDo, toggleComplete, deleteToDo } = todoSlice.actions;

export default todoSlice.reducer;