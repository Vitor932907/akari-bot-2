const { REST, Routes } = require('discord.js');
require('dotenv').config();

const comandos = [
  {
    name: 'ping',
    description: 'Responde com Pong!',
  },
  {
    name: 'help',
    description: 'Mostra os comandos disponíveis',
  },
];

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
  try {
    console.log('📡 Registrando comandos...');
    
    await rest.put(
      Routes.applicationGuildCommands(
        process.env.CLIENT_ID,
        process.env.GUILD_ID
      ),
      { body: comandos }
    );

    console.log('✅ Comandos registrados com sucesso!');
  } catch (erro) {
    console.error('❌ Erro:', erro);
  }
})();
