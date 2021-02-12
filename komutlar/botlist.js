const Discord = require ("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » Dark Angel Botlist Sistemi  **")

.setDescription(`
*** Botlist Komutları ***
d!botekle
d!botlist-yetkili-rol-sıfırla
d!botlist-yetkili-rol-ayarla
d!başvuru-yapılacak-kanal-sıfırla
d!başvuru-yapılacak-kanal-ayarla
d!başvuru-log-kanal-sıfırla
d!başvuru-log-kanal-ayarla
d!başvuru-gidecek-kanal-sıfırla
d!başvuru-gidecek-kanal-ayarla
** Yetkili ***
d!botreddet
d!botonayla

`)
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};

  exports.help = {
    name: 'botlist', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: 'botlist'
};