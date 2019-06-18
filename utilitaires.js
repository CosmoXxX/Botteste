const Discord = require('discord.js');

const settings = {
    prefix: ''',
    token: 'NTkwNTYwNDQwNjU2ODU1MDUz.XQkAag.Jqcj6743NWDGFrdhkFpLOoCsyYs'
  }

 if (command === 'avatar') {
                                let mentionedUser = message.mentions.users.first() || message.author;
                        
                                let embed = new Discord.RichEmbed()
                          
                                .setImage(mentionedUser.displayAvatarURL)
                                .setColor("00ff00")
                                .setTitle("Avatar :")
                                .setDescription("[Lien URL de l'avatar]("+mentionedUser.displayAvatarURL+")")
                             
                                message.channel.send(embed)  
                          }

if(command === "ping") {
            const m = await newFunction(message)("Ping?");
            m.edit(`Pong! Latence : **${m.createdTimestamp - message.createdTimestamp}ms**. API latence : **${Math.round(client.ping)}ms**`);
          }

 if(command === "annonce") {
            const sayMessage2 = args.join(" ");
           
            let servIcon = message.guild.iconURL;

            message.delete().catch(O_o=>{});
            const embed = new RichEmbed()
            .setTitle(':pushpin: Annonce :')
            .setColor("00CCFF")
            .setTimestamp()
            .setThumbnail(servIcon)
            .setFooter(`Cordialement, ${message.author.username}`)
            .setDescription(sayMessage2)
            
            message.channel.send(embed)
    
            
            }
