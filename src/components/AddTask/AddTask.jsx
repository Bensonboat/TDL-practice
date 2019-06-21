
import React from 'react'

import { InputTaskForm } from '../InputTaskForm'

class AddTask extends React.Component{
    openForm(){
        document.getElementById('input_task_form').style.display = ''
        document.getElementById('add_new_task').style.display = 'none'
    }

    closeForm(){
        document.getElementById('input_task_form').style.display = 'none'
        document.getElementById('add_new_task').style.display = ''
    }

    render(){
        return(
            <div>
                <div id='add_new_task' onClick={this.openForm} class='add-new-task'>+ Add Task</div>
                <div id='input_task_form' style={{display:'none'}}>
                    <InputTaskForm closeForm_for_cancel = { this.closeForm }></InputTaskForm>
                </div>
            </div>
        )
    }
}

export {AddTask}