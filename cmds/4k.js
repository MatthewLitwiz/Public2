const discord = require('discord.js')
const superagent = require('superagent');
const { MessageEmbed } = require('discord.js');

const usedCommandRecently = new Set()

module.exports = {
    name: "4k",
    description: "4k nsfw",
      async execute(bot, message, args){

    if (usedCommandRecently.has(message.author.id)) {
        message.reply("Whoa, please wait 5 seconds before using command again!")
    } else {

        if (message.channel.nsfw === true) {
            superagent.get('https://nekobot.xyz/api/image')
                .query({ type: '4k' })
                .end((err, response) => {
                    const embed = new MessageEmbed()
                        .setColor("#FF6961")
                        .setImage(response.body.message)
                        .setFooter(response.body.message);
                    message.channel.send(embed)
                });
        } else {
            message.channel.send("This isn't an NSFW channel!")
        }

        usedCommandRecently.add(message.author.id);
        setTimeout(() => {
            usedCommandRecently.delete(message.author.id)
        }, 5000);
    }
},
};