import React, { Component } from 'react'

export default class Add extends Component {

    userNameRef = React.createRef()
    contentRef = React.createRef()

    addComment = () => {
        let { addCommentRender } = this.props
        //获取输入
        let userName = this.userNameRef.current.value
        let content = this.contentRef.current.value

        //判断输入内容
        if (!userName.trim() || !content.trim()) {
            return alert('必须全部填写！')
        }

        //修改App状态
        let comment = {
            userId: new Date().getTime().toString(),
            userName,
            content
        }
        addCommentRender(comment)

    }
    render() {
        return (
            <div className="col-md-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label>用户名</label>
                        <input type="text" ref={this.userNameRef} className="form-control" placeholder="用户名" />
                    </div>
                    <div className="form-group">
                        <label>评论内容</label>
                        <textarea className="form-control" ref={this.contentRef} rows="6" placeholder="评论内容"></textarea>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="button" className="btn btn-default pull-right" onClick={this.addComment}>提交</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}