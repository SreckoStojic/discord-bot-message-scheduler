import { CacheType, Interaction } from 'discord.js';
import { replyMessage } from './actions/basic.actions';
import { Command } from './static';
import { isAction } from '../common/validation';

export const interactionCreate = async (
  interaction: Interaction<CacheType>
) => {
  if (!interaction.isChatInputCommand()) return;

  // HELLO
  if (isAction(interaction, Command.HELLO)) {
    await replyMessage(interaction, `Greetings ${interaction.member}!`);
  }
};
