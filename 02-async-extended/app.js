const request       = require('postman-request')
const colors        = require('colors')


require('dotenv').config()

// test variable
const location = '&query=New%20York'

// core variable
const urlString   = `${process.env.WEATHERSTACK_URL}current?access_key=${process.env.WEATHERSTACK_KEY}${location}`

request(({ url: urlString, json: true }), (error, response, body) => {
    try {
        // console.log('\nSTATUS:', response && response.statusCode + '\n') // Print the response status code if a response was received
        // console.log('\nDATA:', body.current, { depth: null } + '\n') 

        const data = body.current

        console.log('\n\nCURRENT WEATHER:'.underline.cyan + '\n')
        console.log('It is', data.weather_descriptions[0]);
        console.log(`With a temperature of ${data.temperature > 27 ? `${data.temperature}°`.red : `${data.temperature}°`.blue}`)
        console.log(`And a humidity ${data.humidity}%`.yellow)
        console.log(`So it feels like ${data.feelslike > 27 ? `${data.feelslike}°`.red : `${data.feelslike}°`.blue}`)
        console.log('\n\n')


    } catch (error) {
        console.log('ERROR:', error) 
    }
})



