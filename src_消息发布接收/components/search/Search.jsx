import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {

    userRef = React.createRef()

    search = () => {
        let keyWord = this.userRef.current.value.trim()
        if (!keyWord) {
            return alert('不能为空！')
        }
        this.getUsersAndReander(keyWord)
        this.userRef.current.value = ''
    }

    //发请求，修改状态
    getUsersAndReander = async (keyWord) => {
        const Topic = 'UpdateListState'
        PubSub.publish(Topic, {
            isFirst: false,
            isLoading: true,
        })
        const url = `https://api.github.com/search/users?q=${keyWord}`
        try {
            let res = await axios.get(url)
            PubSub.publish(Topic, {
                isLoading: false,
                users: res.data.items,
                errMsg: null
            })
        } catch (error) {
            PubSub.publish(Topic, {
                isLoading: false,
                users: [],
                errMsg: error.message
            })
        }
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" ref={this.userRef} placeholder="enter the name you search" />
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}