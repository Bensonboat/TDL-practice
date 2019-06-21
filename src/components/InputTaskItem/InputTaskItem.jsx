import React from 'react'


// 表格細項
class InputTaskItem extends React.Component{
    render(){
        return(
            <div>
                <i class={this.props.className}></i>
                {this.props.inputName}
            </div>
        )
    }
}

export { InputTaskItem }