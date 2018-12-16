import axios from 'axios'

class Service {
    constructor(){
        this.url = '/mail-data.json'
        this.data = []


    }
    getData(){
        axios.get(this.url).then( res => this.data = res.data)
    }
    getList(){
        return this.data
    }
}

const mailData = new Service()

export default mailData