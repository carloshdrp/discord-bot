const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Voce nao tem permisão para usar o comando!");
    var separador = message.content.split("|"); // Ordem: titulo, descrição, thumb
    message.channel.guild.members.forEach(user => {
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle(separador[1])
    .setDescription(separador[2])
    .setFooter(`${message.guild.name} Programador: ${message.author.tag}`, message.guild.iconURL)
    separador[3] ? embed.setImage(separador[3]) : false
    user.send(embed);
    });
  }
module.exports.help = {
    name: "aviso",
   
}
