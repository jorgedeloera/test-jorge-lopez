import axios from 'axios'

class Service {
    constructor(){
        this.dataUrl = '/mail-data.json'
        this.newDataUrl = '/new-mails.json'
    }
    getData(){
        return axios.get(this.dataUrl)
    }
    getNew(){
        return axios.get(this.newDataUrl)
    }
}

const restService = new Service()

export default restService