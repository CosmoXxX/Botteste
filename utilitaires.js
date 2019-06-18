const Discord = require('discord.js')
const settings = require('./index.js)

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
