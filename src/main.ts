// Discord
import { Routes, TextChannel, User } from 'discord.js';
import cron from 'node-cron';

// Config
import { client, config, rest } from './config';

// Commands
import { COMMANDS, interactionCreate, replyMessage } from './commands';

// Define a scheduled job
cron.schedule('0 22 * * *', async () => {
  const channel = client.channels.cache.get(config.channelId) as TextChannel;
  const userDzili = (await client.users.fetch('278980578416787456')) as User;
  await channel.send(`VIDI <@${userDzili.id}> ZVAO SAM TE NE ZVAO SAM VAS!`);
});

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');
    await rest.put(Routes.applicationCommands(config.applicationId), {
      body: COMMANDS,
    });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();

client.on('ready', async () => {
  console.info(`
                ################################################
                🛡️  Logged in as ${client.user?.tag}! 🛡️
                ################################################
              `);
});
client.on('interactionCreate', interactionCreate);

client.login(config.token);
