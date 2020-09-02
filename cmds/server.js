const Discord = require("discord.js");

module.exports = {
  name: "server",
  description: "server",
  aliases: ["server", "userinfo", "user-info"],
    async execute(bot, message, args){

    let inline = true
    let sicon = message.guild.iconURL;
    let serverembed = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setThumbnail(sicon)
    .setAuthor(message.guild.name)
    .addField("Name", message.guild.name, inline)
    .addField("ID", message.guild.id, inline)
    .addField("Owner", message.guild.owner, inline)
    .addField("Region", message.guild.region, inline)
    .addField("Members", `<:user:424958082691629057> ${message.guild.memberCount}`, inline)
    .addField("You Joined", message.member.joinedAt)
    .setFooter(`Created ${message.guild.createdAt}`);

    message.channel.send(serverembed);
},
};