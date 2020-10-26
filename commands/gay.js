const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');
var b = moment();

module.exports.run = async(bot, message, args) => {
    message.delete();
    let member = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]) || message.author);
    if (!member) return message.reply("Membro não mencionado")
    let numero = Math.ceil(Math.random() * 100)
    let roles = []
    member.roles.forEach(r => {
        if (r != r.guild.defaultRole) {
            roles += r.name + " "
        }
    })
    let userinfoembed = new Discord.RichEmbed()
        //.setThumbnail(member.user.avatarURL)
        .setTitle(`gay r8 machine`)
        .setDescription(`${member.user.username} é ${numero}% gay:gay_pride_flag:`)
        .setColor('2b2e32')
    message.channel.send(userinfoembed);
}
module.exports.help = {
    name: "gay",
}