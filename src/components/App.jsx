import React, { Component } from 'react'
import restService from '../api/restService'

import './App.scss'

import Aside from './aside/Aside'
import Detail from './detail/Detail'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailOpened: false,
            sectionList: [{ id: 'inbox', name: 'Inbox' }, { id: 'spam', name: 'Spam' }, { id: 'deleted', name: 'Deleted' }],
            listType: { id: 'inbox', name: 'Inbox' },
            data: { inbox: [], spam: [], deleted: [] },
            mailData: [],
            mailDetail: undefined
        }

        this.handleOpenMail = this.handleOpenMail.bind(this)
        this.handleMarkAsUnread = this.handleMarkAsUnread.bind(this)
        this.handleChangeListType = this.handleChangeListType.bind(this)
        this.handleMoveMail = this.handleMoveMail.bind(this)
    }
    componentDidMount() {
        let idCounter = 0
        let assignId = data => data.map(i => {
            let obj = Object.assign(i, { id: idCounter })
            idCounter = idCounter + 1
            return obj
        })

        restService.getData()
            .then(res => {
                let data = this.state.data
                let resData = assignId(res.data)
                data.inbox = resData
                this.setState({
                    data: data,
                    mailData: resData
                })
            })

        setInterval(() => {
            restService.getNew()
                .then(res => {
                    let data = this.state.data
                    let resData = assignId(res.data)
                    let matchData = data.inbox.concat(resData)
                    data.inbox = matchData
                    this.setState({
                        data: data
                    })
                    if(this.state.listType.id == 'inbox'){
                        this.setState({
                            mailData: matchData
                        })
                    }
                })
        }, 90000)
    }
    handleOpenMail(id) {
        let mailData = this.state.mailData
            .map(i => (i.id == id) ? Object.assign(i, { isReaded: true }) : i)
        let mailDetail = mailData.find(i => i.id == id)

        this.setState({
            detailOpened: true,
            mailData: mailData,
            mailDetail: mailDetail
        })
    }
    handleMarkAsUnread(id) {
        let mailData = this.state.mailData
            .map(i => (i.id == id) ? Object.assign(i, { isReaded: false }) : i)

        this.setState({ mailData: mailData })
    }
    handleChangeListType(evt) {
        let listType = this.state.sectionList.find(i => i.id == evt.target.value)
        let data = this.state.data[listType.id]

        this.setState({
            detailOpened: false,
            listType: listType,
            mailData: data,
            mailDetail: undefined
        })
    }
    handleMoveMail(id, type) {
        let data = this.state.data
        let mailData = this.state.mailData
        let mailDetail = mailData.find(i => i.id == id)
        let listType = this.state.listType

        data[type].push(mailDetail)
        data[listType.id] = data[listType.id].filter(i => i.id != id)

        this.setState({
            data: data,
            mailData: data[listType.id]
        })
    }
    render() {
        return (
            <div className="principal-container">
                <Aside
                    mailData={this.state.mailData}
                    sectionList={this.state.sectionList}
                    listType={this.state.listType}
                    itemActive={(this.state.mailDetail ? this.state.mailDetail.id : undefined)}
                    onOpenMail={this.handleOpenMail}
                    onFilterChange={this.handleChangeListType}
                />
                {
                    this.state.detailOpened ?
                        <Detail
                            mailDetail={this.state.mailDetail}
                            onMarkAsUnread={this.handleMarkAsUnread}
                            onMoveMail={this.handleMoveMail}
                        />
                        : null
                }
            </div>
        )
    }
}

export default App