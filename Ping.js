const Discord = require("discord.js");
const usedCommandRecently = new Set() 
module.exports = {
    name: "ping",
    description: "bots ping",
      async execute(bot, message, args){   
        
        if (usedCommandRecently.has(message.author.id)) {
          message.reply("Whoa, please wait 5 seconds before using command again!")
      } else {
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('API Name : ',"**Fuk Me**")
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

}
usedCommandRecently.add(message.author.id);
setTimeout(() => {
    usedCommandRecently.delete(message.author.id)
}, 5000);
      },
};
