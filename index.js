const Discord = require("discord.js");
const config = require("./config/config.json");
const client = new Discord.Client();


console.log("Loading...")

client.on("ready", () =>{
console.log("Hey der Bot ist nun online!")
client.user.setActivity("Ein Spiel." , { type: 'PLAYING'})
})

client.on("message", function(message){
    if(message.author.bot) return;

    if(message.content.toLowerCase().startsWith(config.prefix+"online")){
        client.user.setStatus('online')
        message.reply(":white_check_mark: Der Bot hat seinen Status nun auf online gesetzt!")
    }

    if(message.content.toLowerCase().startsWith(config.prefix+"offline")){
        client.user.setStatus('idle')
        message.reply(":white_check_mark: Der Bot hat seinen Status nun auf offline gesetzt!")
    }
})


client.login(process.env.token)

