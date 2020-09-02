const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "bots ping",
      async execute(bot, message, args){    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;

    let msgping2 = new Date() - msgping1;

    let pingembed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .addField('API Name : ',"**𝓜𝓪𝓽𝓽𝓱𝓮𝔀𝓛𝓲𝓽𝔀𝓲𝔃**")
        .addField('Bot Ping : ', Math.floor(botping) + 'ms')
        .addField('Message Ping : ', '~' + Math.round(msgping2) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requested by ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

},
};