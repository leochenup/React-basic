import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import HomeMessageDetail from './HomeMessageDetail'

export default class HomeMessage extends Component {

    state = {
        messages: []
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.setState({
                messages: [
                    { mid: 0, content: 'message1' },
                    { mid: 1, content: 'message2' },
                    { mid: 2, content: 'message3' },
                    { mid: 3, content: 'message4' },
                    { mid: 4, content: 'message5' }
                ]
            })
        }, 2000)
    }

    componentWillUnmount() {
        clearTimeout(this.timer)
    }


    pushShow = (path) => {
        this.props.history.push(path)
    }

    replaceShow = (path) => {
        this.props.history.replace(path)
    }

    back = () => {
        this.props.history.goBack()
    }

    render() {
        let { messages } = this.state
        return (
            <div>
                <ul>
                    {
                        messages.map((item) => {
                            return (
                                <li key={item.mid}>
                                    <Link to={`/home/message/detail/${item.mid}`}>{item.content}</Link>&nbsp;&nbsp;
                                    <button onClick={() => { this.pushShow(`/home/message/detail/${item.mid}`) }}>push查看</button>&nbsp;&nbsp;
                                    <button onClick={() => { this.replaceShow(`/home/message/detail/${item.mid}`) }}>replace查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => { this.back() }}>回退</button>
                <hr />
                <Route path='/home/message/detail/:mid' component={HomeMessageDetail} />
            </div>
        )
    }
}