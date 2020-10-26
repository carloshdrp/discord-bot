const Discord = require("discord.js");
const ms = require("ms");
const moment = require ("moment");

module.exports.run = async (client, message, args) => {

   const member = message.guild.member(message.author);
    
    let dia = member.user.createdAt.getDate()
    let mes = 1 + member.user.createdAt.getMonth()
    let ano = member.user.createdAt.getFullYear()


    const status = {
      online: `<:on:500687119849750535> Online`,
      idle: `<:yellow:500687119908601878> Ausente`,
      dnd: `<:red:500687123024969762> Não perturbe`,
      offline: `<:off:495266839971233809> Offline/Invisivel`,
      stream: `<:stream:438399396963418131> Transmitindo`,
    };

    let pUser = message.mentions.users.first()

    let kbot;
  if (member.user.bot === true) {
    kbot = "Sim";
  } else {
    kbot = "Não";
  }
  if(!pUser){
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setColor(0xfd1818)
    .setThumbnail(message.author.displayAvatarURL)
    .addField(`Discord Tag`, `**${message.author.tag}**`, true)
    .addField("Status", `**${status[member.user.presence.status]}**`, true)
    .addField("Jogando", `\`\`\`ml\n${member.user.presence.game ? `${member.user.presence.game.name}` : `Nenhum Jogo`}\`\`\``)
    .addField(`Nome do usuário`, `\`\`\`md\n# ${message.author.username}\`\`\``, true)
    .addField(`ID`, `\`\`\`glsl\n${member.id}\`\`\``, true)
    .addField(`Apelido no servidor`,`\`\`${member.nickname !== null ? `${member.nickname}` : "Nenhum Apelido"}\`\``, true)
    .addField(`Conta criada em`,`\`\`${moment(member.user.createdAt).format('LL')}\`\``, true)
    .addField(`Dias no discord`,`\`\`${moment().diff(message.author.createdAt, 'days')}\`\``)
    .addField(`Dias no servidor`,`\`\`${moment().diff(message.member.joinedAt, 'days')}\`\``)
    .addField(`Seus Roles`,`${message.member.roles.filter(r => r.id !== message.guild.id).map(role => role.toString()).join(', ') || "Nenhum Role"}`)
    .setFooter(`${message.guild.name}`,message.guild.IconURL)
    .setTimestamp()

    message.channel.send(embed)
    return;
  }

  let pbot;
  if (pUser.bot === true) {
    pbot = "Sim";
  } else {
    pbot = "Não";
  }

  let embed = new Discord.RichEmbed()
    .setAuthor(pUser.username, pUser.displayAvatarURL)
    .setColor(0xfd1818)
    .setThumbnail(pUser.displayAvatarURL)
    .addField(`Discord Tag`, `**${pUser.tag}**`, true)
    .addField("Status", `**${status[message.mentions.members.first().presence.status]}**`, true)
    .addField("Jogando", `\`\`\`ml\n${message.mentions.members.first().presence.game ? `${message.mentions.members.first().presence.game.name}` : "Nenhum Jogo"}\`\`\``)
    .addField(`Nome do usuário`, `\`\`\`md\n# ${pUser.username}\`\`\``, true)
    .addField(`ID`, `\`\`\`glsl\n${pUser.id}\`\`\``, true)
    .addField(`Apelido no servidor`,`\`\`${message.mentions.members.first().nickname !== null ? `${message.mentions.members.first().nickname}` : "Nenhum Apelido"}\`\``, true)
    .addField(`Conta criada em`,`\`\`${moment(pUser.createdAt).format('LL')}\`\``, true)
    .addField(`Dias no discord`,`\`\`${moment().diff(pUser.createdAt, 'days')}\`\``)
    .addField(`Dias no servidor`,`\`\`${moment().diff(message.mentions.members.first().joinedAt, 'days')}\`\``)
    .addField(`Seus Roles`,`${message.mentions.members.first().roles.filter(r => r.id !== message.guild.id).map(role => role.toString()).join(', ') || "Nenhum Cargo"}`)
    .setFooter(`${message.guild.name}`,message.guild.IconURL)
    .setTimestamp()

    message.channel.send(embed)
    return; 
  
}

module.exports.help = {
    name: "perfil"
  } 