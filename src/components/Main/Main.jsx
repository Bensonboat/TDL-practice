import React from 'react'
import { TopBlock } from '../TopBlock'
import { HashRouter } from 'react-router-dom'

// import { InputTaskForm } from '../InputTaskForm';
import { AddTask } from '../AddTask'

import { Route } from 'react-router-dom'

//匯入store和建構動作的事件
import {todoListStore} from "../../store"
import { create_new } from "../../actions"


class Main extends React.Component{
    render(){
        return(
            <HashRouter>
                <TopBlock />
                <Route exact path='/' component={AddTask} />    
            </HashRouter>
        )
    }
}


//增加幾個測試用的全域函數
window.store = todoListStore
window.create_new = create_new

export { Main }