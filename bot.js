const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const ytdl = require('ytdl-core');


const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "MON-BOT");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});




client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};




client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   l0RDconsole.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// }); //DEVİLHOUSE//

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);



//---------------------------------KOMUTLAR---------------------------------\\
// CHAT LOG \\
client.on("messageDelete", async message => {
  if (message.author.bot) return;

  var yapan = message.author;

  var kanal = await db.fetch(`chatlog_${message.guild.id}`);
  if (!kanal) return;
  var kanalbul = message.guild.channels.find("name", kanal);

  const chatembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Silindi!`, yapan.avatarURL)
    .addField("Kullanıcı Tag", yapan.tag, true)
    .addField("ID", yapan.id, true)
    .addField("Silinen Mesaj", "```" + message.content + "```")
    .setThumbnail(yapan.avatarURL);
  kanalbul.send(chatembed);
});

client.on("messageUpdate", async (oldMsg, newMsg) => {
  if (oldMsg.author.bot) return;

  var yapan = oldMsg.author;

  var kanal = await db.fetch(`chatlog_${oldMsg.guild.id}`);
  if (!kanal) return;
  var kanalbul = oldMsg.guild.channels.find("name", kanal);

  const chatembed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`Bir Mesaj Düzenlendi!`, yapan.avatarURL)
    .addField("Kullanıcı Tag", yapan.tag, true)
    .addField("ID", yapan.id, true)
    .addField("Eski Mesaj", "```" + oldMsg.content + "```")
    .addField("Yeni Mesaj", "```" + newMsg.content + "```")
    .setThumbnail(yapan.avatarURL);
  kanalbul.send(chatembed);
});
// CHAT LOG \\



client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'sa'){
          
        msg.reply('<a:monn:722716496584769546> Aleyküm Selam, Hoşgeldin <a:monn:722716496584769546> ');    
   const chatembed = new Discord.RichEmbed()
          .addField("MON-BOT SA-AS SİSTEMİ")
        }
      }
    });

client.on('message', async (msg, member, guild) => {
  let i = await  db.fetch(`saas_${msg.guild.id}`)
      if(i === 'açık') {
        if (msg.content.toLowerCase() === 'hi'){
          
        msg.reply('<a:monn:722716496584769546> Hi welcome <a:monn:722716496584769546>');    
      }
      }
    });
client.on("guildCreate", guild => {
  let alp1 = client.channels.get("747336242395480114")

 const alp = new Discord.RichEmbed()
.setTitle("SUNUCUYA EKLENDİM")
.setColor("GREEN")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
alp1.send(alp)
});

client.on("guildDelete", guild => {
  let alp2 = client.channels.get("747336242395480114")

 const alp3 = new Discord.RichEmbed()
.setTitle("SUNUCUDAN ATILDIM")
.setColor("RED")
.addField('** Sunucu ID**', `\`${guild.id}\``)
.addField('** Sunucu İsmi**', `\`${guild.name}\``)
.addField('** Üye Sayısı**', `\`${guild.members.size}\``)
.addField('** Kurucu**', `\`${guild.owner.user.tag}\``)
.addField('** Kurucu ID**', `\`${guild.owner.user.id}\``)
alp2.send(alp3)
});
client.on('message', async message => {
if (message.content === 's-fakeayrıl') { 
  client.emit('guildMemberRemove', message.member || await message.guild.fetchMember(message.author));
    }
});


