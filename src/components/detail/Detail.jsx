import React, { Component } from 'react'

import './Detail.scss'

import MailContainer from './MailContainer'

class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="detail">
                <div className="header">
                    <div>
                        <button className="button alert">Delete</button>
                        <button className="button weak">Spam</button>
                    </div>
                    <div>
                        <button className="button primary">Mark as unread</button>
                    </div>
                </div>
                <MailContainer data={this.props.mailDetail}/>
            </div>
        )
    }
}
 
export default Detail