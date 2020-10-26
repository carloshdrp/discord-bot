const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("É Preciso Mencionar Alguém!");
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;
    
        neko.getSFWTickle().then(tickle => {
            let tickleEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** Fez **${member.user.username}** Rir`)
                .setImage(tickle.url)
                .setFooter(`Pedido de ${message.author.tag}`, message.author.displayAvatarURL)
                .setColor('2b2e32')
                .setTimestamp();
            message.channel.send(tickleEmbed);
        })
	},
module.exports.help = {
    name: "rir"
  }