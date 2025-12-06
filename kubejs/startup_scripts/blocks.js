StartupEvents.registry('block', event => {
    event.create('blockium').tagBlock('c:mineable_spellbook').tagBlock('uc:tools/blockium').stoneSoundType().noValidSpawns(true).noDrops()
    event.create('wet_sand')
    event.create('wet_red_sand')
})