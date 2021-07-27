const Twilio = require("twilio");

const client = new Twilio("id", "auth");

// promises -- the '.list' is an asynchrounous function

client.messages.list().then(messages => console.log(`The most recent message is ${messages[0].body}`)).catch(err => console.error(err));

console.log('Gathering your message : ');