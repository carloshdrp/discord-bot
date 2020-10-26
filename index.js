const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const moment = require('moment');
client.commands = new Discord.Collection();

client.on("ready", () => {
    console.log(`----------------\nLigando o bot...`);
    console.log(`·▄▄▄▄•▄▄▄ .▄• ▄▌.▄▄ ·\n▪▀·.█▌▀▄.▀·█▪██▌▐█ ▀.\n▄█▀▀▀•▐▀▀▪▄█▌▐█▌▄▀▀▀█▄\n█▌▪▄█▀▐█▄▄▌▐█▄█▌▐█▄▪▐█\n·▀▀▀ • ▀▀▀  ▀▀▀  ▀▀▀▀ `);
    console.log(`---------------------------------------\n🇨 🇴 🇵 🇾 🇷 🇮 🇬 🇭 🇹  © 2018 - 🇽 🇽 🇽 🇽 `);
    client.user.setStatus('dnd');
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
});

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if (jsfile.length <= 0) {
        console.log("Couldn't find commands.");
        return;
    }
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        client.commands.set(props.help.name, props);
    });

});
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;


    if (message.content.startsWith(`<@${client.user.id}>`, `\<@${client.user.id}>`)) {
        message.channel.send(`Olá ${message.author}, meu prefixo é **z?** para ver meus comandos digite: \`\`z?comandos\`\`<a:festa:508637033049096202>.`)
    }

    var prefixo = 'z?';

    if (!message.content.startsWith(prefixo)) return;

    let prefix = config.prefix;

    let messageArray = message.content.split(" ");

    let cmd = messageArray[0];

    let args = messageArray.slice(1);

    let commandfile = client.commands.get(cmd.slice(prefix.length));

    if (commandfile) commandfile.run(client, message, args);

});

client.login(config.token);