const Discord = require("discord.js");

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
  member.ban(`${mat} | ${reason}`).then(() => {
      message.channel.send({embed: {
          title: `${mat} Membro banido`,
          fields: [
              {
                  name: "Nome:",
                  value: `${member.user.tag}`
              },
              {
                  name: "ID:",
                  value: `${member.user.id}`
              }
          ],
          color: cor
      }})
      member.user.send({embed: {
          title: `Você foi banido do servidor: ${message.guild.name}`,
          description: `Motivo: ${reason}\nBanido por: ${mat}`,
          color: red
      }}).catch(err => {
          if(err) return;
      })
  })
}

module.exports.help = {
  name:"banir"
}