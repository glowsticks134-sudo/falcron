// Member Depot Utility | Member Depot
// Author: Stichachu13
import { db } from '#dbManager';

/**
 * Adds a specific amount to a user's all-time message total in a guild.
 * @param {string} guildId
 * @param {string} userId
 * @param {number} amount
 * @returns {Promise<void>}
 */
export async function addUserMessageCount(guildId, userId, amount) {
        if (!guildId || !userId || !amount) return;
        await db.userMessageCounter?.addCount(guildId, userId, amount);
}

/**
 * Subtracts a specific amount from a user's all-time message total in a guild (floor at 0).
 * @param {string} guildId
 * @param {string} userId
 * @param {number} amount
 * @returns {Promise<void>}
 */
export async function removeUserMessageCount(guildId, userId, amount) {
        if (!guildId || !userId || !amount) return;
        await db.userMessageCounter?.removeCount(guildId, userId, amount);
}

/**
 * Returns the current message counts for a specific user in a guild.
 * @param {string} guildId
 * @param {string} userId
 * @returns {Promise<{ total: number, todayCount: number }>}
 */
export async function getUserMessageCounts(guildId, userId) {
        if (!guildId || !userId) return { total: 0, todayCount: 0 };
        return (await db.userMessageCounter?.getCounts(guildId, userId)) ?? { total: 0, todayCount: 0 };
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