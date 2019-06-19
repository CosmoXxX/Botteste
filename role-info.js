
const Discord = require('discord.js');




const settings = {
    prefix: ''',
    token: 'NTkwNTYwNDQwNjU2ODU1MDUz.XQkAag.Jqcj6743NWDGFrdhkFpLOoCsyYs'
  } 
    
    client.on('message', async message => {
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    if(message.author.bot) return;
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;



if (command === 'role-info') {
 let inline = true

    let role = args.join(` `)
    if(!role) return message.reply("Specify a role!");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("Couldn't find that role.");

    const status = {
        false: "Non",
        true: "Ouo"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Nom", gRole.name, inline)
    .addField("Mention", `\`<@${gRole.id}>\``, inline)
    .addField("Couleur", gRole.hexColor, inline)
    .addField("Membres", gRole.members.size, inline)
    .addField("Position", gRole.position, inline)
    .addField("Affiché séparément", status[gRole.hoist], inline)
    .addField("Mentionable", status[gRole.mentionable], inline)
    .addField("Administrateur", status[gRole.managed], inline)
    
    message.channel.send(roleemebed);

}

if (command === 'bot-info') {
 let inline = true
    let bicon = bot.user.displayAvatarURL;
    let usersize = bot.users.size
    let chansize = bot.channels.size
    let uptimxd = bot.uptime 
    let servsize = bot.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Nom du bot", ` ${bot.user.username}`, inline)
    .addField("Créateur", " <@id>", inline )
    .addField("Serveurs", `🛡 ${servsize}`, inline)
    .addField("Channels", `📁 ${chansize}`, inline)
    .addField("Utilisateurs", ` ${usersize}`, inline)
    .addField("Librairie du bot", "Discord.js", inline)
    .addField("Créé le", bot.user.createdAt)
    .setFooter(`Informations: ${bot.user.username}. Developed by: DraLoW`)
    .setTimestamp()
    
    message.channel.send(botembed);

}
  

)};
