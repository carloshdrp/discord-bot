const Discord = require('discord.js');


exports.run = async (client, message, args) => {
  try {

let user;

    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else if(args[0]) {
        user = client.users.get(args[0]);
    }
    
    if (args[0] == null) {return message.channel.send(`**${message.author.username}**, <:close1538:495966983565738004> **Mencione** um **bot** ou diga seu **ID** !`)}
  const embed = new Discord.RichEmbed()
  .addField(`<:url1424:495975621739151360> Invite do(a) ${user.username} :`, `[Sem Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=0) \n[Permissão Administrador](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=8) \n[Todas Permissões](https://discordapp.com/oauth2/authorize?client_id=${user.id}&scope=bot&permissions=2146958591)`)
  .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
  .setTimestamp(new Date())
  .setColor('RANDOM')
   .setThumbnail(user.avatarURL)       
    if (user.bot) return message.channel.send(embed)
    message.channel.send(`**${message.author.username}**, <:close1538:495966983565738004> Este usuário não é um **bot**!`)

} catch (err) {
    message.channel.send(`**${message.author.username}**, <:close1538:495966983565738004> Isto não é um **bot**!`)
}
}
module.exports.help = {
    name: "botinvite"
}