const Discord = require("discord.js");
const urban = require("urban");

module.exports = {
	name: "urban",
	description: "urban Dictonary",
	async execute(bot, message, args){

    if(args.length < 1) return message.reply("Please enter something!");
    let XD = args.join(" "); 

    urban(XD).first(json => {
        if(!json) return message.reply("No results found!")

        let urbEmbed = new Discord.MessageEmbed()
        .setColor("#06bdff")
        .setTitle(json.word)
        .setDescription(json.definition)
        .addField("Upvotes", json.thumbs_up, true)
        .addField("Downvotes", json.thumbs_down, true)
        .setFooter(`Written by: ${json.author}`);

        message.channel.send(urbEmbed)
    });


},
};