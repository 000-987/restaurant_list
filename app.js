// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  // create a variable to store movieOne
  const restaurantsOne = [
    {
    id: 1,
      title: 'Sababa 沙巴巴中東美食',
        image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5635/01.jpg',
          text: '中東料理',
    },
  {
    id: 2,
      title: '梅子鰻蒲燒專賣店',
        image: 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file/5628/02.jpg',
          text: '日本料理',
    }
  ]
  res.render('index', { restaurants: restaurantsOne })
})

app.get('/restaurants/1', (req, res) => {
  res.render('show')
})
// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

