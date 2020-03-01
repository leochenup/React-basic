import React, { Component } from 'react'




export default class HomeMessageDetail extends Component {

    state = {
        messageDetails: [
            { id: 0, title: 'Message001', content: '我爱你, 中国' },
            { id: 1, title: 'Message002', content: '我爱你, 老婆' },
            { id: 2, title: 'Message003', content: '我爱你, 孩子1' },
            { id: 3, title: 'Message004', content: '我爱你, 孩子2' },
            { id: 4, title: 'Message005', content: '我爱你, 孩子3' },
        ]
    }

    render() {
        let { mid } = this.props.match.params
        console.log(mid)
        let message = this.state.messageDetails[mid]
        return (
            <ul>
                <li>ID: {message.id}</li>
                <li>TITLE: {message.title}</li>
                <li>CONTENT: {message.content}</li>
            </ul>
        )
    }
}