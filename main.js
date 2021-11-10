const Discord = require('discord.js');
const client = new Discord.Client();
const token = "ODE3NDk1OTk1NDMyMTczNjI4.YEKWeQ.8TJdoI9hW2HcU69O6JzOK_hTcRw";

client.login(token);

client.on('ready', () => {
  console.log('The bot is logged in.');
});

var spank = 7;
var dav = 0;
var vazsub = 1;
var rose = 0;
var joe = 0;
var facts = ["mike-sub is the best bot.", "vaz-sub is the worst bot.", "The first oranges weren’t orange", 
"There’s only one letter that doesn’t appear in any U.S. state name", "A cow-bison hybrid is called a beefalo",
"Scotland has 421 words for snow", "Peanuts aren’t technically nuts", "Armadillo shells are bulletproof",
"The longest English word is 189,819 letters long", "Cats have fewer toes on their back paws"];

client.on('message', message => {

  if(message.content.toLocaleLowerCase().includes('Shut the fuck up')){
    message.channel.send('No you shut the fuck up.');
  }
  else if(message.content === 'сука блять'){
    message.channel.send('член присоски');
  }
  if(message.author.bot) return;
  else if(message.content.toLocaleLowerCase().includes('Who\'s the best bot?')){
    message.channel.send('mike-sub is the best bot.');
  }
  else if(message.content.toLocaleLowerCase().includes('Who\'s the worst bot?')){
    message.channel.send('vav-sub is the worst bot.');
  }
  else if(message.content.includes('lmao')){
    message.channel.send('lol');
  }
  else if(message.content.includes('պարապ էս մնացել?')){
    message.channel.send('այո ընկեր');
  }
  else if(message.content.toLocaleLowerCase().includes('vaz-sub')){
    vazsub++;
    message.channel.send('Spanking vaz-sub. Total of ' + vazsub + ' times.');
  }
  else if(message.content.toLocaleLowerCase().includes('spank vaz' || 'spank vazgen')){
    spank++;
    message.channel.send('Spanking vaz. Total of ' + spank + ' times.');
  }
  else if(message.content.toLocaleLowerCase().includes('spank mike')){
    spank++;
    message.channel.send('tso inch es anum?\ntsk tsk tsk, spanking vaz\nTotal of ' + spank + ' times.');
  }
  else if(message.content.includes('spank Դավիթ')){
    dav++;
    message.channel.send('Spanking Դավիթ. Total of ' + dav + ' times.');
  }
  else if(message.content.toLocaleLowerCase().includes('spank rumyum')){
    rose++;
    message.channel.send('Spanking rumyum. Total of ' + rose + ' times.');
  }
  else if(message.content.toLocaleLowerCase().includes('spank joe' || 'joey' || 'hoso' || 'hovsep')){
    rose++;
    message.channel.send('Spanking Joe. Total of ' + joe + ' times.');
  }
  else if(message.content === 'fact'){
    var fact = Math.floor(Math.random() * 10);
    message.channel.send(facts[fact]);
  }
});