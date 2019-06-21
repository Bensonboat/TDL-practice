
import React from 'react'

class InputTaskTitle extends React.Component{
    render(){
        return (
            <div>
                <div>
                    <input type="checkbox" />
                    <input type="text" placeholder='put something here'/>
                    <i class="far fa-star fa-lg icon"></i>
                    <i class="fas fa-pen fa-lg icon icon_edit"></i>
                </div>
            </div>
        )
    }
}

export { InputTaskTitle }