import React, { Component } from 'react'

import './Detail.scss'

import MailContainer from './MailContainer'

class Detail extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        let onMarkAsUnread = () => this.props.onMarkAsUnread(this.props.mailDetail.id)
        let onDelete = () => this.props.onMoveMail(this.props.mailDetail.id, 'deleted')
        let onSpam = () => this.props.onMoveMail(this.props.mailDetail.id, 'spam')
        return (
            <div className="detail animate">
                <div className="header">
                    <div>
                        <button className="button alert" onClick={onDelete}>Delete</button>
                        <button className="button weak" onClick={onSpam}>Spam</button>
                    </div>
                    <div>
                        <button className="button primary" onClick={onMarkAsUnread}>Mark as unread</button>
                    </div>
                </div>
                <MailContainer data={this.props.mailDetail}/>
            </div>
        )
    }
}
 
export default Detail