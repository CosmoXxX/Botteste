const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('Veuillez entrer une ville!')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(${current.skytext})
.setAuthor(Météo de ${current.observationpoint})
.setThumbnail(current.imageUrl)
.setColor("#7289DA")
.addField(Heure Local , UTC${location.timezone})
.addField(Type de degrés : , ${location.degreetype})          
.addField(Température : , ${current.temperature} Degrés)          
.addField(Vent , ${current.winddisplay})
.addField(Humidité , ${current.humidity}%)
          message.channel.send({embed});
  })
}
