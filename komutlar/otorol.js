//komutlarA


//kom};utlar/otorol-msj.js (JavaScript)
   

//komutlar/otorol-kapat.js (JavaScript)
   

//komutlar/otorol-ayarla.js (JavaScript)
   
const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
       if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`:red704240509773807656:  Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
let rol = message.mentions.roles.first()
let kanal = message.mentions.channels.first()
  
if(!rol) return message.channel.send(` Ayarlamam İçin Bir Rol Etiketlemeilisin. 
: Rolü Etiketleyemiyorsan **Rolün Etiketleme Seçeneğini Aktif Etmeyi Unutma**
 Örnek Kullanım : m.otorol @rol #kanal 

 Önemli Not!!: Oto Rol Vermem İçin Verilecek Rolün Üstünde Bir Rolüm Olmalı Yoksa Rolü Veremem :)`)  
 if(!kanal) return message.channel.send(':: Ayarlamam İçin Bir Kanal Etiketlemeilisin.')

message.channel.send(`<a:dogru:746262562009514055>   Otorol Aktif Edildi 
<a:dogru:746262562009514055>   Oto Rolü ${rol}' Olarak Güncelledim! 
<a:dogru:746262562009514055>   Kayıt Kanalını '${kanal}' Olarak Güncelledim!`)

db.set(`otok_${message.guild.id}`, kanal.id)  
db.set(`otorol_${message.guild.id}`, rol.id)  

};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 0
};

exports.help = {
  name: 'otorol-ayarla',
  description: 'oto-rol-ayarla', 
  usage: 'oto-rol-ayarla'
};
//main dosyası yani bot.js,server.js,index.js gibi (JavaScript)
 