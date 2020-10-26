const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete();
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Voce nao tem permisão para usar o comando!");
  if(!args[0]) return message.channel.send("Quantas linhas?");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Pronto eu apaguei ${args[0]} mensagem.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "apagar"
}