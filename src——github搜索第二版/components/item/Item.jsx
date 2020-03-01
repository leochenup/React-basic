import React, { Component } from 'react'
import './Item.css'

export default class Item extends Component {
    render() {
        let { item } = this.props
        return (
            <div className="card">
                <a href={item.html_url} target="_blank" rel="noopener noreferrer" >
                    <img src={item.avatar_url} style={{ width: '100px' }} alt="图片加载中" />
                </a>
                <p className="card-text">{item.login}</p>
            </div>
        )
    }
}