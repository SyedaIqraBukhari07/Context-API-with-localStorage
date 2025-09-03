import {createContext,useContext} from "react"
export const TodoContext=createContext({
    todos:[{
        id:1,
        todo:"msg todo",
        completed:false,
    }
    ],
    addTodo:(todo)=>{},
    updateTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    togglecomplete:(id)=>{}


})
export const TodoProvider=TodoContext.Provider
export const useTodo=()=>
{
    return useContext(TodoContext)
}