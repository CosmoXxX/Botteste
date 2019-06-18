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
