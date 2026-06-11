// Member Depot Utility | Member Depot
// Author: Stichachu13
export default {
        name: 'inviteDelete',
        async execute({ eventArgs, client }) {
                const [invite] = eventArgs;
                if (!invite.guild) return;

                const guildCache = client.inviteCache?.get(invite.guild.id);
                if (guildCache) guildCache.delete(invite.code);
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