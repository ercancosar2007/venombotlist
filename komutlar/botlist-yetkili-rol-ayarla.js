const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply(' blm Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "d!"
  let rol = message.mentions.roles.first();   
    if (!rol) {
      message.channel.send(`  Bir rol etiketlemelisin!`);
      return;
    }
 db.set(`westrabotlistyetkilirol_${message.guild.id}`, rol.id);
  message.channel.send(` Botlist yetkilisi rolü başarıyla ${rol} olarak ayarlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'botlist-yetkili-rol-ayarla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};