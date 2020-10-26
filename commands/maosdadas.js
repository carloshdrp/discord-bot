
const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = (client, message, args) => {
    let user = message.mentions.users.first();
    if(!user) return message.channel.send('Você precisa mencionar alguém para dar as mãos!');
    let gifs = ['https://pa1.narvii.com/6244/1a168e21ebfbef4cef42e3ae4b3f926e1b1045a9_hq.gif'] 
    let random = Math.round(Math.random() * gifs.length);
    let embed = new Discord.RichEmbed()
        .setTitle(`${message.author.username} esta de mãos dadas com o(a) ${user.username}`)
        .setImage(gifs[gifs.length == 1 ? 0 : random == 0 ? random + 1 : random - 1])
        .setColor('RANDOM')
        .setFooter(message.author.tag, message.author.avatarURL).setTimestamp()
        message.channel.send(embed);
}
module.exports.help = {
    name: "mãosdadas"
}