import React, { Component } from 'react'
import Item from '../item/Item'
import axios from 'axios'

export default class List extends Component {

    state = {
        isFirst: true,
        isLoading: false,
        users: [],
        errMsg: null
    }

    async componentWillReceiveProps({ keyWord }) {

        this.setState({
            isFirst: false,
            isLoading: true,
        })
        const url = `https://api.github.com/search/users?q=${keyWord}`
        try {
            let res = await axios.get(url)
            this.setState({
                isFirst: false,
                isLoading: false,
                users: res.data.items,
                errMsg: null
            })
        } catch (error) {
            this.setState({
                isFirst: false,
                isLoading: false,
                users: [],
                errMsg: error.message
            })
        }
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


