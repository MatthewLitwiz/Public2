const Discord = require("discord.js")
 
module.exports = {
	name: "8ball",
	description: "I will give you bad wishs maybe even gud",
	aliases: ["8b"],
	async execute(bot, message, args){

   //!8ball question
   if(!args[1]) return message.reply("Plesae enter a full question with 2 or more words!");
   let replies = [            'It is certain.',
   'It is decidedly so.',
   'Without a doubt.',
   'Yes - definitely.',
   'You may rely on it.',
   'As I see it, yes.',
   'Most likely.',
   'Outlook good.',
   'Yes.',
   'Signs point to yes.',
   'Reply hazy, try again.',
   'Ask again later.',
   'Better not tell you now.',
   'Cannot predict now.',
   'Concentrate and ask again.',
   'Don\'t count on it.',
   'My reply is no.',
   'My sources say no.',
   'Outlook not so good.',
   'Very doubtful.',
   "You want an answer? OK, here's your answer: ",
    "Ask yourself this question in the mirror three times, the answer will become clear",
    "YesNoYesNoYesNoYesNoYesNo ",
      "Why you asking me go and ask matthew for god sake" ];

   let result = Math.floor((Math.random() * replies.length));
   let question = args.join(" ");

   let ballembed = new Discord.MessageEmbed()

   .setAuthor(message.author.username)
   .setColor("#004eec")
   .addField("Question", question)
   .addField("Answer", replies[result]);

   message.channel.send(ballembed)

   message.delete();


},
};