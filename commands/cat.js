const Discord = require('discord.js');
const randomPuppy = require('random-puppy')

module.exports.run = async(bot, message, args) => {
  if(message.author.bot) return;
  if(message.channel.type !== "text") return;
  randomPuppy('cat')
            .then(url => {
                const embed = new Discord.RichEmbed()
                
                .setAuthor(`${message.author.tag} | Seu gato!`, message.author.displayAvatarURL)
                .setImage(url)
                .setColor("#00ff00")
    return message.channel.send({ embed });
            })
}
module.exports.help = {
	name: "cat"
}