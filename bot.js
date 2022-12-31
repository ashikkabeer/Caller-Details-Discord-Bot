const { phone } = require("./ph.js");
require('dotenv').config()
const token = process.env.DISCORD_TOKEN
const { Client, Events, GatewayIntentBits } = require('discord.js')
const client = new Client({
    intents:
      [GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent]
  });
  client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
  });
  client.on(Events.MessageCreate, async message => {
    if(!isNaN(message.content)){
    const number = message.content
    const answer = await phone(number);   
    client.channels.fetch(message.channelId).then(channel => channel.send(answer));
    }
    }
  );
  client.login(token);
