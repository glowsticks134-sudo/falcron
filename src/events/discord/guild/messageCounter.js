// Member Depot Utility | Member Depot
// Author: Stichachu13
import { db } from '#dbManager';

export default {
        name: 'messageCreate',
        async execute({ eventArgs }) {
                if (!eventArgs?.[0]) return;

                const [message] = eventArgs;

                if (message.author?.bot || !message.guild) return;

                try {
                        const isBlacklisted = await db.guild?.isMessageChannelBlacklisted(
                                message.guild.id,
                                message.channel.id,
                        );
                        if (isBlacklisted) return;

                        await db.userMessageCounter?.increment(message.guild.id, message.author.id);
                } catch {
                }
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