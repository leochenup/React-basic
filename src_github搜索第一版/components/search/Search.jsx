import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    userRef = React.createRef()

    search = () => {
        let { updateAppState } = this.props
        let keyWord = this.userRef.current.value.trim()
        if (!keyWord) {
            return alert('不能为空！')
        }

        //发送请求
        updateAppState({
            isFirst: false,
            isLoading: true,
            users: [],
            errMsg: null
        })

        const url = `https://api.github.com/search/users?q=${keyWord}`
        axios.get(url)
            .then((res) => {
                console.log(res)
                let users = res.data.items
                updateAppState({
                    isFirst: false,
                    isLoading: false,
                    users: users,
                    errMsg: null
                })
            })
            .catch((err) => {
                updateAppState({
                    isFirst: false,
                    isLoading: false,
                    users: [],
                    errMsg: err.message
                })
            })
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