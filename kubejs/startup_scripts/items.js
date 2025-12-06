StartupEvents.registry('item', event => {
    Platform.mods.kubejs.name = 'Superno Technologia'

    event.create('tanned_leather');
    event.create('spellbook_cover');
    event.create('spellbook_frame');
    event.create('magicka_cloth');
    event.create('dirt_pebble');
    event.create('cobblestone_pebble');
})