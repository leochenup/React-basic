import React, { Component } from 'react'
import './List.css'
import Item from '../item/Item'

export default class List extends Component {
    render() {
        let { comments, delCommmentRender } = this.props
        return (
            <div className="col-md-8">
                <h3 className="reply">评论回复：</h3>
                <h2 style={{ display: comments.length ? 'none' : 'block' }}>暂无评论，点击左侧添加评论！！！</h2>
                <ul className="list-group">
                    {comments.map((item) => <Item delCommmentRender={delCommmentRender} key={item.userId} item={item} />)}
                </ul>
            </div>
        )
    }
}