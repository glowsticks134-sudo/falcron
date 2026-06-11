// Member Depot Utility | Member Depot
// Author: Stichachu13
import { UserMessageCounterRepository } from '#dbRepo/userMessageCounter';

/**
 * Business-logic layer for per-user per-guild message counting.
 */
export class UserMessageCounterService {
        constructor() {
                this.repo = new UserMessageCounterRepository();
        }

        /**
         * Records a new message for the user in the guild.
         * @param {string} guildId
         * @param {string} userId
         * @returns {Promise<void>}
         */
        async increment(guildId, userId) {
                await this.repo.increment(guildId, userId);
        }

        async getAllByGuild(guildId) {
                return await this.repo.findAllByGuild(guildId);
        }

        async resetCount(guildId, userId) {
                await this.repo.resetCount(guildId, userId);
        }

        async addCount(guildId, userId, amount) {
                await this.repo.addCount(guildId, userId, amount);
        }

        async removeCount(guildId, userId, amount) {
                await this.repo.removeCount(guildId, userId, amount);
        }

        /**
         * Returns the current all-time and today's message counts for the user in the guild.
         * @param {string} guildId
         * @param {string} userId
         * @returns {Promise<{ total: number, todayCount: number }>}
         */
        async getCounts(guildId, userId) {
                return await this.repo.getCounts(guildId, userId);
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