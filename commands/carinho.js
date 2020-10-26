const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

exports.run = (client, message, args) => {
    if(!args[0]) return message.channel.send("Mencione Alguém Para Fazer Carinho!");
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

        neko.getSFWPat().then(pat => {
            let patEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** Fez Carinho Em **${member.user.username}**...`)
                .setImage(pat.url)
                .setFooter(`Pedido de ${message.author.tag}`, message.author.displayAvatarURL)
                .setColor("#00ff00")
                .setTimestamp();
            return message.channel.send({ embed: patEmbed });
      })
	},
module.exports.help = {
    name: "carinho"
}