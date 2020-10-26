const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let invites = await message.guild.fetchInvites().catch(error => {
        return message.channel.send('Desculpe, não tenho as permissões adequadas para ver os convites!');
    });

    invites = invites.array();

    let possibleinvites = [];
    invites.forEach(function(invites) {
        possibleinvites.push(`${invites.uses}`)
    })
    let user;
    
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
        user = message.author;
    }
    
    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
    .setThumbnail(user.avatarURL)
    .setColor("RANDOM")
    .setAuthor(`${message.author.tag}`,message.author.avatarURL)
    .addField('Membros recrutados', `\`\`\`fix\n${possibleinvites.join('\n')}\`\`\``)
    .setFooter(`ID: ${message.author.id}`).setTimestamp();
    
    message.channel.send(embed);
}

module.exports.help = {
    name: "div"
}