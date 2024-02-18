import express from 'express'

const app = express()

app.get('/', (req, res, next) => {
    return res.status(200).send("<h2 style='color: green'>Set Up Successfull!</h2>");
})

app.listen(8000, () => {
    console.log('app is listing');
})