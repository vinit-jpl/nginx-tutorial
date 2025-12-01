const express = require("express")
const path = require("path")

const app = express()
const port = 3000

const appReplica = process.env.APP_NAME

app.use('/images', express.static(path.join(__dirname, 'images')))

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
    console.log(`Request serverd by ${appReplica}`)
})

app.listen(port, () => {
    console.log(`${appReplica} started on port ${port}`)
})