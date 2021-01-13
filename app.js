const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.use(Telegraf.session());

bot.use((context, next) => {
    let chatId = context.chat.id;
    let chatName = context.chat.title;
    let userId = context.from.id;
    let userName = context.from.first_name;

    if (process.env.DEBUG == 1) {
        if (chatId == userId) {
            console.log(`User: ${userName} (${userId}) access the bot direct`);
        } else {
            console.log(`User: ${userName} (${userId}) access the bot on "${chatName}" (${chatId}) group`);
        }
    }

    if (context.chat.id.toString() == process.env.GROUP_ID) {
        next();
    }
    else {
        console.log(`The user ${userName} has atempt to access the bot out of group.`);
        context.reply("NOT AUTHORIZED!");
    }
});


bot.command('/about', (context) => context.replyWithMarkdown(process.env.ABOUT_MESSAGE));

bot.launch();
