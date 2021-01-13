const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(Telegraf.session());

bot.use((context, next) => {
    if (process.env.DEBUG == 1) {
    let chatId = context.chat.id;
    let chatName = context.chat.title;
    let userId = context.from.id;
    let userName = context.from.first_name;
    console.log(chatId, chatName, userId, userName);
    }
    if (context.chat.id == process.env.GROUP_ID) {
    next();
    }
    else {
        context.reply("NOT AUTHORIZED!");
    }
});


bot.start((context) => context.reply('START OK'));

bot.command('/test', (context) => context.reply('TEST OK'));

bot.launch();
