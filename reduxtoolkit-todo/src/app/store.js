import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice' //importing the reducer 

export const store =configureStore({
    reducer:todoReducer   //gave the nowdege of reduecer
})     //it takes a object onlyy