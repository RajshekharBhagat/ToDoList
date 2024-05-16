import {configureStore} from '@reduxjs/toolkit';
import toDoReducer from './todoSlice';

export default configureStore ({
    reducer: {
        toDos: toDoReducer,
    },
})