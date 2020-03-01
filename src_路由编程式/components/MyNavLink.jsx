import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        let props = this.props
        return (
            <NavLink className="list-group-item"  {...props}></NavLink>
        )
    }
}