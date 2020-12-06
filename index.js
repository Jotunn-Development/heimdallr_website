require('dotenv').config()

const express = require('express')
const path = require('path')
const signale = require('signale')


const app = express()
const port = process.env.PORT || 3000

// express settings
app
  .use(express.static(path.join(__dirname, './')))
  .engine('html', require('ejs').renderFile)
  .set('view engine', 'ejs')
  .set('views', path.join(__dirname, 'views'))

// get pages
app
  .get('/', (req, res) => res.render('pages/index'))
  .get('/', (req, res) => res.render('pages/commands'))

// start server
app.listen(port, () => { signale.success({prefix: '[Express]', message: `Website has been established on ${port}`}) })
