import React from 'react'

const MailItem = ({ data }) => (
    <div className={['mail-item', data.isReaded ? null : 'new'].join(' ')}>
        <div className="mail-content">
            <span className="title">{data.from}</span>
            <span className="preview">{data.subject}</span>
        </div>
        <div className="mail-aside">
            <span className="date">{data.date}</span>
            <span></span>
        </div>
    </div>
)

export default MailItem