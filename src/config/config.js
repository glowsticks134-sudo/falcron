// Member Depot Utility | Member Depot
// Author: Stichachu13
export const config = {
        token: process.env.DISCORD_TOKEN || '',
        clientId: process.env.DISCORD_CLIENT_ID || '',
        prefix: '-',
        ownerIds: process.env.OWNER_IDS ? process.env.OWNER_IDS.split(',') : [],
        ownerOnly: false,

        links: {
                supportServer: 'https://discord.gg/Ez4gCJQDxB',
                invite: '',
        },

        cache: {
                maxSize: process.env.NODE_ENV === 'production' ? 100000 : 50000,
                flushOnStart: false,
                flushOnShutdown: false,
        },

        database: {
                uri: process.env.MONGODB_URI || '',
        },

        presence: {
                status: 'idle',
                activity: {
                        name: '-help || Member Depot',
                        type: 'Custom',
                },
        },

        watermark: '',
        version: '1.0.0',
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
