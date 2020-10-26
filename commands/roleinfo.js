const Discord = require("discord.js");
const moment = require('moment');
moment.locale('pt-BR');

module.exports.run = (client, message, args) => {
    let roletocheck = args.join(" ")
    let role = client.guilds.get(message.guild.id).roles.find('name', roletocheck);
    if (!role) return message.channel.send("O cargo não foi encontrado no servidor. Ou voce não escreveu o nome do cargo.")
    const embed = new Discord.RichEmbed()
        .setTitle(`Informações do cargo \`\`${role.name}\`\``)
        .setDescription(`<a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973><a:linha:766729875297533973>`)
        .setColor("2b2e32")
        .addField("Nome do cargo:", `\`\`\`fix\n= ${role.name}\`\`\``, true)
        .addField("ID do cargo:", `\`\`\`fix\n${role.id}\`\`\``, true)
        .addField("Cargo criado em:", `\`\`\`diff\n+ ${moment(role.createdAt).format('L')}\`\`\``, true)
        .addField(`Criado a:`, `\`\`\`diff\n- ${moment().diff(moment(role.createdAt), 'days')} Dias\`\`\``, true)
        .addField("Cor:", `\`\`\`md\n#${role.color}\`\`\``, true)
        .addField(`Marcação:`, role, true)
        .addField(`Membros:`, role.size, true)
    message.channel.send(embed)

}
module.exports.help = {
    name: "test"
}