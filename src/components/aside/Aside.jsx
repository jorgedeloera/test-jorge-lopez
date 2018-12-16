import React, { Component } from 'react'

import './Aside.scss'

import MailList from './MailList'

class Aside extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputSearch: ''
        }

        this.handleChangeInputSearch = this.handleChangeInputSearch.bind(this)
    }
    handleChangeInputSearch(evt){
        let inputSearch = evt.target.value

        this.setState({
            inputSearch: inputSearch
        })
    }
    render() {
        let notificationsCount = this.props.mailData.filter(i => i.isReaded == false).length
        let mailData = this.props.mailData.filter(i => i.from.search(this.state.inputSearch) == 0)
        return (
            <aside className="aside">
                <div className="header">
                    <div className="title">
                        <h1>{this.props.listType.name}</h1>
                        <span className="notifications">{notificationsCount}</span>
                    </div>
                    <div className="filter">
                        <select onChange={this.props.onFilterChange}>
                            {
                                this.props.sectionList.map( i => (
                                    <option value={i.id} key={i.id}>{i.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
                <div className="search">
                    <input className="input" type="search" placeholder="Search" onChange={this.handleChangeInputSearch} value={this.state.inputSearch}/>
                </div>
                <MailList list={mailData} onOpenMail={this.props.onOpenMail}/>
            </aside>
        )
    }
}
 
export default Aside