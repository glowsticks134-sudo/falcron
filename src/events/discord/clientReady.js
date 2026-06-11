// Member Depot Utility | Member Depot
// Author: Stichachu13
import { logger } from '#utils';
import { ActivityType } from 'discord.js';
import { config } from '#config';

export const cacheGuildInvites = async (guild, client) => {
        try {
                const invites = await guild.invites.fetch();
                client.inviteCache.set(
                        guild.id,
                        new Map(invites.map((inv) => [inv.code, inv.uses ?? 0])),
                );
        } catch {
                // Missing Manage Guild permission — skip silently
        }
};

export default {
        name: 'clientReady',
        once: true,
        async execute({ client }) {
                logger.success('Bot', `Logged in as ${client.user.tag}`);

                client.user.setPresence({
                        activities: [{
                                name: config.presence.activity.name,
                                type: ActivityType[config.presence.activity.type],
                        }],
                        status: config.presence.status,
                });

                logger.info('Bot', `Serving ${client.guilds.cache.size} guilds`);

                client.inviteCache = new Map();
                await Promise.all(client.guilds.cache.map((guild) => cacheGuildInvites(guild, client)));
                logger.info('Bot', 'Invite cache populated');

                await client.commandHandler.syncSlashCommands(client.user.id);
        },
};

/**
 * Project: Member Depot Utility
 * Author: Stichachu13
 * Organization: Member Depot
 * GitHub: https://github.com/Member-Depot
 * License: Custom
 *
 * © 2026 Member Depot. All rights reserved.
 */