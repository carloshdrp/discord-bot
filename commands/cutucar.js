const Discord = require('discord.js');
const client = require('nekos.life');
const neko = new client();

exports.run = (client, message, args) => {
        if (!args[0]) return message.channel.send("Mencione Alguém Para chatter!");
        const member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.member;

        neko.getSFWPoke().then(poke => {
            let pokeEmbed = new Discord.RichEmbed()
                .setDescription(`**${message.author.username}** chatter **${member.user.username}**...`)
                .setImage(poke.url)
                .setFooter(`Pedido de ${message.author.tag}`, message.author.displayAvatarURL)
                .setColor("#00ff00")
                .setTimestamp();
            return message.channel.send({ embed: pokeEmbed });
        })
    },
    module.exports.help = {
        name: "chatter"
    }