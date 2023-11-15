[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/naix0x/Bot-Forwarding/blob/main/LICENSE)
![GitHub repo size](https://img.shields.io/github/repo-size/naix0x/Bot-Forwarding)
![GitHub contributors](https://img.shields.io/github/contributors/naix0x/Bot-Forwarding)
![GitHub last commit](https://img.shields.io/github/last-commit/naix0x/Bot-Forwarding)
![GitHub forks](https://img.shields.io/github/forks/naix0x/Bot-Forwarding)
![GitHub issues](https://img.shields.io/github/issues-raw/naix0x/Bot-Forwarding)
![GitHub pull requests](https://img.shields.io/github/issues-pr/naix0x/Bot-Forwarding)
![GitHub stars](https://img.shields.io/github/stars/naix0x/Bot-Forwarding)

# BOT Tele Forwarding
Welcome to the 💻 Bot for forwarding private channels (other people) to our own private channels. which allows sending many messages at once, this bot works if you forward the message to this bot and this bot will immediately repost it again without saying "Forward" This bot only needs to be set as admin on our personal channels..

And this bot is very suitable for those of you who have channels and want to upload files, videos, photos or text without having to rewrite them without having a forwarding tag on the channel

## 🚀 Technologies

This Telegram bot is built using the following technologies:

- 🚀 Nodejs - Language 
- 🤖 Node Telegram Bot Api - Framework
- 📨 Forwarding - Reposting
- 🗿 Before Forwarding & After Forwarding
<p align="center">
  <img src="https://github.com/naix0x/Bot-Forwarding/blob/main/Screenshot_20231113-131455_Telegram.jpg" />
</p>
<p align="center">
  <img src="https://github.com/naix0x/Bot-Forwarding/blob/main/Screenshot_20231113-131507_Telegram.jpg" />
</p>

## 🛠️ Installation and Usage

To use this bot, follow these steps:

1. Clone the repository
```javascript
git clone https://github.com/naix0x/Bot-Forwarding.git forwarding
```

``` javascript
cd forwarding
```
2. Install the required dependencies using 

To run this bot, we need several requirements to run the script

```javascript
apt-get update -y && apt-get upgrade -y
```

```javascript
apt install git
```

```javascript
apt install nodejs
```

```javascript
apt install npm
```

```javascript
npm install pm2
```

```javascript
npm install node-telegram-bot-api
```

3. Create a new bot on Telegram using [BotFather](https://core.telegram.org/bots#3-how-do-i-create-a-bot)
4. Copy the bot token, url rss, username channels and add it to `main.js`
```javascript
nano index.js
```
5. Add youre bot to channels and set admin
6. Start the bot using `node main.py`
```javascript
node index.js
```
7. For run nodejs in background
```javascript
npx pm2 start index.js
```

This bot will fetch updates from the RSS feed every 1 minute. If there are new updates that have not been sent, the bot will send the updates to the specified Telegram channel.

## 🤝 Contributing

If you find a bug or want to suggest a new feature, please open an issue or submit a pull request. Contributions are welcome and appreciated!

## 📝 License

This project is licensed under the [MIT License](https://github.com/naix0x/Bot-Forwarding/blob/main/LICENSE).

## 👥 Forks and Stars

If you find this project useful, please give it a star ⭐ and consider forking it 🍴 to support its development and help it reach a wider audience.


## 👤 Development

[![Mustofa Bovalone](https://github.com/naix0x.png?size=100)](https://github.com/naix0x) |
----|
[Mustofa Bovalone](https://t.me/maticstable) |
Author, Base, Bug Fixes  |
