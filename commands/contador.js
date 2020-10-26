const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.RichEmbed()
    message.guild.channels.find(c => c.name == 'teste')
    .setTopic(`Membros: ` + message.guild.memberCount)
    .setThumbnail(user.avatarURL)
    .setColor("RANDOM")
    .addField('Contador ativado no: ', `\`\`\`${message.guild.name}\`\`\``)
    .setFooter(`ID: ${message.author.id}`).setTimestamp();
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "cont"
}