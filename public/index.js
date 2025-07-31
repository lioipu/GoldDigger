const investBtn = document.getElementById('invest-btn')
const priceDisplay = document.getElementById('price-display')
const eventSource = new EventSource('/api/events')

eventSource.onmessage = event => {
    const data = JSON.parse(event.data)
    const price = data.price
    priceDisplay.textContent = price
}
eventSource.onerror = () => {
    console.log('Connection lost. Attempting to reconnect...')
}

investBtn.addEventListener('click', async event => {
    event.preventDefault()
    let investmentAmountVal = document.getElementById('investment-amount').value
    try {
        const response = await fetch('/api', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(investmentAmountVal)
        })
        if(!response.ok) {
            throw new Error(`error ${response.status}`)
        }
        document.getElementById('investment-amount').value = ''
        console.log('hi')
    } catch(err) {
        console.log(err)
    }
})