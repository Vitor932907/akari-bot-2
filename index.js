const express = require('express');
const app = express();
const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => console.log(`✅ Porta ${PORTA} aberta`));

require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [GatewayIntentBits.Guilds]
});

client.once('ready', () => {
  console.log(`✅ Bot online: ${client.user.tag}`);
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong! Estou funcionando.');
  }

  if (interaction.commandName === 'ajuda') {
    await interaction.reply(
      '**Comandos disponíveis:**\n' +
      '/ping — testa se o bot está online\n' +
      '/ajuda — mostra esta lista'
    );
  }
});

client.login(process.env.DISCORD_TOKEN);
