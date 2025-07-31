import path from 'node:path'
import fs from 'node:fs/promises'


export async function getData() {
    try {
        const filePath = path.join('data', 'data.json')
        const file = await fs.readFile(filePath, 'utf-8')
        return JSON.parse(file)

    } catch(err) {
        console.log(err)
    }
}