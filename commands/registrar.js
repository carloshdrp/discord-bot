const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.reply("Usuário não encontrado.");
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Registrado!') 
    .setThumbnail(message.author.avatarURL)
    .setDescription(`Você foi registrado no ${message.guild.name} por ${message.author}\n Obrigado por fazer parte dessa grande familia`)
    member.send(embed)
}


module.exports.help = {
  name: "registrar"
}
