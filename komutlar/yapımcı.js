const Discord = require('discord.js');


exports.run = function(client, message) {

    const embed = new Discord.RichEmbed()
        .setDescription("<@521068805481299968>")
        .setImage("https://img.webme.com/pic/s/simestime/dcg.jpg")
        .setThumbnail("https://i.hizliresim.com/moMal8.jpg")
        .setColor(0x00AE86)
        .addField("Lakabı", "Leopsi", true)
        .addField("Yetenekleri", `
        *Ayarla.*
        *Ayarla*`, true)
   .addField("Nasıl Birisidir", `Osuruklı`, true)
   .addField("En Çok Sevdiği Şey", "yarrak.", true)

   message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yapımcı',
  description: 'YAPIMCI HAKKINDA BİLGİ VERİR',
  usage: 'yapımcı'
};
