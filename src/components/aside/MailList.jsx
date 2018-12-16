import React from 'react'

import './MailList.scss'

import MailItem from './MailItem'

const MailList = ({ list, onOpenMail }) => (
    <div className="mail-list">
        <ul className="list">
            {
                list.map( i => (
                    <li className="item" key={i.id} onClick={() => onOpenMail(i.id)}>
                        <MailItem data={i} />
                    </li>
                ))
            }
        </ul>
    </div>
)

export default MailList