import dotenv from 'dotenv/config.js' 

import { app } from './app.js'

const main = async () => { 
    await app.listen(app.get('port')) 
    console.log("Server running on port " + app.get('port'))
}

main()

