const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');
var b = moment();

module.exports.run = async(bot, message, args) => {
    message.delete();
    let member = message.guild.member(message.mentions.users.first() || bot.users.get(args[0]) || message.author);
    if (!member) return message.reply("Membro não mencionado")
    let roles = []
    member.roles.forEach(r => {
        if (r != r.guild.defaultRole) {
            roles += r.name + " "
        }
    })
    let userinfoembed = new Discord.RichEmbed()
        //.setThumbnail(member.user.avatarURL)
        .setTimestamp(new Date())
        .setFooter(message.guild.name)
        .setDescription('<a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896>')
        .addField(`📅| Conta criada em:`, `\`\`\`fix\n${moment(member.user.createdAt).format('L')}\`\`\``)
        .addField(`🗓| Dias no Discord:`, `\`\`\`fix\n${moment().diff(moment(member.user.createdAt), 'days')}\`\`\``)
        .addField(`🎫| ID:`, `\`\`\`fix\n${member.id}\`\`\``)
        .addField(`🎴| Cargos`, `${member.roles.filter(r => r.id !== message.guild.id).map(role => role.toString()).join(', ') || "Nenhum Cargo"}`)
        .setAuthor(`Informações do usuário: ${member.user.username}`, `${member.user.avatarURL}`, 'https://discord.js.org')
        .setColor('2b2e32')
    message.channel.send(userinfoembed);
}
module.exports.help = {
    name: "userinfo",
}