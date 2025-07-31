import sanitizeHtml from 'sanitize-html'
import { parseJSONBody } from "../utils/parseJSONBody.js"
import { eventEmmiter } from '../events/addItem.js'
import { simulatePrice } from '../utils/simulatePrices.js'
import { addNewPrice } from '../utils/addNewPrice.js'

export async function handlePost(req, res) {
    try {
        const parsedBody = await parseJSONBody(req)
        const sanitizeInput = sanitizeHtml(parsedBody)
        await addNewPrice(sanitizeInput)
        eventEmmiter.emit('adding-item', sanitizeInput)
        res.end()
    } catch(err) {
        console.log(err)
    }

}

export async function handlePriceNews(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    res.write(`data: ${JSON.stringify({ 
        event: 'init',
        price: simulatePrice(2000)
    })}\n\n`)

    const timer = setInterval(() => {
        res.write(`data: ${JSON.stringify({ 
            event: 'update-price',
            price: simulatePrice(2000)})
        }\n\n`)
    }, 3000)

    req.on('close', () => {
        clearInterval(timer)
        console.log('Client disconnected')
    })

}