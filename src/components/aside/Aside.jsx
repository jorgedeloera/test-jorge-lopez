import React, { Component } from 'react'

import './Aside.scss'

import MailList from './MailList'

class Aside extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <aside className="aside">
                <div className="header">
                    <div className="title">
                        <h1>Inbox</h1>
                        <span className="notifications">3</span>
                    </div>
                    <div className="filter">
                        <select>
                            <option>Filter by</option>
                        </select>
                    </div>
                </div>
                <div className="search">
                    <input className="input" type="search" placeholder="Search"/>
                </div>
                <MailList/>
            </aside>
        )
    }
}
 
export default Aside