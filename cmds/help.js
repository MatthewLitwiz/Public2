const Discord = require("discord.js");
module.exports = {
  name: "help",
  description: "-help command",
    async execute(bot, message, args){

      let helpembed = new Discord.MessageEmbed()
      .setDescription("**Help Menu**")
      .setColor('RANDOM')
      .addField("Default Prefix:", "`-`")
      .addField("**Help Menu**", "here is a list of commands the bot can do")
      .addField("4k, anal, ass, gif, hentai, holo, pussy, thigh", "Commands for nsfw channel only")
      .addField("avatar", "shoows your discord pfp or mentioned users pfp")
      .addField("marry, divorce", "forcely marry or divorce someone")
      .addField("8ball", "8ball game")
      .addField("ping", "bot responds ping and how many miliseconds")
      .addField("meme", "shows meme from some of the funniest reddit")
      .addField("invite", "link to invite the bot")
      .addField("oi, urmom", "some random ones ")
      .addField("timer", "you can set timer for a certain amount of min and the bot will dm you once the time is over")
      .addField("suggest", "give server suggestions")
      .addField("server", "Shows user and server info")
      .addField("urban", "search words in the urban dictionary")
      .setFooter(`Hidden Command: -eval, can only be used by one person`);
      
      message.channel.send(helpembed);
      
      if(message.member.hasPermission("MANAGE_MESSAGES")){
      let modembed = new Discord.MessageEmbed()
      .setDescription("**Mod Help Menu**")
      .setColor("#8300ff")
      .addField("Default Prefix:", "`-`")
      .addField("**Mod Commands**", "List of Mod Commands and usage")
      .addField("ban", "bans a user")
      .addField("clear", "clear a amount of messages and keep the server fresh")
      .addField("warn", "warns a user")
      .addField("giveaway", "start a giveaway with people (useage: -giveaway <time> <channel> <prize>)")
      .addField("kick", "kicks a user (useage: -kick <mentioned user> <reason>")
      .addField("ban", "bans a user")
      .addField("reload", "reload a certain command")
      .addField("say", "makes the bot talk")
      .setFooter(`Hidden Command: -eval, can only be used by one person`)
      
      try{
        await message.author.send(modembed);
        message.react("✊");
      }catch(e){
        message.reply("Your DM's are locked... I cannot send you the mod commands..");
      }
      }
      },
};