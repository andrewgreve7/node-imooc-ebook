const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send(new Date().toDateString())
})

const server = app.listen(3000, () => {
    const host = server.address().address
    const port = server.address().port

    console.log('server is listening at http://%s:%s', host, port)
})
