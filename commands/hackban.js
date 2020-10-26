const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');

module.exports.run = async (bot, message, args) => {
  message.delete();
  let mat = message.author.tag
  let cor = 0x2fce3a
  let red = 0xce342f
  if(!message.member.hasPermission(0x00000004)) return message.channel.send({embed: {
    description: `**${mat}** você precissa da permissão de banir membros para usar esse comando`,
    color: red
}})
if(!message.guild.me.hasPermission(0x00000004)) return message.channel.send({embed: {
    description: `**${mat}** eu não tenho a permissão para banir membros`,
    color: red
}})
let member = message.mentions.members.first() || message.guild.members.get(args[0])
let reason = args.slice(1).join(" ")
if(!reason) {
    reason = "Não informado"
}
if (!member)
{
    let userID = args[0];

    message.guild.ban(userID, reason).then(user => {
        var embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField(`Banido por`, `${mat}`, true)
    .addField(`Usuário banido`,`${user.tag}`, true)
    .addField(`Dia`,`${moment(message.createdAt).format('L')}`, true)
    .addField(`ID do usuário`,`${user.id}`, true)
    .addField(`Motivo:`,`${reason}`, true)
    .setThumbnail(user.displayAvatarURL)
    .setImage('https://media.giphy.com/media/BmTGK0Z986N7q/giphy.gif')
    message.channel.send(embed);
    var embed2 = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField(`Banido por`, `${mat}`, true)
    .addField(`Banido em`,`${message.guild.name}`, true)
    .addField(`Dia`,`${moment(message.createdAt).format('L')}`, true)
    .addField(`Motivo:`,`${reason}`, true)
    .setThumbnail(user.displayAvatarURL)
    .setImage('https://media.giphy.com/media/BmTGK0Z986N7q/giphy.gif')
    user.send(embed2).catch(err=>console.log(err))
    })
    .catch(err=>message.reply(`Erro: ${err}`));
}
else
{

    if(!member) return message.channel.send({embed: {
        description: `**${mat}** você não me disse o membro que tenho que banir`,
        color: red
    }})
    if(member.id === message.author.id) return message.channel.send({embed: {
        description: `**${mat}** você não pode se banir`,
        color: red
    }})
    if(!member.bannable) return message.channel.send({
        embed: {
            description: `**${mat}** eu não consegui banir o membro: **${member.user.tag}**`,
            color: red
        }
    })
    member.ban(`${mat} | ${reason}`)
    var embed = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField(`Banido por`, `${mat}`, true)
    .addField(`Usuário banido`,`${member.user.tag}`, true)
    .addField(`Dia`,`${moment(message.createdAt).format('L')}`, true)
    .addField(`ID do usuário`,`${member.user.id}`, true)
    .addField(`Motivo:`,`${reason}`, true)
    .setThumbnail(member.displayAvatarURL)
    .setImage('https://media.giphy.com/media/BmTGK0Z986N7q/giphy.gif')
    message.channel.send(embed);
    var embed2 = new Discord.RichEmbed()
    .setColor(`RANDOM`)
    .addField(`Banido por`, `${mat}`, true)
    .addField(`Banido em`,`${message.guild.name}`, true)
    .addField(`Dia`,`${moment(message.createdAt).format('L')}`, true)
    .addField(`Motivo:`,`${reason}`, true)
    .setThumbnail(user.displayAvatarURL)
    .setImage('https://media.giphy.com/media/BmTGK0Z986N7q/giphy.gif')
    member.user.send(embed2)
}
} 

module.exports.help = {
    name: "hackban"
  }