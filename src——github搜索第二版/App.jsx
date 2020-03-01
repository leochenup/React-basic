import React, { Component } from 'react'
import Search from './components/search/Search'
import List from './components/list/List'


export default class xxx extends Component {

    state = { keyWord: '' /*list 组件使用*/ }

    setKeyWord = (keyWord) => {
        this.setState({ keyWord })
    }

    render() {
        return (
            <div className="container">
                <Search setKeyWord={this.setKeyWord} />
                <List keyWord={this.state.keyWord} />
            </div>
        )
    }
}