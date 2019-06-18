const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Coucou');
});

const settings = {
    prefix: ''',
    token: 'NTkwNTYwNDQwNjU2ODU1MDUz.XQkAag.Jqcj6743NWDGFrdhkFpLOoCsyYs'
  }
  client.on('message', async message => {
    var command = message.content.toLowerCase().slice(settings.prefix.length).split(' ')[0];
    var args = message.content.split(' ').slice(1);
    if(message.author.bot) return;
    if (!message.content.startsWith(settings.prefix) || message.author.bot) return;

//vos scripts



client.on("guildMemberAdd", member =>{
    const welcome = member.guild.channels.find((x) => x.id === "")//id du chanel entre les "" 
    let b_embed = new Discord.RichEmbed()
    .setDescription(`${member.user.username} nous a rejoin :poop:`)
    return welcome.send(b_embed)
})
 
if(command === "google") {

          const sayMessage = args.join(" ");
          const embed = new Discord.RichEmbed()

.setAuthor(`${message.author.username}`, message.author.avatarURL)
.setColor("00FFFF")
.addField('Recherche correspondant à ' + `__${sayMessage}__`, https://www.google.com/search?client=firefox-b-d&q=" + args.join('+'))
     
         message.channel.send(embed);
        }
  
const embed = new Discord.RichEmbed()
                  .setAuthor(message.guild.name, servIcon)
                  .addField("Nom", message.guild.name, true)
                  .addField("ID", message.guild.id, true)
                  .addField("Propriétaire", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
                  .addField("Région", region[message.guild.region], true)
                  .addField("Total | Humains | Bots", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
                  .addField("Niveau de vérification", verifLevels[message.guild.verificationLevel], true)
                  .addField("Salons", message.guild.channels.size, true)
                  .addField("Rôles", message.guild.roles.size, true)
                  .addField("Date de création", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
                  .setColor('00FFFF')
                  .setThumbnail(servIcon)
              message.channel.send(embed);
            }

let embed = new Discord.RichEmbed()
                                  //.setAuthor(member.user.username)
                                  .setThumbnail((target.displayAvatarURL))
                                  .setAuthor(`${message.author.username}`, message.author.avatarURL)
                                  .setColor("#00ff00")
                                  .addField("Tag", `${member.user.tag}`, inline)
                                  .addField("ID", member.user.id, inline)
                                  .addField("Surnom", `${member.nickname !== null ? `${member.nickname}` : "Pas de surnom"}`, true)
                                  .addField("Bot", `${bot}`,inline, true)
                                  .addField("Status", `${status[member.user.presence.status]}`, inline, true)
                                  .addField("Joue", `${member.user.presence.game ? `:video_game: ${member.user.presence.game.name}` : "Ne joue pas"}`,inline, true)
                                  .addField("Rôles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Pas de rôle"}`, true)
                                  .addField("A rejoint discord le",moment.utc(member.user.createdAt).format("LL"), inline, true)
                                  .addField("A rejoint le serveur le",moment.utc(member.joinedAt).format('LL'), inline, true)
                                  .setFooter(`Informations sur ${member.user.username}`)
                                  .setTimestamp()
                      
                              message.channel.send(embed);
                       }
)};

client.login(settings.token);
 
