const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send("✘| Mencione Alguém Para Dar Um Tapa!");
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

        neko.getSFWSlap().then(slap => {
            let slapEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** Deu Um Tapa Em **${member.user.username}**...`)
                .setImage(slap.url)
                .setFooter(`Pedido de ${message.author.tag}`, message.author.displayAvatarURL)
                .setColor("2b2e32")
                .setTimestamp();
            return message.channel.send({ embed: slapEmbed });
      })
	},
module.exports.help = {
    name: "slap"
}