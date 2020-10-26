const Discord = require("discord.js")
const moment = require("moment")
moment.locale("pt-BR")
const prefix = "z?"

module.exports.run = async(bot, message, args) => {
    message.delete();
    if (message.content.startsWith(`${prefix}server`)) {
        let online = message.guild.members.filter(a => a.presence.status == "online").size;
        let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
        let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
        let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
        let bot = message.guild.members.filter(a => a.user.bot).size;
        let totalmembros = message.guild.memberCount;
        let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
        let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
        const embed = new Discord.RichEmbed()
            .setAuthor(`Informações do servidor: ${message.guild.name}`, message.guild.iconURL)
            .setDescription(`<a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896>`)
            .setColor("2b2e32")
            .addField('📅| Servidor criado em:', `\`\`\`fix\n${moment(message.guild.createdAt).format('L')}\`\`\``)
            .addField(`👥| População:`, `\`\`\`fix\n${totalmembros} membros\`\`\``)
            .addField(`:earth_americas:| Região`, `\`\`\`fix\n${message.guild.region}\`\`\``)
            .addField("🎫| ID", `\`\`\`fix\n${message.guild.id}\`\`\``)
            .setFooter(message.author.tag)
            .setTimestamp()
        message.channel.send(embed)
    }
}
module.exports.help = {
    name: "server",

}