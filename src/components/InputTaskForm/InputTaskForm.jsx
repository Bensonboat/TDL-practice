
import React from 'react'

import { InputTaskTitle } from '../InputTaskTitle'
import { InputTaskItem } from '../InputTaskItem'

class InputTaskForm extends React.Component{
    render(){
        return(
            <div>
                <InputTaskTitle />
                <div>

                    <InputTaskItem className="fas fa-calendar-alt" inputName="Deadline" />
                    <input type="date"/>
                    <input type="time"/>

                    <InputTaskItem className="fas fa-file" inputName="File" />
                    <input type="file"/>

                    <InputTaskItem className="far fa-comment-dots" inputName="Comment" />
                    <textarea cols="55" rows="7"></textarea>

                </div>
                <button onClick={this.props.closeForm_for_cancel}>X Cancel</button>
                <button>+ Save</button>
            </div>
        )
    }
}

export { InputTaskForm }