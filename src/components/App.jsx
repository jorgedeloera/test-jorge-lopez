import React, { Component } from 'react'

import './App.scss'

import Aside from './aside/Aside'
import Detail from './detail/Detail'

class App extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="principal-container">
                <Aside/>
                <Detail/>
            </div>
        )
    }
}

export default App