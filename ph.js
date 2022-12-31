require('dotenv').config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


async function phone(number){
  await client.lookups.v1.phoneNumbers(number)
                 .fetch({type: ['carrier']})
                 console.log
                 .then(phone_number => answer = phone_number.carrier.name,);
                 return answer
}
module.exports = {
    phone,
}