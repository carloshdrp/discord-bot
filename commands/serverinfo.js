    const Discord = require("discord.js")
    const moment = require("moment")
    moment.locale("pt-BR")
    const prefix = "z?"

    module.exports.run = async(bot, message, args) => {
        message.delete();
        if (message.content.startsWith(`${prefix}serverinfo`)) {
            let online = message.guild.members.filter(a => a.presence.status == "online").size;
            let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
            let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
            let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
            let bot = message.guild.members.filter(a => a.user.bot).size;
            let totalmembros = message.guild.memberCount;
            let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
            let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
            const embed = new Discord.RichEmbed()
                .setAuthor(`${message.guild.name}`, message.guild.iconURL)
                .setDescription(`<a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896><a:linha:767909062976208896>`)
                .setColor("2b2e32")
                .addField(`👑| Dono do servidor`, `<@${message.guild.owner.id}>`, true)
                .addField(`<a:giroflex:507697300097859645>| ID do Dono`, `\`\`${message.guild.owner.id}\`\``, true)
                .addField('📅| Criado em:', `**${moment(message.guild.createdAt).format('LL')}**`, true)
                .addField(`🗓| Criado á`, `**${moment().diff(moment(message.guild.createdAt), 'days')}Dias**`, true)
                .addField("<:hu:508065528640831510>| ID", `**${message.guild.id}**`, true)
                .addField(`<:mundo:507934750132928533>| Região`, `**${message.guild.region}**`, true)
                .addField(`<a:membros:507934749835395082>| Total de Membros:`, `\`\`${totalmembros} membros \`\``, true)
                .addField(`🎫| Total de Cargos: `, `\`\`${message.guild.roles.size}\`\` cargos`, true)
                .addField(`<:texto:507934750464540672>| Canais de Texto`, `\`\`${canaistexto}\`\` canais de texto`, true)
                .addField(`<:voz:507934750506352640>| Canais de Voz`, `\`\`${canaisvoz}\`\` canais de voz`, true)
                .setImage(`https://cdn.discordapp.com/attachments/489474194980077580/498197771111628800/linha.gif`)
                .setFooter(`Pedido por ${message.author.tag}`, message.author.avatarURL)
                .setTimestamp()
            message.channel.send(embed)
        }
    }
    module.exports.help = {
        name: "serverinfo",

    }