
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
        false: "No",
        true: "Yes"
      }

    let roleemebed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .addField("ID", gRole.id, inline )
    .addField("Name", gRole.name, inline)
    .addField("Mention", `\`<@${gRole.id}>\``, inline)
    .addField("Hex", gRole.hexColor, inline)
    .addField("Members", gRole.members.size, inline)
    .addField("Position", gRole.position, inline)
    .addField("Hoisted", status[gRole.hoist], inline)
    .addField("Mentionable", status[gRole.mentionable], inline)
    .addField("Managed", status[gRole.managed], inline)
    
    message.channel.send(roleemebed);

}
 

)};
