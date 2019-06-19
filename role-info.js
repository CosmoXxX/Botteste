const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
    let roletocheck = args.join(" ")
    let role = client.guilds.get(message.guild.id).roles.find('name', roletocheck);
    if (!role) return message.channel.send("Ce role n'existe pas dans ce serveur.")
    //const serialized = role.permissions.serialize();
    //const perms = Object.keys(permissions).filter(perm => serialized[perm]);
      const embed = new Discord.RichEmbed()
      .setColor(0x00A2E8)
      .addField('Nom du role', `{role.name}`, true)
      .addField('ID du role', `${role.id}`, true)
      .addField('Créé le ', role.createdAt.toDateString())
      .addField("Mentionable: ", role.mentionable ? 'Yes' : 'No')
      .addField('Permissions' , perms.map(perm => permissions[perm]).join(', ') || 'None')
      message.channel.send({embed}) 
}
