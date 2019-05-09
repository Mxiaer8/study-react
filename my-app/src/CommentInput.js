import React from 'react'
import { thisTypeAnnotation } from '@babel/types';

class CommentInput extends React.Component {
    constructor() {
        super()
        this.state = {
            username: '',
            content: ''
        }
    }

    componentWillMount() {
        this._loadUserName()
    }


    componentDidMount() {
        this.textarea.focus()
    }

    handleUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    handleUserOnBlur(e) {
       this._saveUserName(e.target.value)
    }

    _loadUserName() {
        const username = localStorage.getItem('username')
        if(username) {
            console.log(username)
            this.setState({
                username: username
            })
        }
    }

    _saveUserName(username) {
        localStorage.setItem('username', username)
    }


    handleTextarea(e) {
        this.setState({
            content: e.target.value
        })
    }


    handleSubmitForm() {
        if(this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                time: +new Date()
            })
        }
        this.setState({content: ''})
    }


    render() {
        return(
            <div className='comment-input'>
            <div className='comment-field'>
              <span className='comment-field-name'>用户名：</span>
              <div className='comment-field-input'>
                <input 
                value = {this.state.username}
                onChange = {this.handleUsername.bind(this)}
                onBlur = {this.handleUserOnBlur.bind(this)}
                />
              </div>
            </div>
            <div className='comment-field'>
              <span className='comment-field-name'>评论内容：</span>
              <div className='comment-field-input'>
                <textarea 
                value = {this.state.content}
                ref={(textarea) => this.textarea = textarea}
                onChange = {this.handleTextarea.bind(this)}
                />
              </div>
            </div>
            <div className='comment-field-button'>
              <button
              onClick = {this.handleSubmitForm.bind(this)}>
                发布
              </button>
            </div>
          </div>
        )
    }
}

export default CommentInput