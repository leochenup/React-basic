import React, { Component } from 'react'
import { Button, message, Calendar } from 'antd';

export default class App extends Component {
    handleClick1 = () => {
        message.success('点击了。', 10)
    }
    handleClick2 = () => {
        message.error('点击了。')
    }
    handleClick3 = () => {
        message.warning('点击了。')
    }
    handleClick4 = () => {
        message.info('点击了。')
    }

    onPanelChange(value, mode) {
        console.log(value.format('YYYY年MM月DD日'), mode);
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.handleClick1}>Primary</Button>
                <Button onClick={this.handleClick2}>Default</Button>
                <Button type="dashed" onClick={this.handleClick3}>Dashed</Button>
                <Button type="link" onClick={this.handleClick4}>Link</Button>
                <Calendar onPanelChange={this.onPanelChange} />
            </div>
        )
    }
}