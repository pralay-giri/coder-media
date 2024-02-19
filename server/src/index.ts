require('dotenv').config()
import connectDB from './db/database'
import {app} from './app'

connectDB().then(() => {
    app.listen(process.env.PORT || 8080, () => {
        console.log(`🌐 Server is running on port ${process.env.PORT} `);
    })
}).catch((err) => {
    console.error(`❗Failed to connect MongoDB \n`, err)
})