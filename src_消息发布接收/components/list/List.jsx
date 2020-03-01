import React, { Component } from 'react'
import Item from '../item/Item'
import PubSub from 'pubsub-js';


export default class List extends Component {

    state = {
        isFirst: true,
        isLoading: false,
        users: [],
        errMsg: null
    }

    //组件刚刚挂载完成时执行
    componentDidMount() {
        //订阅消息，获取keyword
        const Topic = 'UpdateListState'
        PubSub.subscribe(Topic, (mas, newState) => {
            //接受到消息后，修改状态。
           this.setState(newState)
        })
    }

    render() {
        let { isFirst, isLoading, users, errMsg } = this.state
        if (isFirst) {
            return <h2>Enter to search...</h2>
        } else if (isLoading) {
            return <h2>Loading...</h2>
        } else if (errMsg) {
            return <h2>{errMsg}</h2>
        } else {
            return (
                <div className="row">
                    {users.map((item) => <Item key={item.id} item={item} />)}
                </div>
            )
        }
    }
}


