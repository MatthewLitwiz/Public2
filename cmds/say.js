const Discord = require('discord.js');

module.exports = {
	name: 'say',
	description: "make the bot say anything you want",
	async execute(bot, message, args){

        if (!message.member.hasPermission("MANAGE_MESSAGES"))
		return message.channel.send("You are not allowed to run this command.");

        if(message.content.substring(1, 4) == "say")
        message.delete();
        {
            let botmessage = message.content.substring(5);
            message.channel.send(botmessage, {
                tts: true
               });
        }
    },
};