client.on("guildMemberAdd", async member => {
  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  if (!kanal) return;
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
    const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacHG_${member.guild.id}`)
   
  if (!mesaj) {
    return client.channels.get(kanal).send(":loudspeaker: :inbox_tray: Kullanıcı Katıldı! `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz!" + "`" + member.user.username + "`");
  }

  if (member.guild.memberCount == sayaç) {
    return client.channels.get(kanal).send(`:loudspeaker: Sayaç Sıfırlandı! \`${member.guild.memberCount}\` Kişiyiz!`)
    await db.delete(`sayacK_${member.guild.id}`)
    await db.delete(`sayacS_${member.guild.id}`)
    await db.delete(`sayacHG_${member.guild.id}`)
    await db.delete(`sayacBB_${member.guild.id}`)
  }
  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user}`).replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.get(kanal).send(mesaj31);
    
  }
});

client.on("guildMemberRemove", async member => {

  const kanal = await db.fetch(`sayacK_${member.guild.id}`);
  const sayaç = await db.fetch(`sayacS_${member.guild.id}`);
  const sonuç = sayaç - member.guild.memberCount;
  const mesaj = await db.fetch(`sayacBB_${member.guild.id}`)
  if (!kanal) return;
  if (!sayaç) return;
    ///....

  if (!mesaj) {
    return client.channels.get(kanal).send(":loudspeaker: :outbox_tray: Kullanıcı Ayrıldı. `" + sayaç + "` Kişi Olmamıza `" + sonuç + "` Kişi Kaldı `" + member.guild.memberCount + "` Kişiyiz!" + "`" + member.user.username + "`");
      }

  if (mesaj) {
    const mesaj31 = mesaj.replace("-uye-", `${member.user.tag}`).replace("-uyetag-", `${member.user.tag}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-kalanuye-", `${sonuç}`).replace("-hedefuye-", `${sayaç}`)
    return client.channels.get(kanal).send(mesaj31);
  }
});


client.on("message", async msg => {
  if(msg.content.startsWith(prefix)) return;
  const db = require('quick.db');
  var id = msg.author.id;
  var gid = msg.guild.id;
  var xp = await db.fetch(`xp_${id}_${gid}`);
  var lvl = await db.fetch(`lvl_${id}_${gid}`);
  let seviyexp = await db.fetch(`seviyexp${msg.guild.id}`)
  const skanal = await db.fetch(`seviyekanal${msg.guild.id}`)
  let kanal = msg.guild.channels.get(skanal)
  if (msg.author.bot === true) return;
  let seviyeEmbed = new Discord.RichEmbed()
   seviyeEmbed.setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun!`)
   seviyeEmbed.setFooter(`${client.user.username} | Seviye Sistemi`)
   seviyeEmbed.setColor("ff0000")
   if(!lvl) {
    db.set(`xp_${id}_${gid}`, 5);
    db.set(`lvl_${id}_${gid}`, 1);
    db.set(`xpToLvl_${id}_${gid}`, 100);
    db.set(`top_${id}`, 1)
    }
  
  let veri1 = [];
  
  if(seviyexp) veri1 = seviyexp
  if(!seviyexp) veri1 = 5
  
  if (msg.content.length > 7) {
    db.add(`xp_${id}_${gid}`, veri1)
  };
  let seviyesınır = await db.fetch(`seviyesınır${msg.guild.id}`)

    let veri2 = [];
  
  if(seviyesınır) veri2 = seviyesınır
  if(!seviyesınır) veri2 = 250
   
  if (await db.fetch(`xp_${id}_${gid}`) > veri2) {
    if(skanal) {
 kanal.send(new Discord.RichEmbed()
   .setDescription(`Tebrik ederim <@${msg.author.id}>! Seviye atladın ve **${lvl+1}** seviye oldun!`)
   .setFooter(`${client.user.username} | Seviye Sistemi`)
   .setColor("ff0000"))
    }
    db.add(`lvl_${id}_${gid}`, 1)
    db.delete(`xp_${id}_${gid}`)};
    db.set(`top_${id}`, Math.floor(lvl+1))
  });

//SEVİYE-ROL-----------------------------------
client.on('message', async message => {
  var id = message.author.id;
  var gid = message.guild.id;
  let rrol = await db.fetch(`rrol.${message.guild.id}`)
  var level = await db.fetch(`lvl_${id}_${gid}`);
  
    if(rrol) {
  rrol.forEach(async rols => {
    var rrol2 = await db.fetch(`rrol2.${message.guild.id}.${rols}`)
    if(Math.floor(rrol2) <= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.addRole(rols)
    }
     else if(Math.floor(rrol2) >= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.removeRole(rols)
    }
  })
  }
  
    if(message.content == 'm.rütbeler') {
    if(!rrol) {
                message.channel.send(new Discord.RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`Herhangi bir rol oluşturulmadı.`))
      
      
      return;
    }
        const { RichEmbed } = require('discord.js')
      let d = rrol.map(x => '<@&'+message.guild.roles.get(x).id+'>' + ' **' + db.get(`rrol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
    message.channel.send(new RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`${d}`))
  }
  
  
})

