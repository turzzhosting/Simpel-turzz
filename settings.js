
const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

//~~~~~~~~~~~ Settings Bot ~~~~~~~~~~~//
global.owner = '6283121512755'
global.versi = version
global.namaOwner = "TurzzHosting"
global.packname = 'Assisten bot WhatsApp by Turzz Hosting'
global.botname = 'Yupz Botz'
global.botname2 = 'Yupz Botz'

//~~~~~~~~~~~ Settings Link ~~~~~~~~~~//
global.linkOwner = "https://wa.me/6283121512755"
global.linkGrup = "https://whatsapp.com/channel/0029Vb2TdjRElaglH8iVgv3C"

//~~~~~~~~~~~ Settings Jeda ~~~~~~~~~~//
global.delayJpm = 3500
global.delayPushkontak = 6000

//~~~~~~~~~~ Settings Saluran ~~~~~~~~~//
global.linkSaluran = "https://whatsapp.com/channel/0029Vb2TdjRElaglH8iVgv3C"
global.idSaluran = "120363338785464408@newsletter"
global.namaSaluran = "TURZZ HOSTING"

//~~~~~~~~~ Settings Orderkuota ~~~~~~~~//
global.merchantIdOrderKuota = "-"
global.apiOrderKuota = "-"
global.qrisOrderKuota = "-"

//~~~~~~~~~~ Settings Apikey ~~~~~~~~~~//
global.apiDigitalOcean = "-"
global.apiSimpleBot = "simplebotz85"

//~~~~~~~~~ Settings Payment ~~~~~~~~~//
global.dana = "-"
global.ovo = "-"
global.gopay = "-"

//~~~~~~~~~~ Settings Image ~~~~~~~~~~//
global.image = {
menu: "https://i.top4top.io/p_3344338pp0.jpeg", 
reply: "https://i.top4top.io/p_3344338pp0.jpeg", 
logo: "https://i.top4top.io/p_3344338pp0.jpeg", 
qris: "https://i.top4top.io/p_3344338pp0.jpeg"
}

//~~~~~~~~~ Settings Api Panel ~~~~~~~~//
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://garnies.mbbreal.tech"
global.apikey = "ptla_seRT8UQiWuuoPhagnUznaK2KSWX1rWnIjhR66FGRlT3" //ptla
global.capikey = "ptlc_tNVD25zQShvHtDSoMwXND6YPepFcBvlCaFCha65q9gd" //ptlc

//~~~~~~~~ Settings Api Panel 2 ~~~~~~~~//
global.eggV2 = "15" // Egg ID
global.nestidV2 = "5" // nest ID
global.locV2 = "1" // Location ID
global.domainV2 = "https://relzzxrapxy.privatserver.my.id"
global.apikeyV2 = "ptla_qRyKfyrqLaICR7NFkuncdPvbL7ML4VCvtV7rSacIVcA" //ptla
global.capikeyV2 = "ptlc_bf5JuXCKSOy3lLOiijD1RJNu3eUePXW95u3hYmV715q" //ptlc

//~~~~~~~ Settings Api Subdomain ~~~~~~~//
global.subdomain = {
"serverku.biz.id": {
"zone": "4e4feaba70b41ed78295d2dcc090dd3a", 
"apitoken": "oof_QRNdUC4aMQ3xIB8dmkGaZu7rk2J-0P_tN55l"
}, 
"privatserver.my.id": {
"zone": "699bb9eb65046a886399c91daacb1968", 
"apitoken": "CrQMyDn2fhchlGne2ogAw7PvJLsg4x8vasBv__6D"
}, 
"panelwebsite.biz.id": {
"zone": "2d6aab40136299392d66eed44a7b1122", 
"apitoken": "cj17Lzg9otqwkYIVzgL0pcVA4GfcXqePHAOhCqa_"
}, 
"mypanelstore.web.id": {
"zone": "c61c442d70392500611499c5af816532", 
"apitoken": "N_VhWv2ZK6UJxLdCnxMfZx9PtzAdmPGM3HmOjZR4"
}, 
"pteroserver.us.kg": {
"zone": "f693559a94aebc553a68c27a3ffe3b55", 
"apitoken": "qRxwgS3Kl_ziCXti2p4BHbWTvGUYzAuYmVM28ZEp"
}, 
"digitalserver.us.kg": {
"zone": "df13e6e4faa4de9edaeb8e1f05cf1a36", 
"apitoken": "sH60tbg10UH8gpNrlYpf3UMse1CNJ01EKJ69YVqb"
}, 
"shopserver.us.kg": {
"zone": "54ca38e266bfdf2dcdb7f51fd79c2db5", 
"apitoken": "GRe4rg-vhb4c8iSjKCALHJC0LaxkzNPgmmgcDGpm"
}
}

//~~~~~~~~~~ Settings Message ~~~~~~~~//
global.mess = {
	owner: "hanya untuk owner bot!",
	admin: "hanya untuk admin grup!",
	botAdmin: "Fitur ini hanya untuk ketika bot menjadi admin!",
	group: "Fitur ini hanya untuk dalam grup!",
	private: "Fitur ini hanya untuk dalam private chat!",
	prem: "Fitur ini hanya untuk user premium!",
	wait: 'Loading Cuyy 🚀...',
	error: 'Error! 😓',
	done: 'Done ✨'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})