const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =>{

    let helpembed = new Discord.RichEmbed()
   .addField('🛠 **Utilitaire **:', '``'avatar [user]`` , ``'bvn [user]`` ,  ``'bot-info`` , ``'serveur-info`` , ``'rôle-info [rôle]`` , ``'google [recherche]`` , ``'youtube [recherche]``')message.channel.send(helpembed);
   .addField('🎉  **FUN** :', '``'8ball [questions]``')
   .addField('🚓 **Modérations** :', '``'ban [user] [raison]`` , ``'kick [user] [raison]`` , ``'warn [user] [raison]`` , ``'mute [user] [raison]`` , ``'purge [2-100]`` , ``'unmute [user]`` , ``'addrole [user] [role]`` , ``'removerole [user] [role]``')
   .addField('📌  **Autres** :', '``'ping``')
}
