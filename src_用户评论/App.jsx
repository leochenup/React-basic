import React, { Component } from 'react'
import Add from './components/add/Add'
import List from './components/list/List'

//暴露出去供index.js（入口文件）使用
export default class App extends Component {

  state = {
    comments: [
      { userId: '01', userName: '昌宇玺', content: 'React is so easy' },
      { userId: '02', userName: '菜菜子', content: 'React is so difficult' },
      { userId: '03', userName: '郑成功', content: 'React is so wonderful' }
    ]
  }

  addCommentRender = (comment) => {
    //获取当前的状态
    let comments = [...this.state.comments]
    comments.unshift(comment)
    this.setState({ comments })
  }

  delCommmentRender = (userId) => {
    //获取当前的状态
    let comments = [...this.state.comments]
    let index = comments.findIndex((item) => item.userId === userId)
    comments.splice(index, 1)
    this.setState({ comments })
  }

  render() {
    let { comments } = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addCommentRender={this.addCommentRender} />
          <List comments={comments} delCommmentRender={this.delCommmentRender} />
        </div>
      </div>
    )
  }
}

