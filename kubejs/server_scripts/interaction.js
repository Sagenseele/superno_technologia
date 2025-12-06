BlockEvents.rightClicked(event => {
    if (event.getBlock().hasTag('minecraft:overworld_natural_logs')) {
        if (Item.of(event.item.id).hasTag('minecraft:axes') && event.hand == 'main_hand') {
            event.player.swing(event.hand, true)
            event.player.give(Item.of('immersiveengineering:dust_wood'))
            event.player.damageHeldItem('main_hand', 1)
        }
    }

})