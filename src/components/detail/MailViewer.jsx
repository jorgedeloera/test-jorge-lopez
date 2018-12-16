import React from 'react'

const MailViewer = ({ data }) => (
    <div className="mail-viewer">
        <div className="content">
            <p>{data.body}</p>
        </div>
        <div className="footer">
            <div></div>
            <div>
                <button className="button primary">Replay</button>
            </div>
        </div>
    </div>
)

export default MailViewer