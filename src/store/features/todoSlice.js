import { createSlice,nanoid } from "@reduxjs/toolkit"
const initialState = {
    todos:[
        {
            id:1,
            text:"Eat Food"
        }
    ]
}


export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },

        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            state.todos.map((todo)=>(todo.id===action.payload?todo.text=action.payload.text:todo))
        }
    }
})


export const  {addTodo,removeTodo,updateTodo} = todoSlice.actions
export default todoSlice.reducer

