const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    

    let msgping1 = new Date();

    let botping = new Date() - message.createdAt;


    let pingembed = new Discord.RichEmbed()
        .setColor("2b2e32")
        .addField('📡| Meu ping: ', Math.floor(botping) + 'ms')
        .setTimestamp(new Date())
        .setFooter(`requisitado por ${message.author.tag}`);

        
    return message.channel.send(pingembed);
        

};

module.exports.help = {
    name: "ping"
};