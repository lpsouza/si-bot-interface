const { Telegraf } = require('telegraf');

const TOKEN = process.env.BOT_TOKEN;
const bot = new Telegraf(TOKEN);


bot.use(Telegraf.session());

bot.start((context) => context.reply('START'));

bot.command('/test', (context) => context.reply('TEST'));

bot.launch();
