const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require('path')

const PORT = config.get('port') || 5000

const app = express()

app.use(express.json({ extended: true }))

app.use('/api/auth', require('./routes/auth.routes')) 

app.use('/api/link', require('./routes/link.routes'))

if (process.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(__dirname, 'client', 'build')))
    
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname,'client', 'build', 'index.html'))
    })
}

app.use('/t/', require('./routes/redirect.routes'))

async function start(req, res) {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(5000, () => {
            console.log(`App has been started on port: ${PORT}`)
        })
    } catch (e) {
        process.exit(1)
    }
}

start()