const { Client, IntentsBitField, EmbedBuilder, ActivityType, REST, Routes, ApplicationCommandOptionType } = require('discord.js');
require('dotenv').config();
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent
    ]
})

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity({
        name: "dragons die",
        type: ActivityType.Watching 
    });
    client.user.setStatus("idle");
})

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;
  
    if (interaction.commandName === 'dragon') {
        const DragonType = interaction.options.get('dragontype').value;
        const MagicFind = interaction.options.get('magic-find').value;
        const PetLuck = interaction.options.get('pet-luck').value;
        const EyesPlaced = interaction.options.get('eyes-placed').value;
        const BaseQuality = interaction.options.get('damage-position').value;

        //DamageDone = 1
        //FirstPlaceDamageDone = 8e6

        //TotalPlayerQuality = BaseQuality + (100*(DamageDone/FirstPlaceDamageDone)) + (100*EyesPlaced)
        TotalPlayerQuality = BaseQuality + (100*EyesPlaced)

        if(TotalPlayerQuality < 450){
            return interaction.reply("You are not able to drop a pet")
        } 

        DropMultiplier = 1 + (MagicFind/100)
        PetDropMultiplier = 1 + ((MagicFind+PetLuck)/100)

        DragonHornChance = 30*DropMultiplier
        DragonClawChance = 2*EyesPlaced*DropMultiplier
        EpicDragChance = 0.05*EyesPlaced*PetDropMultiplier
        LegDragChance = 0.01*EyesPlaced*PetDropMultiplier
        AotdChance = 3*EyesPlaced*DropMultiplier
        HelmetChance = 30*DropMultiplier
        ChestplateChance = 30*DropMultiplier
        LeggingsChance = 30*DropMultiplier
        BootsChance = 30*DropMultiplier
        DragonScaleChance = 30*DropMultiplier
        DragonScrollChance = 35*DropMultiplier

        if (DragonType === 'superior'){
            const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonhorn:1120410919047008346> Dragon Horn: ${Math.round(DragonHornChance * 100) / 100}%
<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:superiorchestplate:1120410905507803278> Superior Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:superiorleggings:1120410903700045875> Superior Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:superiorhelmet:1120410908666110022> Superior Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:superiorboots:1120410900382351450> Superior Dragon Boots: ${Math.round(BootsChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Superior Dragon", iconURL: 'https://wiki.hypixel.net/images/5/56/SkyBlock_items_superior_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


        } else if (DragonType === 'strong'){
            const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:strongchestplate:1120426060245372978> Strong Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:strongleggings:1120426056822833192> Strong Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:stronghelmet:1120426062384464073> Strong Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:strongboots:1120426053131829399> Strong Dragon Boots: ${Math.round(BootsChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Strong Dragon", iconURL: 'https://wiki.hypixel.net/images/f/fc/SkyBlock_items_strong_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


        } else if (DragonType === 'unstable'){
            const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:unstablechestplate:1120426048304205996> Unstable Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:unstableleggings:1120426046630666410> Unstable Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:unstablehelmet:1120426051219243158> Unstable Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:unstableboots:1120426043522682890> Unstable Dragon Boots: ${Math.round(BootsChance * 100) / 100}%
<:nestscroll:1120410896058036306> Dragon Scroll: ${Math.round(DragonScrollChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Unstable Dragon", iconURL: 'https://wiki.hypixel.net/images/6/68/SkyBlock_items_unstable_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


    } else if (DragonType === 'wise'){
        const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:wisechestplate:1120425627875561513> Wise Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:wiseleggings:1120425626927628358> Wise Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:wisehelmet:1120425630706716682> Wise Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:wiseboots:1120425625585455205> Wise Dragon Boots: ${Math.round(BootsChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Wise Dragon", iconURL: 'https://wiki.hypixel.net/images/9/9c/SkyBlock_items_wise_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


    } else if (DragonType === 'young'){
        const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:youngchestplate:1120425636461297825> Young Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:youngleggings:1120425633630126221> Young Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:younghelmet:1120425999021125712> Young Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:youngboots:1120425632258605156> Young Dragon Boots: ${Math.round(BootsChance * 100) / 100}%
<:dragonscale:1120410898960494672> Dragon Scale: ${Math.round(DragonScaleChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Young Dragon", iconURL: 'https://wiki.hypixel.net/images/0/0d/SkyBlock_items_young_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


    } else if (DragonType === 'old'){
        const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:oldchestplate:1120425619604377700> Old Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:oldleggings:1120425617347858595> Old Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:oldhelmet:1120425622536200264> Old Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:oldboots:1120425614336344225> Old Dragon Boots: ${Math.round(BootsChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Old Dragon", iconURL: 'https://wiki.hypixel.net/images/6/6a/SkyBlock_items_old_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})


    } else if (DragonType === 'protector'){
        const embed = new EmbedBuilder()
        .setTitle('Dragon Calculator')
        .setColor("#8A2BE2")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>\nEyes Placed: ${EyesPlaced} <:summoningeye:1120408901104451777>`
        })
.setDescription(`<:dragonclaw:1120410914273902682> Dragon Claw: ${Math.round(DragonClawChance * 100) / 100}%
<:dragonpet:1120410917109256253> Epic Dragon: ${Math.round(EpicDragChance * 100) / 100}%
<:dragonpet:1120410917109256253> Legendary Dragon: ${Math.round(LegDragChance * 100) / 100}%
<:aotd:1120410912633913404> Aspect of the Dragons: ${Math.round(AotdChance * 100) / 100}%
<:protectorchestplate:1120425609017966762> Protector Dragon Chestplate: ${Math.round(ChestplateChance * 100) / 100}%
<:protectorleggings:1120425606115504300> Protector Dragon Leggings: ${Math.round(LeggingsChance * 100) / 100}%
<:protectorhelmet:1120425612499226756> Protector Dragon Helmet: ${Math.round(HelmetChance * 100) / 100}%
<:protectorboots:1120425604416807033> Dragon Boots: ${Math.round(BootsChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Ender_Dragon')
        .setThumbnail("https://wiki.hypixel.net/images/6/60/Minecraft_entities_ender_dragon.gif")
        .setAuthor({name: "Protector Dragon", iconURL: 'https://wiki.hypixel.net/images/b/b0/SkyBlock_items_protector_dragon_helmet.png'})
        interaction.reply({embeds: [embed]})
    }
    }
    if (interaction.commandName === 'golem') {
        const MagicFind = interaction.options.get('magic-find').value;
        const PetLuck = interaction.options.get('pet-luck').value;

        DropMultiplier = 1 + (MagicFind/100)
        PetDropMultiplier = 1 + ((MagicFind+PetLuck)/100)

        tierBoostCoreChance = 0.2*DropMultiplier
        legGolemChance = 0.6*PetDropMultiplier
        epicGolemChance = 2*PetDropMultiplier

        const embed = new EmbedBuilder()
        .setTitle('Endstone Protector Calculator')
        .setColor("#FFA500")
        .addFields({
            name: 'Your Stats',
            value: `Magic Find: ${MagicFind}% <:magicfind:1120408483842510909>\nPet Luck: ${PetLuck} <:petluck:1120408481015533638>`
        })
.setDescription(`<:tierBoostCore:1125136113791680623> Tier Boost Core: ${Math.round(tierBoostCoreChance * 100) / 100}%
<:golemPet:1125136117080002560> Legendary Golem Pet: ${Math.round(legGolemChance * 100) / 100}%
<:golemPet:1125136117080002560> Epic Golem Pet: ${Math.round(epicGolemChance * 100) / 100}%`)
        .setURL('https://wiki.hypixel.net/Endstone_Protector')
        .setThumbnail("https://wiki.hypixel.net/images/e/ee/Minecraft_entities_iron_golem.png")
        .setAuthor({name: "Endstone Protector", iconURL: 'https://wiki.hypixel.net/images/a/ad/SkyBlock_pets_golem.png'})
        interaction.reply({embeds: [embed]})
    }
})

client.login(process.env.TOKEN)