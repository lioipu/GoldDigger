import path from 'node:path'
import fs from 'node:fs/promises'
import { getData } from './getData.js'

export async function addNewPrice(newPrice) {
    try {
        const jsonFilePath = path.join('data', 'data.json')
        const data = await getData()
        data.push(newPrice)
        await fs.writeFile(jsonFilePath, JSON.stringify(data), 'utf8')
    } catch(err) {
        console.log(err)
    }
    
}