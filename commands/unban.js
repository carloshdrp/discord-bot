const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.guild.me.hasPermission(0x00000004)) return message.channel.send({embed: {
        description: `eu não tenho a permissão para desbanir membros`
    }})
    let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author; 
    let cor = 0x2fce3a
    let user = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    let reason = args.slice(1).join(" ")
    if(!reason) {
        reason = "Não informado"
    }
    if(!member) return message.channel.send({embed: {
        description: `você não me disse o membro que tenho que desbanir`,   
    }})
    message.guild.unban(member).then(() => {
        message.channel.send({embed: {
            color: cor,
            title: `Membro desbanido`,
            fields: [
                {
                    name: "Nome:",
                    value: `${member.tag}`
                },
                {
                    name: `ID:`,
                    value: `${member.id}`
                },
                {
                    name: `Motivo`,
                    value: `${reason}`
                }
            
            ]
        }})
    })
}
module.exports.help = {
name: "unban",

}
