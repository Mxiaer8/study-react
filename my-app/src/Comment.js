import React from 'react'

class Comment extends React.Component {
    render() {
        return (
            <div className='comment'>
                <div className='comment-user'>
                    <span className='comment-username'>{this.props.comment.username}:&nbsp;&nbsp;</span>
                </div>
                <p>{this.props.comment.content}</p>
                <span className='comment-createdtime'>
                    {this.props.comment.time}
                </span>
            </div>
        )
    }
}

export default Comment