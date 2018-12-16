import React from 'react'

import './MailList.scss'

import MailItem from './MailItem'

const MailList = ({ list, onOpenMail, itemActive }) => (
    <div className="mail-list">
        <ul className="list">
            {
                list.map( i => (
                    <li className="item animate" key={i.id} onClick={() => onOpenMail(i.id)}>
                        <MailItem data={i} isActive={(itemActive == i.id)} />
                    </li>
                ))
            }
        </ul>
    </div>
)

export default MailList