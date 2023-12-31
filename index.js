const TelegramBot = require('node-telegram-bot-api');

// Inisialisasi bot dengan token yang diperoleh dari BotFather
const token = 'YOUR_API_TOKEN_TELEGRAM';
const bot = new TelegramBot(token, {polling: true});

// Fungsi untuk menangani pesan yang diterima
bot.on('message', (msg) => {
  // Pastikan hanya meneruskan pesan dari saluran pribadi
  if (msg.chat.type !== 'private') {
    return;
  }
 
  // Tentukan saluran tujuan (gunakan ID atau username)
  const destinationChannel = 'YOUR_ID_OR_USERNAME_CHANNELS';

  // Meneruskan pesan berdasarkan jenis konten
  if (msg.text) {
    // Meneruskan pesan teks
    const text = msg.text;
    bot.sendMessage(destinationChannel, text);
  } else if (msg.photo) {
    // Meneruskan pesan foto
    const photoId = msg.photo[msg.photo.length - 1].file_id;
    bot.sendPhoto(destinationChannel, photoId);
  } else if (msg.video) {
    // Meneruskan pesan video
    const videoId = msg.video.file_id;
    bot.sendVideo(destinationChannel, videoId);
  }
});

// Command '/start'
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  const opts = {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'GitHub Repository',
          url: 'https://github.com/naix0x/Bot-Forwarding'
        }]
      ]
    }
  };
  bot.sendMessage(chatId, 'Hi, this is a bot for forwarding private channels (other people) to our own private channels.\n\nWhich allows sending many messages at once, this bot works if you forward the message to this bot and this bot will immediately repost it again without saying "Forward"\n\nThis bot only needs to be set as admin on our personal channels\n\n/info = Information to usinh this bot', opts);
});
// Command '/info'
bot.onText(/\/info/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'This bot will work if you send a forward message and then send it to this bot, this bot will immediately repost it to your personal channel, without any forward writing.');

const opts = {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Email',
          url: 'ask@matic.eu.org'
        }]
      ]
    }
  };
  bot.sendMessage(chatId, 'any get problem? feel free get in touch for me', opts);
});
