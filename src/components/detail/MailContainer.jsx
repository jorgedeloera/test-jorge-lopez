import React, { Component } from 'react'

import './MailContainer.scss'

import MailViewer from './MailViewer'

const MailContainer = ({ data }) => (
    <div className="mail-container">
        <div className="title">
            <h2>{data.from}</h2>
        </div>
        <div className="tags">
            <div className="name">
                <span>Tags</span>
            </div>
            <div className="list">
                <ul>
                    <li>{data.tag}</li>
                </ul>
            </div>
        </div>
        <MailViewer data={data}/>
    </div>
)

export default MailContainer