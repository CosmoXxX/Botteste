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


 if(command === "kick") {

     if(!message.member.hasPermission("KICK_MEMBERS"))
        return message.channel.send("Vous n'avez pas les permissions nécéssaire)";

      message.guild.members.get(args[0]);
      if(!member)
        return message.channel.send("``kick [user] [raison]``");
      
      if(!member.kickable) 
        return message.channel.send(Je ne peux pas kick cet utilisateur! Ont-ils un rôle plus élevé? Ai-je les bonnes autorisations?);
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Aucune raison fournie";
      
      await member.kick(reason)
        .catch(error => message.reply(`Désolé **${message.author}** Je ne pouvais pas kick cette utilisateur à cause de **${error}**`));
  
        const embed = new Discord.RichEmbed()
              
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
  
        .setColor("FF6600") 
        .addField('Kick', `**${member.user.tag}**`) 
        .addField('Par :', `**${message.author.tag}**`)
        .addField('Sur :', `**${message.guild.name}**`)
        .addField(`Raison :`, `**${reason}**`)
        message.channel.send(embed);
        return  member.send(embed)
      }


 if(command === "ban") {

     if(!message.member.hasPermission("BAN_MEMBERS"))
        return message.channel.send("Vous n'avez pas les permissions nécéssaire)";

      message.guild.members.get(args[0]);
      if(!member)
        return message.channel.send("``ban [user] [raison]``");
      
      if(!member.banable) 
        return message.channel.send(Je ne peux pas ban cet utilisateur! Ont-ils un rôle plus élevé? Ai-je les bonnes autorisations?);
      
      let reason = args.slice(1).join(' ');
      if(!reason) reason = "Aucune raison fournie";
      
      await member.kick(reason)
        .catch(error => message.reply(`Désolé **${message.author}** Je ne pouvais pas ban cette utilisateur à cause de **${error}**`));
  
        const embed = new Discord.RichEmbed()
              
        .setAuthor(`${message.author.username}`, message.author.avatarURL)
  
        .setColor("FF6600") 
        .addField('Ban', `**${member.user.tag}**`) 
        .addField('Par :', `**${message.author.tag}**`)
        .addField('Sur :', `**${message.guild.name}**`)
        .addField(`Raison :`, `**${reason}**`)
        message.channel.send(embed);
        return  member.send(embed)
      } 


if(command === "warn") {

          if(!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("Vous n'avez pas les permissions nécéssaire");
        
          let member = message.mentions.members.first() || message.guild.members.get(args[0]);
          if(!member)
            return message.channel.send("``warn [user] [raison]``");
          
          let reason = args.slice(1).join(' ');
          if(!reason) reason = "Aucune raison fournie";
          
            const embed = new Discord.RichEmbed()
              
            .setAuthor(`${message.author.username}`, message.author.avatarURL)
      
            .setColor("FF6600")      
            .addField('Warn', `**${member.user.tag}**`) 
            .addField('Par :', `**${message.author.tag}**`)
            .addField('Sur :', `**${message.guild.name}**`)
            .addField(`Raison :`, `**${reason}**`)
            message.channel.send(embed);
        return  member.send(embed)
           
          }
  

if(command === "purge") {
  
          if(!message.member.hasPermission("MANAGE_MESSAGES"))
            return message.channel.send("Désolé, vous n'avez pas les autorisations pour utiliser ceci!");
          const deleteCount = parseInt(args[0], 10);
          
          if(!deleteCount || deleteCount < 2 || deleteCount > 100)
            return message.channel.send("Veuillez indiquer un nombre compris entre 2 et 100 pour le nombre de messages à supprimer.");
          
          const fetched = await message.channel.fetchMessages({limit: deleteCount});
          message.channel.bulkDelete(fetched)
            .catch(error => message.reply(`Impossible de supprimer les messages pour la raison suivante: ${error}`));
      
            const embed = new Discord.RichEmbed()
              
              .setAuthor(`${message.author.username}`, message.author.avatarURL)
              .setColor("ff0000")
              .addField(`Nombres de messages suprimés :`, `${deleteCount}`,true)
            message.channel.send(embed);
     
         }

//mute une personne :
 let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
                    if(!tomute) return message.channel.send("Merci mentionnez l'utilisateur pour le rendre muet");
                    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Désolé, vous n'avez pas les autorisations pour utiliser ceci!");
                    if(tomute.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Je ne peux pas rendre muet cet utilisateur");
                    if (tomute.id === message.author.id) return message.channel.send("Vous ne pouvez pas vous rendre muet!");
                    let muterole = message.guild.roles.find(`name`, "Muet");
                  
                    if(!muterole){
                      try{
                        muterole = await message.guild.createRole({
                          name: "Muet",
                          color: "#000000",
                          permissions:[]
                        })
                        message.guild.channels.forEach(async (channel, id) => {
                          await channel.overwritePermissions(muterole, {
                            SEND_MESSAGES: false,
                            ADD_REACTIONS: false
                          });
                        });
                      }catch(e){
                        console.log(e.stack);
                      }
                    }

                    await(tomute.addRole(muterole.id));
                    message.channel.send(`<@${tomute.id}> a été rendu muet!`);

                    
                  }


//Unmute une personne mute :
 if (command === 'unmute') {
                      if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.sendMessage("Vous n'avez pas la permission `Manage Messages`")

                      let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                      if(!toMute) return message.channel.sendMessage("Veuillez mentionner un utilisateur ou son ID!");
              
                      let role = message.guild.roles.find(r => r.name === "Muet")
                      
                      if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("Cet utilisateur n'est pas muet");
              
                      await toMute.removeRole(role);
                      message.channel.sendMessage("L'utilisateur n'est plus muet");


                        if (command === 'addrole') {
                        if(args[0] == "help"){
                          let helpembxd = new Discord.RichEmbed()
                          .setColor("#00ff00")
                          .addField("Donner un rôle", "Usage: ``addrole <@user> <rôle>``")
                      
                          message.channel.send(helpembxd);
                          return;
                        } 
                      
                        let xdemb = new Discord.RichEmbed()
                        .setColor("#00ff00")
                        .setTitle(`Donner un rôle`)
                        .addField("Description", "Donner un rôle à une personne.", true)
                        .addField("Usage", "``addrole [user] [rôle]``", true)
                        .addField("Example", "``addrole @Tacosburk#0000 Membre``")
 
   if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Vous n'avez pas la permission de faire ça!");
                        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                        if(!rMember) return message.channel.send(xdemb);
                      
                        let role = args.join(" ").slice(22);
                        if(!role) return message.channel.send("Spécifiez un rôle!");
                        let gRole = message.guild.roles.find(`name`, role);
                        if(!gRole) return message.channel.send("Impossible de trouver ce rôle.");
                      
                        if(rMember.roles.has(gRole.id)) return message.channel.send("Cet utilisateur a déjà ce rôle.");
                        await(rMember.addRole(gRole.id));
                      
                          await message.channel.send(`Je viens de donner à **${rMember.user.username}** le rôle **${gRole.name}**`)
                      
                        } 
  if (command === 'removerole') {
                        if(args[0] == "help"){
                          let helpembxd = new Discord.RichEmbed()
                          .setColor("#00ff00")
                          .addField("Retirer un rôle", "Usage: b!removerole <@user> <role>")
                      
                          message.channel.send(helpembxd);
                          return;
                        } 
                      
                        let xdemb = new Discord.RichEmbed()
                        .setColor("#00ff00")
                        .setTitle(`Retirez un rôle`)
                        .addField("Description:", "Retirer le rôle d'une personne", true)
                        .addField("Usage", "b!removerole [user] [role]", true)
                        .addField("Example", "'removerole @user Membre")
   if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Pour cela, vous avez besoin de la premission `MANAGE_ROLES`");
                        let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                        if(!rMember) return message.channel.send(xdemb);
                      
                        let role = args.join(" ").slice(22);
                      
                        if(!role) return message.channel.send("Spécifiez un rôle!");
                        let gRole = message.guild.roles.find(`name`, role);
                        if(!gRole) return message.channel.send("Impossible de trouver ce rôle.");
                      
                        if(!rMember.roles.has(gRole.id)) return message.channel.send("Cet utilisateur n'a pas ce rôle.");
                        await(rMember.removeRole(gRole.id));
                      
                        await message.channel.send(`Je viens de supprimer le rôle **${gRole.name}** a **${rMember.user.username}**`)
  
                      } 

)};

