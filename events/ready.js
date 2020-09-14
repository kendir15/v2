
const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "BİZE DETEK OL M.DAVET",
        "M.ŞİKAYET M.ÖNERİ YAYINDA!",
        "YEPYENİ SİSTEMLER",
       " SEVİYE SİSTEMİ YAYINDA!  ", 
   " M.SUNUCU YAZ YENİ SİSTEMLERİ GÖR SAYAÇ VE SEVİYE SİSTEMİ  ", 
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], "" );
        }, 2 * 2000 );
  
  
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} ismi ile giriş yapıldı!`);
  client.user.setStatus("online");
  

  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
};  
//Creative Developers//

//isteyen olursa oynuyor kısmını yayında olarak değiştirecek komudun linkini sunucumuzdan alabilir!