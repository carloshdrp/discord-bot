const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment")
moment.locale("pt-BR")

module.exports.run = (client, message, args) => {
    message.delete();
    let botembed = new Discord.RichEmbed()
        .setColor("2b2e32")
        .addField("Nome do bot:", `\`\`\`fix\n${client.user.username}\`\`\``)
        .addField("Versão do bot:", `\`\`\`fix\n"1.0.0"\`\`\``)
        .addField("Criado em:", `\`\`\`fix\n${moment(client.user.createdAt).format('L')}\`\`\``)
        .setFooter(client.user.username, client.user.displayAvatarURL).setTimestamp();
    return message.channel.send(botembed);
}

module.exports.help = {
    name: "bot"
}