const request = require('postman-request')


require('dotenv').config()

// test variable
const location = '&query=New%20York'

// core variable
const urlString   = `${process.env.WEATHERSTACK_URL}current?access_key=${process.env.WEATHERSTACK_KEY}${location}`

request(urlString, (error, response, body) => {
    try {
        console.log('\nSTATUS:', response && response.statusCode) // Print the response status code if a response was received

        const data = JSON.stringify(body)

        console.log('\nDATA:', data["current"] + '\n') 
    
    } catch (error) {
        console.log('ERROR:', error) 
    }
})

