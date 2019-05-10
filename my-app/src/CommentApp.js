import React from 'react';
import CommentInput from './CommentInput'
import CommentList from './CommentList'
import './index.css'
class CommentApp extends React.Component {
    constructor() {
        super()
        this.state = {
            comments: []
        }

    }

    componentWillMount() {
        const commentsStroge = JSON.parse(localStorage.getItem('comments'))
        if (commentsStroge) {
            this._updateTime()
            this.timer = setInterval(()=>{
               this._updateTime()
            },5000)
        }

    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    _updateTime() {
        console.log('1')
        const commentsStroge = JSON.parse(localStorage.getItem('comments'))
        commentsStroge.map((comment) => {
            comment.time = this._updateTimeString(comment.time)
        })
        this.setState({
            comments: commentsStroge
        })
    }


    handleSubmitComment(comment) {
        let commentsStroge = JSON.parse(localStorage.getItem('comments'))
        if (!commentsStroge) commentsStroge = []
        commentsStroge.push(comment)
        this._saveComment(commentsStroge)
        commentsStroge.map((comment) => {
            comment.time = this._updateTimeString(comment.time)
        })
        this.setState({
            comments: commentsStroge
        })
    }

    _updateTimeString(sendTime) {
        const duration = (+Date.now() - sendTime) / 1000
        const timeString = duration > 60 ? `${Math.round(duration / 60)} 分钟前` : `${Math.round(Math.max(duration, 1))} 秒前`
        return timeString
    }

    _saveComment(comments) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput
                    onSubmit={this.handleSubmitComment.bind(this)} />
                <CommentList
                    comments={this.state.comments} />
            </div>
        )
    }
}
export default CommentApp