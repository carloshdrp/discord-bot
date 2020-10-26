const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let member = message.mentions.users.first() || bot.users.get(args[0]) || message.author;
let avatar = member.displayAvatarURL;
let cor = 0x2b2e32
if (avatar.endsWith(".gif")) {
    avatar = `${member.displayAvatarURL}?size=2048`
}
message.channel.send(`${message.author}`)
message.channel.send({
    embed: {
        title: `:frame_photo: ${member.username}`,
        description: `**Clique [aqui](${avatar}) para baixar a imagem!**`,
        image: {
            url: avatar
        },
        color: cor
    }
})
  }

module.exports.help = {
    name: "av"
}
 