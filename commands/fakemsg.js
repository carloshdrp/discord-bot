const Discord = require("discord.js");
const client = new Discord.Client();


module.exports.run = (client, message, args) => {
    message.delete();
    try {
        let user;
      
          if (message.mentions.users.first()) {
            user = message.mentions.users.first();
            
          } else if(args[0]) {
              user = client.users.get(args[0]);
          
          }
        let botmessage = args.slice(1).join(' ')
       
        if (args[0] == null) {return message.channel.send(`${message.author}, <:close1538:495966983565738004> **Mencione um usuário !**`)}
        
      
          if (args[1] == null) {return message.channel.send(`${message.author}, <:close1538:495966983565738004> **Diga algo !**`)}
          message.channel.createWebhook(user.username, user.avatarURL).then(w => {
              w.send(botmessage);
              w.delete();
          })
          
      } catch (err) {
          message.reply('<:close1538:495966983565738004> **Eu não tenho permissão para criar um Webhook neste servidor, ou não encontrei este usuário.** <:close1538:495966983565738004>')
         }
}
module.exports.help = {
    name: "fakemsg"
}