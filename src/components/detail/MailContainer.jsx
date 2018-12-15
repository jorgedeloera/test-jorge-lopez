import React, { Component } from 'react'

import './MailContainer.scss'

import MailViewer from './MailViewer'

const MailContainer = () => (
    <div className="mail-container">
        <div className="title">
            <h2>Croswell</h2>
        </div>
        <div className="tags">
            <div className="name">
                <span>Tags</span>
            </div>
            <div className="list">
                <ul>
                    <li>inbox</li>
                    <li>business</li>
                </ul>
            </div>
        </div>
        <MailViewer/>
    </div>
)

export default MailContainer