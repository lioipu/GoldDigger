import path from 'node:path'
import fs from 'node:fs/promises'
import { getContentType } from './getContentType.js'
import { sendResponse } from './sendResponse.js'

export async function serveStatic(req, res, baseDir) {
    const filePath = path.join(
        baseDir,
        'public',
        req.url === '/' ? 'index.html' : req.url
    )
    const ext = path.extname(req.url)
    const contentType = getContentType(ext)

    try {        
        const file = await fs.readFile(filePath)
        sendResponse(res, 200, contentType, file)
        
    } catch(err) {
        if(err.code === 'ENOENT') {
            sendResponse(res, 400, 'text/html', '<html><h1>Server Error: ${err.code}</h1></html>')
        } else {
            console.log(err)
            sendResponse(res, 500, 'text/html', '<html><h1>Server Error: ${err.code}</h1></html>')
        }
    }

}