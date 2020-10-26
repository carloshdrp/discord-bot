const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

exports.run = (client, message, args) => {
        if (!args[0]) return message.channel.send("Mencione Alguém Para Beijar!");
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

        neko.getSFWKiss().then(kiss => {
            let kissEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** Beijou **${member.user.username}**...`)
                .setImage(kiss.url)
                .setFooter(`Pedido de ${message.author.tag}`, message.author.displayAvatarURL)
                .setColor("#00ff00")
                .setTimestamp();
            return message.channel.send({ embed: kissEmbed });
        })
    },
    module.exports.help = {
        name: "kiss"
    }