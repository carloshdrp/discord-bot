const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
   
var usuario = message.mentions.users.first();
//if(message.mentions.users.size < 1) return message.reply("Por favor Mencione alguém ou use o ID ")
  if(usuario === message.author) return message.channel.send("💥 você não pode banir Você mesmo! 💥")
    let bReason = args.slice(1).join(" ")
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não tem permissões suficientes para banir membros.");

  
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!bUser) return message.reply('Por favor Mencione alguém ou use o ID!');
    if (bUser.hasPermissions('ADMINISTRATOR')) return message.reply('Não consigo banir esse membro!');
    bUser.send()
    let banEmbed = new Discord.RichEmbed()
    .setThumbnail(bUser.user.displayAvatarURL)
    .setAuthor(`Banido por: ${message.author.username}`,message.author.displayAvatarURL)
    .setDescription(" 🚫 **Membro banido** 🚫 ")
    .setColor("#00ff00")
    .addField(`Tag: ${bUser.user.tag}`, `ID:${bUser.user.id}`)
    .addField(`**Usuario:** ${bUser.user.username}`, `<@${bUser.user.id}> banido com sucesso!`)
    .addField("**Motivo:**", `${bReason ? bReason : " Sem Motivo! "}`)
    .setTimestamp()

    let embed = new Discord.RichEmbed()
    .setThumbnail(bUser.user.displayAvatarURL)
    .setAuthor(`Banido por: ${message.author.username}`,message.author.displayAvatarURL)
    .addField("**Você foi banido do servidor:**", message.guild.name)
    .setColor("#bc0000")
    .addField("**Quem baniu:**", message.author.tag)
    .addField("**Motivo:**", `${bReason ? bReason : "Foi banido sem colocar o motivo."}`)
  message.delete()
  bUser.ban(bReason)
  message.channel.send(banEmbed);
  try{bUser.send(embed)}catch(e){message.channel.send("Não é possível enviar mensagem para o usuário.")}

}

module.exports.help = {
  name:"ban"
}