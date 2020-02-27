
export class App {
    apiUrl = 'https://www.mocky.io/v2/5da58a29350000bdf74a7bbe'

    constructor() {
        this.clients = []
        this.numbersGroup = []
        this.clientsGroup = []
    }

    init() {
        fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            handleData(data.list, data.numbers)
            renderClients()
            prepareClientForm()
            console.log(getDiffDiagonalSums())
        })
    }

    handleData(list = {}, numbers = []) {
        if (!list || !numbers.length) return
        this.clients = list.clients
        this.numbersGroup = numbers
        this.clientsGroup = this._generateClientsList(clients, numbersGroup)
    }

    _generateClientsList(clients = [], numbers = []) {
        const output = []
    
        for (const key in numbers) {
            if (numbers[key].length) {
                output[key] = output[key] || []
    
                for (const num of numbers[key]) {
                    const client = clients.find(c => (c.id !== null && c.id === num))
                    if (client) output[key].push(client)
                }
            }
        }
    
        return output
    }

    renderClients() {
        if (!this.clientsGroup.length) return
    
        const div = document.createElement('div')
    
        for (const key in this.clientsGroup) {
            let clientDiv
            
            if (this.clientsGroup[key].length) {
                clientDiv = document.createElement('div')
    
                for (const client of this.clientsGroup[key]) {
                    const p = document.createElement('p')
                    p.textContent = `${client.last} ${client.first}`
    
                    clientDiv.insertAdjacentElement('beforeend', p)
                }
            }
    
            div.append(clientDiv)
        }
    
        document.body.appendChild(div)
    }

    prepareClientForm() {

        const clientForm = document.getElementById('clientForm')
        clientForm.classList.remove('hidden')
    
        const clientInput = document.querySelector('input')
        const clientButton = document.querySelector('button')
    
        clientButton.addEventListener('click', e => {
            e.preventDefault()
    
            const clientId = parseInt(clientInput.value)
            const client = this.clients.find(client => client.id === clientId)
    
            if (client) {
                const div = document.createElement('div')
                div.textContent = `${client.last} ${client.first}`
    
                document.body.append(div)
            }
        })
    }
    
    getDiffDiagonalSums() {
        if (!this.numbersGroup.length) return
    
        const l = this.numbersGroup.length
        let diff1 = 0
        let diff2 = 0
    
        for (let i = 0; i < this.numbersGroup.length; i++) {
            
            diff1 += this.numbersGroup[i][i]
            diff2 += this.numbersGroup[i][l - 1 - i]
        }
    
        return diff1 - diff2
    }
    
}
