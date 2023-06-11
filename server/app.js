
const cors = require('cors')
const express = require('express')
const errorhandler = require('./middleware/errorhandler')
const app = express()
const port = process.env.PORT || 3100
const router = require('./router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(router)
app.use(errorhandler)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})