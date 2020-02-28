import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

    state = {
        isLoading: true,
        repoName: '',
        repoUrl: '',
        errMsg: null
    }

    keyword = 'r'

    async componentDidMount() {
        const url = `https://api.github.com/search/repositories?q=${this.keyword}&sort=stars`
        try {
            let res = await axios.get(url)
            let item = res.data.items[0]
            console.log(item);
            
            this.setState({
                isLoading: false,
                repoName: item.full_name,
                repoUrl: item.html_url,
                errMsg: null
            })
        } catch (error) {
            this.setState({
                isLoading: false,
                repoName: '',
                repoUrl: '',
                errMsg: error.toString()
            })
        }



    }

    render() {
        let { isLoading, repoName, repoUrl, errMsg } = this.state
        if (isLoading) {
            return <h4>Loading....</h4>
        } else if (errMsg) {
            return <h4>{errMsg}</h4>
        } else {
            return (
                <h4>点赞最多的具有关键字 {this.keyword} 的 github 库是：  <a href={repoUrl}>{repoName}</a></h4>
            )
        }
    }
}