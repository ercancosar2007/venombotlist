const Discord = require('discord.js');
const client = new Discord.Client();
const db = require('quick.db');
module.exports.run = async (client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
  let prefix = "c?"
 db.delete(`westralogkanal_${message.guild.id}`);
  message.channel.send(` Başvuru log kanalı başarıyla sıfırlandı!`)
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru-log-kanal-sıfırla', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'başvuru-log-kanal-sıfırla'
};