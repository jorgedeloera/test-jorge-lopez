import React, { Component } from 'react'
import axios from 'axios'

import './App.scss'

import Aside from './aside/Aside'
import Detail from './detail/Detail'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            detailOpened: false,
            sectionList: [{ id: 'inbox', name: 'Inbox' }, { id: 'spam', name: 'Spam' }, { id: 'deleted', name: 'Deleted' }],
            listType: { id: 0, name: 'Inbox' },
            data: { inbox: [], spam: [], deleted: []},
            mailData: [],
            mailDetail: undefined
        }

        this.handleOpenMail = this.handleOpenMail.bind(this)
        this.handleChangeListType = this.handleChangeListType.bind(this)
    }
    componentDidMount(){
        axios.get('/mail-data.json')
        .then( res => {
            let data = res.data.map( (i, index) => Object.assign(i, { id: index }) )
            this.setState({
                data: { inbox: data, spam: [], deleted: []},
                mailData: data
            })
        })
    }
    handleOpenMail(id){
        let mailDetail = this.state.mailData.find( i => i.id == id)
        this.setState({
            detailOpened: true,
            mailDetail: mailDetail
        })
    }
    handleChangeListType(evt){
        let listType = this.state.sectionList.find(i => i.id == evt.target.value)
        let data = this.state.data[listType.id]
        this.setState({
            listType: listType,
            mailData: data
        })
    }
    render(){
        return (
            <div className="principal-container">
                <Aside
                    mailData={this.state.mailData}
                    sectionList={this.state.sectionList}
                    listType={this.state.listType}
                    onOpenMail={this.handleOpenMail}
                    onFilterChange={this.handleChangeListType}
                />
                {
                    this.state.detailOpened ? 
                    <Detail
                        mailDetail={this.state.mailDetail}
                    />
                    : null
                }
            </div>
        )
    }
}

export default App