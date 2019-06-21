import React from 'react'
import { BookMark } from '../BookMark'



class TopBlock extends React.Component {
    render() {
        return (
            <div>
                <BookMark to='/' name='My Tasks'></BookMark>
                <BookMark to="/inProgress" name="In Progress" />
                <BookMark to="/completed" name="Completed" />
            </div>
        )
    }
}

export { TopBlock }