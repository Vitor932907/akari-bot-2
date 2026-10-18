require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const cliente = new Client({
  intents: [GatewayIntentBits.Guilds]
});

cliente.once('ready', () => {
  console.log(`✅ Bot online: ${cliente.user.tag}`);
});

cliente.on('interactionCreate', async interacao => {
  if (!interacao.isChatInputCommand()) return;

  if (interacao.commandName === 'ping') {
    await interacao.reply('Pong! Estou funcionando.');
  }

  if (interacao.commandName === 'help') {
    await interacao.reply(
      '**Comandos disponíveis:**\n' +
      '/ping — testa se o bot está online\n' +
      '/help — mostra esta lista'
    );
  }
});

cliente.login(process.env.DISCORD_TOKEN);
