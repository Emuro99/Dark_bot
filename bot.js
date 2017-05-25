// DARK_EMBER BOT
const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'MzE0NzEwMDc4MzcwNDgwMTQw.DAC9QQ.1lpwG7P5tP6vFVerPuMoSaG-F_0';

client.login(token);

client.on('ready', () => {
  console.log(`Ready to server in ${client.channels.size} channels on ${client.guilds.size} servers, for a total of ${client.users.size} users.`);
});

client.on('guildMemberAdd', (member) => {
  console.log(`New User '${member.user.username}' has joined '${member.guild.name}'` );
});

  client.on('error', (e) => console.error(e));
  client.on('warn', (e) => console.warn(e));
  client.on('debug', (e) => console.info(e));
  
client.on('guildMemberAdd', member => {
  member.guild.defaultChannel.send(`  Welcome to Dark_Ember, ${member}!  `);
  const channel = member.guild.channels.find('name', 'member-log');
  if (!channel) return;
  channel.send(`  Welcome to the server, ${member} `);
});

client.on('message', (message) => {
	
	let prefix = '!';
	
	if (!message.content.startsWith(prefix)) return;
	
if (message.content.startsWith(prefix + 'map')) {
    message.channel.send('BDO map http://www.somethinglovely.net/bdo/');
} else
  
if (message.content.startsWith(prefix + 'failstack')) {
		message.channel.send('see how hard you fail https://goo.gl/cslBfe');
} else
		
if (message.content.startsWith(prefix + 'boss')) {
		message.channel.send('find dem bosses here http://urzasarchives.com/bdo/wbtbdo/wbteu/');
} else
		
if (message.content.startsWith(prefix + 'help')) {
		message.channel.send('``` !map - Get the map of black desert online & !failstack - Get the failstacks for gear & !boss - get the boss timers```');
} else 
	
if (message.content.startsWith(prefix + 'kito')){
		message.channel.send('**All Hail Kito**');
} else 
	
if (message.content.startsWith(prefix + 'iki')){
		message.channel.send('**Iki is the King of kings**');
} 	
});	

