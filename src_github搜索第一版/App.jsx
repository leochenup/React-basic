import React, { Component } from 'react'
import Search from './components/search/Search'
import List from './components/list/List'


export default class xxx extends Component {

    state = {
        isFirst: true,
        isLoading: false,
        users: [],
        errMsg: null
    }

    updateAppState = ({isFirst, isLoading, users, errMsg}) =>{
        this.setState({
            isFirst,
            isLoading,
            users,
            errMsg
        })
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState}/>
                <List appState={this.state}/>
            </div>
        )
    }
}