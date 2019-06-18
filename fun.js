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
if (command === '8ball') {

if(!args[1]) return message.reply("Merci d'entrer une question complète avec 2 mots ou plus!");
                          
let replies = ["Oui.", "Non.", "Je ne sais pas.", "Demandez à nouveau un peu plus tard!", "Je ne suis pas sûr!", "Il me manque des informations pour pouvoir te répondre.", "À vous de me dire.", "Sans aucun doute.", "Je ne peux le dire maintenant.", "Sans aucun doute.", ];
                      
let result = Math.floor((Math.random() * replies.length));
let question = args.join(" ");
                      
let ballembed = new Discord.RichEmbed()
.setAuthor(message.author.username, message.author.avatarURL)
.setColor("#00ff00")
.addField("Question", question)
.addField("Réponse", replies[result])
                      
 message.channel.send(ballembed)
}

le morse ! commande indispensable pour votre bot ;)
if (command === 'morse') {

                    const embed = new Discord.RichEmbed()
                    .setAuthor(`${message.author.username}`, message.author.avatarURL)
  
                    .setColor("00FFFF")
                    .setDescription("``morse [message] ``")
                    .setFooter("erreur", 'https://cdn.discordapp.com/attachments/575719847418396733/582180312306679808/476014391427334144.png')
                    .setTimestamp()        
                  if (args.length < 1) {
                    return message.channel.send(embed)
                }
                message.channel.send(args.join(' ').split('').reverse().join(''));
              }
            
              if (command === 'morse') {
              let alpha = " ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split(""),
              morse = "/,.-,-...,-.-.,-..,.,..-.,--.,....,..,.---,-.-,.-..,--,-.,---,.--.,--.-,.-.,...,-,..-,...-,.--,-..-,-.--,--..,.----,..---,...--,....-,.....,-....,--...,---..,----.,-----".split(","),
              text = args.join(" ").toUpperCase();
            while (text.includes("Ä") || text.includes("Ö") || text.includes("Ü")) {
              text = text.replace("Ä","AE").replace("Ö","OE").replace("Ü","UE");
            }
            if (text.startsWith(".") || text.startsWith("-")) {
              text = text.split(" ");
              let length = text.length;
              for (i = 0; i < length; i++) {
                text[i] = alpha[morse.indexOf(text[i])];
              }
              text = text.join("");
            } else {
              text = text.split("");
              let length = text.length;
              for (i = 0; i < length; i++) {
                text [i] = morse[alpha.indexOf(text[i])];
              }
              text = text.join(" ");
            }
            return message.channel.send("+text+");
      
      }
  
