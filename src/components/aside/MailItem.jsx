import React from 'react'

import AtachIcon from '../common/AtachIcon'

const MailItem = ({ data, isActive }) => (
    <div className={['mail-item', data.isReaded ? null : 'new', isActive ? 'active' : null ].join(' ')}>
        <div className="mail-content">
            <span className="title">{data.from}</span>
            <span className="preview">{data.subject}</span>
        </div>
        <div className="mail-aside">
            <span className="date">{data.date}</span>
            <span className="icon">
                <AtachIcon/>
            </span>
        </div>
    </div>
)

export default MailItem