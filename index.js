const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req)
    res.send('Hello World')
})

app.use('/signin_cb', express.static('static'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
