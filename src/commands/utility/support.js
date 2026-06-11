// Member Depot Utility | Member Depot
// Author: Stichachu13
import { Command } from '#command';
import {
        MessageFlags,
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
} from 'discord.js';
import { config } from '#config';

class SupportCommand extends Command {
        constructor() {
                super({
                        name: ['support'],
                        description: 'Displays the invite link of my support server',
                        aliases: ['help-server', 'discord', 'server'],
                        cooldown: 120,
                        enabledSlash: true,
                        slashData: {
                                name: 'support',
                                description: 'Displays the invite link of my support server',
                        },
                });
        }

        async execute({ ctx }) {
                const now = new Date().toLocaleTimeString('en-IN', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                        timeZone: 'Asia/Kolkata',
                });

                const container = new ContainerBuilder();
                container.setAccentColor(0xffffff);

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(`**Support Server**`),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                `Join our support server for help
**[Support Server](${config.links.supportServer})**`,
                        ),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                `-# Requested by ${ctx.author.username} | Today at ${now}`,
                        ),
                );

                await ctx.reply({
                        components: [container],
                        flags: MessageFlags.IsComponentsV2,
                });
        }
}

export default new SupportCommand();

/**
 * Project: Member Depot Utility
 * Author: Stichachu13
 * Organization: Member Depot
 * GitHub: https://github.com/Member-Depot
 * License: Custom
 *
 * © 2026 Member Depot. All rights reserved.
 */