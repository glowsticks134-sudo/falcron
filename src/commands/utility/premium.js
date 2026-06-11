// Member Depot Utility | Member Depot
// Author: Stichachu13
import { Command } from '#command';
import {
        MessageFlags,
        ButtonStyle,
        ButtonBuilder,
        ActionRowBuilder,
        ContainerBuilder,
        TextDisplayBuilder,
        SeparatorBuilder,
        SeparatorSpacingSize,
} from 'discord.js';

class PremiumCommand extends Command {
        constructor() {
                super({
                        name: 'premium',
                        description: 'Shows information about Member Depot Utility Premium',
                        usage: 'premium',
                        cooldown: 10,
                        enabledSlash: true,
                        slashData: {
                                name: 'premium',
                                description: 'Shows information about Member Depot Utility Premium',
                        },
                });
        }

        async execute({ ctx }) {
                const container = new ContainerBuilder();
                container.setAccentColor(0xffffff);

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent('**Member Depot Utility Premium**'),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addTextDisplayComponents(
                        new TextDisplayBuilder().setContent(
                                'Member Depot Utility Premium is now available to purchase, you can purchase Member Depot Utility Premium by joining the official support server',
                        ),
                );

                container.addSeparatorComponents(
                        new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small).setDivider(true),
                );

                container.addActionRowComponents(
                        new ActionRowBuilder().addComponents(
                                new ButtonBuilder()
                                        .setLabel('Get Premium')
                                        .setURL('https://discord.gg/Member Depot')
                                        .setStyle(ButtonStyle.Link),
                        ),
                );

                await ctx.reply({
                        components: [container],
                        flags: MessageFlags.IsComponentsV2,
                });
        }
}

export default new PremiumCommand();

/**
 * Project: Member Depot Utility
 * Author: Stichachu13
 * Organization: Member Depot
 * GitHub: https://github.com/Member-Depot
 * License: Custom
 *
 * © 2026 Member Depot. All rights reserved.
 */