const Discord = require("discord.js");


module.exports.run = async(bot, message) => {
    message.delete();
    let bicon = bot.user.displayAvatarURL;
    let ajudaembed = new Discord.RichEmbed()
        .setDescription("Meus comandos:")
        .setColor('2b2e32')
        .setThumbnail(bicon)
        .addField(`**Comandos Gerais**`, `**Em desenvolvimento...**`)
        .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()

    let embed = new Discord.RichEmbed()
        .setAuthor(bot.user.username, bot.user.displayAvatarURL)
        .setDescription(`<a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896>`)
        .addField(`:ticket: Informação:`, `\`\`userinfo\`\`, \`\`server\`\`, \`\`role\`\`, \n\`\`botinfo\`\`, \`\`perfil\`\`, \`\`av\`\``)
        .setFooter(message.author.tag).setTimestamp()
        .setColor('2b2e32')
    message.channel.send(embed)
};

module.exports.help = {
    name: "comandos",
};