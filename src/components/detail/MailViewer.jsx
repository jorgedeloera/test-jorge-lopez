import React from 'react'

import AtachIcon from '../common/AtachIcon'

const MailViewer = ({ data }) => (
    <div className="mail-viewer">
        <div className="content">
            <p>{data.body}</p>
        </div>
        <div className="footer">
            <div className="tools">
                <button>
                    <AtachIcon/>
                </button>
            </div>
            <div>
                <button className="button primary">Replay</button>
            </div>
        </div>
    </div>
)

export default MailViewer