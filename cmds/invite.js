const Discord = require("discord.js");

module.exports = {
	name: "invite",
	description: "Invite bot",
	aliases: ["inv", "i"],
	async execute(bot, message, args){

  let bicon = bot.user.displayAvatarURL;
    
 let inviteEmbed = new Discord.MessageEmbed()
 .setDescription("[**Invite**](https://discord.com/oauth2/authorize?client_id=746547440177643521&scope=bot&permissions=402792510)")
 .setColor("#00ff00")
 .setThumbnail(bicon)
 .addField("Use this invite to invite the bot in your server!", "https://discord.com/oauth2/authorize?client_id=746547440177643521&scope=bot&permissions=402792510")

 message.channel.send(inviteEmbed);

        message.delete();

},
};