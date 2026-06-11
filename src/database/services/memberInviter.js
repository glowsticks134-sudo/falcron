// Member Depot Utility | Member Depot
// Author: Stichachu13
import { MemberInviterRepository } from '#dbRepo/memberInviter';

/**
 * Business-logic layer for tracking who invited whom to a guild.
 */
export class MemberInviterService {
        constructor() {
                this.repo = new MemberInviterRepository();
        }

        /**
         * Stores or updates the inviter record for a member.
         * @param {string} guildId
         * @param {string} userId  - the member who joined
         * @param {string|null} inviterId - the user whose invite was used
         * @param {number} joinedAt - timestamp in ms
         */
        async set(guildId, userId, inviterId, joinedAt) {
                await this.repo.set(guildId, userId, inviterId, joinedAt);
        }

        /**
         * Returns the inviter record for a member, or null if not tracked.
         * @param {string} guildId
         * @param {string} userId
         * @returns {Promise<{ inviterId: string|null, joinedAt: number }|null>}
         */
        async get(guildId, userId) {
                return await this.repo.findById(guildId, userId);
        }

        /**
         * Returns all members invited by a specific user in a guild.
         * @param {string} guildId
         * @param {string} inviterId
         * @returns {Promise<Array>}
         */
        async getAllByInviter(guildId, inviterId) {
                return await this.repo.findAllByInviter(guildId, inviterId);
        }

        /**
         * Removes the inviter record for a member (e.g. on leave).
         * @param {string} guildId
         * @param {string} userId
         */
        async delete(guildId, userId) {
                await this.repo.delete(guildId, userId);
        }
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