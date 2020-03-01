import React, { Component } from 'react'
import Item from '../item/Item'

export default class List extends Component {
    render() {
        let { isFirst, isLoading, users, errMsg } = this.props.appState
        if (isFirst) {
            return <h2>Enter to search...</h2>
        } else if (isLoading) {
            return <h2>Loading...</h2>
        } else if (errMsg) {
        return <h2>{errMsg}</h2>
        } else {
            return (
                <div className="row">
                    {users.map((item)=> <Item key={item.id} item={item}/>)}
                </div>
            )
        }
    }
}


