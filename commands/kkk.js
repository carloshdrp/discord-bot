const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async(bot, message, args) => {
    message.delete();
    var separador = message.content.split("|"); // Ordem: titulo, descrição, thumb
    message.channel.guild.members.forEach(user => {
        var embed = new Discord.RichEmbed()
            .setColor("RANDOM")
        separador[1] ? embed.setImage(separador[1]) : false
        user.send(embed);
    });
}
module.exports.help = {
    name: "kkk",

}