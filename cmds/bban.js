const Discord = require('discord.js');

module.exports = {
	name: 'bban',
	description: "bbans user",
	aliases: [],
	async execute(bot, message, args){

        let xdemb = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle("Ban Command")
        .addField("Description:", `Ban a member`, true)
        .addField("Usage:", `-ban [user] [reason]`, true)
        .addField("Example:", `-ban @MatthewLitwiz spam`)

        if(message.author.id !== "345413287149699074") return message.channel.send("Only bot owner can use this command")

        let member = message.mentions.members.first();
        if(!member) return message.channel.send(xdemb)
        if(!member.bannable) return message.channel.send("I can't ban this user!")
        if(member.user.id === "345413287149699074") return message.channel.send("I can't ban my owner!")

        if(member.id === message.author.id) return message.channel.send("You can't ban your self")

        let reason = args.slice(1).join(" ");

        if(!reason) {
            res = "No reason given";
        } else {
            res = reason
        }

        await member.ban(reason).catch(error => message.channel.send(`Sorry, I coldn't ban because of: ${error}`));

        let bean = new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setTitle(`Ban | ${member.user.tag}`)
        .addField("User", member, true)
        .addField("Moderator", message.author, true)
        .addField("Reason", res)
        .setTimestamp()

        message.channel.send(bean)

        message.delete()

      },
    };