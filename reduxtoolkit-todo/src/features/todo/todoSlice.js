import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id:1, text: "hello"}]
}

export const todoSlice = createSlice({
    name: 'todo', 
    initialState,
    reducers: {     //isme aate hai properties and functions
        addTodo: (state, action)=>{   //it takes two things, state and action  : state gives acces to initial state/current state and action give whatever the param comming
            const todo = {
                id:nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state, action)=>{
           state.todos = state.todos.filter((todo) => todo.id!==action.payload)
        }
    }  
})

export const {addTodo, removeTodo} = todoSlice.actions //exported individual functionality

export default todoSlice.reducer //exported the reducer  reducer ko batana padega kon kon se slices hai taaki voh sirf unse hi value ya changes accept kare only