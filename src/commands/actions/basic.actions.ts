import { CacheType, CommandInteraction, InteractionResponse } from 'discord.js';

export const replyMessage = async (
  interaction: CommandInteraction<CacheType>,
  message: string
): Promise<InteractionResponse> => {
  return interaction.reply(message);
};
