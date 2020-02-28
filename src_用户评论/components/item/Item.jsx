import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {

    deleteComment = () => {
        let { item, delCommmentRender } = this.props
        if(window.confirm(`你确定删除 ${item.userName} 的评论吗？`)) {
            delCommmentRender(item.userId)
        }
    }

    render() {
        let { item } = this.props
        return (
            <li className="list-group-item">
                <div className="handle">
                    <a href="#1" onClick={this.deleteComment}>删除</a>
                </div>
                <p className="user"><span >{item.userName}</span><span>说:</span></p>
                <p className="centence">{item.content}</p>
            </li>
        )
    }
}