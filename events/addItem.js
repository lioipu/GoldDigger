import EventEmmiter from 'node:events'

export const eventEmmiter = new EventEmmiter()
eventEmmiter.on('adding-item', item => console.log(`${item} was added`))