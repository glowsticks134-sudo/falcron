// Member Depot Utility | Member Depot
// Author: Stichachu13
import { db } from '#dbManager';

/**
 * Adds a specific amount to a user's all-time invite total in a guild.
 * @param {string} guildId
 * @param {string} userId
 * @param {number} amount
 * @returns {Promise<void>}
 */
export async function addUserInviteCount(guildId, userId, amount) {
        if (!guildId || !userId || !amount) return;
        await db.userInviteCounter?.addCount(guildId, userId, amount);
}

/**
 * Subtracts a specific amount from a user's all-time invite total in a guild (floor at 0).
 * @param {string} guildId
 * @param {string} userId
 * @param {number} amount
 * @returns {Promise<void>}
 */
export async function removeUserInviteCount(guildId, userId, amount) {
        if (!guildId || !userId || !amount) return;
        await db.userInviteCounter?.removeCount(guildId, userId, amount);
}

/**
 * Returns the current invite breakdown for a specific user in a guild.
 * @param {string} guildId
 * @param {string} userId
 * @returns {Promise<{ total: number, joins: number, left: number, fake: number, rejoins: number }>}
 */
export async function getUserInviteCount(guildId, userId) {
        if (!guildId || !userId) return { total: 0, joins: 0, left: 0, fake: 0, rejoins: 0 };
        return (await db.userInviteCounter?.getCount(guildId, userId)) ?? { total: 0, joins: 0, left: 0, fake: 0, rejoins: 0 };
}

/**
 * Project: Member Depot Utility
 * Author: Stichachu13
 * Organization: Member Depot
 * GitHub: https://github.com/Member-Depot
 * License: Custom
 *
 * © 2026 Member Depot. All rights reserved.
 */