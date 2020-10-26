const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
module.exports.run = (bot, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não tem permissão!");
            return message.channel.send(`${message.author} Você não tem permissão para executar esse comando!`)
            
            }
        var da = message.guild.roles.find("name","@everyone")
        var da1 = message.guild.roles.find('name', "Cargo pra poder falar")
        message.channel.overwritePermissions(da, {
            SEND_MESSAGES: false
            
            
          })
        
          message.channel.overwritePermissions(da1, {
            SEND_MESSAGES: true
        
          })
          message.channel.send(`O canal ${message.channel} foi **desativado** pelo ` + message.author)
    
    
}

module.exports.help = {
    name: "chatoff",
   
}
