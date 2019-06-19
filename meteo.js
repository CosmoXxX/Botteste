const Discord = require('discord.js');
const weather = require('weather-js');

module.exports.run = (client, message, args) => {
  meteo.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send('Veuillez entrer une ville!')
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new Discord.RichEmbed()
          .setDescription(**${current.skytext}**)
          .setAuthor(Météo de ${current.observationpoint})
          .setThumbnail(current.imageUrl)
          .setColor("#7289DA")
          .addField('Heure Local',UTC${location.timezone}, true)
          .addField('Type de degrés',location.degreetype, true)
          .addField('Température',${current.temperature} Degrés, true)
          .addField('Vent',current.winddisplay, true)
          .addField('Humidité', ${current.humidity}%, true)
          message.channel.send({embed});
  })
}

