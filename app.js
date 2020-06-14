require('dotenv').config()
const Twilio = require('twilio')

const client = new Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

client.messages.list()
    .then(message => {
        console.log(`The most recent message is ${message[0].body}`)
    })
    .catch(err => console.error(err))

console.log('Gathering your message log')
