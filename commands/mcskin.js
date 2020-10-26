const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = (client, message, args) => {
    let reason = args.slice(0).join(' ');
    if (reason.length < 1) return message.reply('**Cite um nick de minecraft!**');
    
    let embed = new Discord.RichEmbed()
  
    .setTitle(`<:bookmark_circle1232:495957875705774080> ${args[0]}`)
    .setImage(`https://mc-heads.net/skin/${args[0]}`)
    .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
    .setTimestamp(new Date())
    .setColor('RANDOM')
    message.channel.send(embed)
  };
module.exports.help = {
    name: "mcskin"
}