const Discord = require("discord.js");


module.exports.run = async(bot, message, args) => {
    message.delete();
    let bicon = bot.user.displayAvatarURL;
    let ajudaembed = new Discord.RichEmbed()
        .setDescription("Meus comandos:")
        .setColor('RANDOM')
        .setThumbnail(bicon)
        .addField(`**Comandos Gerais**`, `**a!ajuda\n a!apagar\n a!avisopv\na!banir \na!beijar \na!botinfo \na!botinvite \na!chatoff \na!denuncia\na!fakemsg\na!mãosdadas\na!mcskin\na!ping\na!registrar\na!roleinfo\na!say\na!userinfo\na!serverinfo**`)
        .setImage(`https://i.imgur.com/QBWRBjP.gif`)
        .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()

    let embed = new Discord.RichEmbed()
        .setDescription(`Pronto ${message.author} olhe suas dm!\n lá estarão todos os meus comandos!    `)
        .setThumbnail(message.author.avatarURL)
        .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
        .setColor('0x6e2fce')
    message.channel.send(embed)
    return message.member.send(ajudaembed);

}

module.exports.help = {
    name: "help",

}