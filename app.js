// require packages used in the project
const express = require('express')
const app = express()
const port = 3000

// require express-handlebars here
const exphbs = require('express-handlebars')
const restaurantsList = require('./restaurant.json')

// setting template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantsList.results })
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword.trim()
  const restaurants = restaurantsList.results.filter(restaurant => {
    const filteredRestaurants = restaurant.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()) ||
      restaurant.category.includes(keyword)
    return filteredRestaurants
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

//從json篩選資料回傳到樣板引擎
app.get('/restaurants/:restaurants_id', (req, res) => {
  const restaurants = restaurantsList.results.find(
    restaurants => restaurants.id.toString() === req.params.restaurants_id)
  res.render('show', { restaurants: restaurants })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on http://localhost:${port}`)
})

