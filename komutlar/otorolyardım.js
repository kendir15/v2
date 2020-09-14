const Discord = require('discord.js');
const loglar = require('../ayarlar.json');
const db = require('quick.db');


var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const eğlence = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`Snax Bot Otorol Komutları`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
.addField("| Otorol Ayarlamak İçin m.oto-rol-ayarla @rol #kanal| ", "Bu Kod Normal Kullanıcılar İçindir")
.addField("| m.otorol Kapat|", "Otorol Kapatmak İçin Bunu Yazın `m.oto-rol-kapat`")
.addField("| m.oto-rol-msg 》 Otorol Mesajını Ayarlar Gold Üye İçindir. | ", "Örnek: `m.oto-rol-msg -server-, Sunucumuza Hoşgeldin, -uye-! -rol- Adlı Rolün Başarı İle Verildi Seninle Beraber, **-uyesayisi-** Kişiyiz.`")
.addField("-uye- Katılan Kullanıcı İsmi -rol- Verilecek Rol İsmi -server- Sunucu İsmi -uyesayisi- Sunucudaki Üye Sayısı Toplam -botsayisi- Sunucudaki Toplam Bot Sayısı -bolge- Sunucun Bolgesi -kanalsayisi- Sunucudaki Toplam Kanal Sayısı")

          

return message.channel.sendEmbed(eğlence);
 

};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
  
exports.help = {
  name: 'otorol',
  description: 'Komut kategorilerini gösterir.',
  usage: 'eğlence'
  };