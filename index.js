require("dotenv").config();

const TelegramBot = require('node-telegram-bot-api');

const token = process.env.TELEGRAMTOKEN;
const bot = new TelegramBot(token);



const webAppUrl ='https://foods-two.vercel.app/'


bot.on('message',  async(msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  if (text === text) {
	await bot.sendMessage(chatId, "Yo! I'm Tommy-bot and I'll help you quickly create an order 😁❤️  If you like good food, that's fine. Press the button below to choose food 👇", {
		reply_markup: {
			inline_keyboard: [
				[{text: "Do order", web_app :{url: webAppUrl}}]
				]
			}
		})
  }
  
});

