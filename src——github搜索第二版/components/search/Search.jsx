import React, { Component } from 'react'

export default class Search extends Component {

    userRef = React.createRef()

    search = () => {
        let { setKeyWord } = this.props
        let keyWord = this.userRef.current.value.trim()
        if (!keyWord) {
            return alert('不能为空！')
        }
        //给list传递关键字
        setKeyWord(keyWord)
        this.userRef.current.value = ''
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