client.on('message', async message => {
   var id = message.author.id;
  var gid = message.guild.id;
  let srol = await db.fetch(`srol.${message.guild.id}`)
  var level = await db.fetch(`lvl_${id}_${gid}`);
  if(srol) {
  srol.forEach(async rols => {
    var srol2 = await db.fetch(`srol2.${message.guild.id}.${rols}`)
    if(Math.floor(srol2) <= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.addRole(rols)
    }
     else if(Math.floor(srol2) >= Math.floor(level)) {
      let author = message.guild.member(message.author)
      author.removeRole(rols)
    }
  })
    
    
    
    
    
    
    
    
  }
    if(message.content == 'm.seviye-rolleri' || message.content == "m.levelroles") {
    if(!srol) {
                message.channel.send(new Discord.RichEmbed()
                      .setColor("ff0000")
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`Herhangi bir rol oluşturulmadı.`))
      return;
    }
        const { RichEmbed } = require('discord.js')
      let d = srol.map(x => '<@&'+message.guild.roles.get(x).id+'>' + ' **' + db.get(`srol3.${message.guild.id}.${x}`)+' Seviye**' ).join("\n")
    message.channel.send(new RichEmbed()
                      .setColor("ff0000")
                      //.setColor(message.guild.member(message.author).highestRole.hexColor)
                      .setFooter(`${client.user.username} Seviye-Rol Sistemi!`, client.user.avatarURL)
                      .setDescription(`${d}`))
  }
  
})






client.on("guildMemberAdd", async member => {
let kanal = await db.fetch(`otok_${member.guild.id}`)  
let rol = await db.fetch(`otorol_${member.guild.id}`)   
let mesaj =  db.fetch(`otomesaj_${member.guild.id}`)  
if(!kanal) return

if(!mesaj) {
  
  client.channels.get(kanal).send(':loudspeaker: :inbox_tray: Otomatik Rol Verildi Seninle Beraber `'+member.guild.memberCount+'` Kişiyiz! Hoşgeldin! `'+member.user.username+'`')
member.addRole(rol)
  return
}

if(mesaj) {
  var mesajs = await db.fetch(`otomesaj_${member.guild.id}`).replace("-uye-", `${member.user.tag}`).replace("-rol-", `${member.guild.roles.get(rol).name}`).replace("-server-", `${member.guild.name}`).replace("-uyesayisi-", `${member.guild.memberCount}`).replace("-botsayisi-", `${member.guild.members.filter(m => m.user.bot).size}`).replace("-bolge-", `${member.guild.region}`).replace("-kanalsayisi-", `${member.guild.channels.size}`)
  member.addRole(rol)
  client.channels.get(kanal).send(mesajs)

}  
  
});

///////sniper//////

client.on('messageDelete', message => {
  db.set(`snipe.mesaj.${message.guild.id}`, message.content)
  db.set(`snipe.id.${message.guild.id}`, message.author.id)
})
/////seslide tutma///

client.on('ready', ()=>{
client.channels.get('752551969398325298').join()
})
////afk//////


client.on('guildCreate', guild => {
var id = guild.owner.user.id;
client.guilds.get('737163894769975368').members.get(id).addRole('752858766088732733')
})



client.on('guildMemberAdd', async member => {
  let ozelhosgeldin = await db.fetch(`ozelhosgeldin_${member.guild.id}`)
  if (!ozelhosgeldin) return;
  member.send(ozelhosgeldin ? ozelhosgeldin.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})  

////////////////////////////// GÖRÜŞÜRÜZ
 client.on('guildMemberRemove', async member => {
  let ozelgorusuruz = await db.fetch(`ozelgorusuruz_${member.guild.id}`)
  if (!ozelgorusuruz) return;
  member.send(ozelgorusuruz ? ozelgorusuruz.replace('-sunucu-', `\`${member.guild.name}\``) .replace('-kullanıcı-',`\`${member.user.tag}\``) : ``)
})