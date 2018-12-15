import React from 'react'

import './MailList.scss'

import MailItem from './MailItem'

const MailList = () => (
    <div className="mail-list">
        <ul className="list">
            <li className="item">
                <MailItem/>
            </li>
        </ul>
    </div>
)

export default MailList