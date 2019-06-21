

import { ADD_TODOLIST } from '../constants/todoAction-type.js'

export const create_new = todoList => ({
    type : ADD_TODOLIST, 
    payload : todoList
})