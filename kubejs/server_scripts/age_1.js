ServerEvents.recipes(event => {
    const ftbstuff = event.recipes.ftbstuff;

    ftbstuff.crook([
        { "item": "minecraft:string", "count": 1, "chance": 0.125 }
    ], { "tag": "minecraft:leaves" }, 1, false);

    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "minecraft:red_sand"
            }
        ],
        "result": {
            "count": 1,
            "id": "kubejs:wet_red_sand"
        }
    })

    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "minecraft:sand"
            }
        ],
        "result": {
            "count": 1,
            "id": "kubejs:wet_sand"
        }
    })

    event.shaped(
        Item.of('kubejs:tanned_leather', 1),
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'minecraft:leather',
            B: 'modern_industrialization:salt_tiny_dust'
        }
    )

    event.shaped(
        Item.of('kubejs:tanned_leather', 1),
        [
            ' B ',
            'BAB',
            ' B '
        ],
        {
            A: 'immersiveengineering:ersatz_leather',
            B: 'modern_industrialization:salt_tiny_dust'
        }
    )

    event.shaped(
        Item.of('gateways:gate_pearl[gateways:gateway="gateways:council_of_cows"]'),
        [
            'CBC',
            'BAB',
            'CBC'
        ],
        {
            A: '#c:storage_blocks/wheat',
            B: 'minecraft:amethyst_shard',
            C: '#c:nuggets/gold'
        }
    )

    ftbstuff.hammer(["1x ftbstuff:dust"], "#c:sands")
    ftbstuff.hammer(["1x minecraft:gravel"], "#c:cobblestones/normal")
    ftbstuff.hammer(["1x minecraft:red_sand"], "#c:gravels")
    ftbstuff.hammer(["1x ftbstuff:compressed_red_sand"], "ftbstuff:compressed_gravel")
    ftbstuff.hammer(["1x ftbstuff:compressed_red_sand_2"], "ftbstuff:compressed_gravel_2")
    ftbstuff.hammer(["1x ftbstuff:compressed_red_sand_3"], "ftbstuff:compressed_gravel_3")
    ftbstuff.hammer(["1x ftbstuff:compressed_gravel"], "ftbstuff:compressed_cobblestone")
    ftbstuff.hammer(["1x ftbstuff:compressed_gravel_2"], "ftbstuff:compressed_cobblestone_2")
    ftbstuff.hammer(["1x ftbstuff:compressed_gravel_3"], "ftbstuff:compressed_cobblestone_3")
    ftbstuff.hammer(["1x ftbstuff:compressed_dust"], "ftbstuff:compressed_sand")
    ftbstuff.hammer(["1x ftbstuff:compressed_dust_2"], "ftbstuff:compressed_sand_2")
    ftbstuff.hammer(["1x ftbstuff:compressed_dust_3"], "ftbstuff:compressed_sand_3")

    event.custom({
        "type": "ftbstuff:sluice",
        "fluid": {
            "amount": 250,
            "fluid": "minecraft:water"
        },
        "input": {
            "item": "minecraft:red_sand"
        },
        "mesh_types": [
            "cloth"
        ],
        "results": [
            {
                "chance": 0.25,
                "item": {
                    "count": 1,
                    "id": "minecraft:gold_nugget"
                }
            },
            {
                "chance": 0.12,
                "item": {
                    "count": 1,
                    "id": "minecraft:amethyst_shard"
                }
            }
        ]
    })

    event.custom({
        "type": "ftbstuff:sluice",
        "fluid": {
            "amount": 250,
            "fluid": "minecraft:water"
        },
        "input": {
            "item": "minecraft:sand"
        },
        "mesh_types": [
            "cloth"
        ],
        "results": [
            {
                "chance": 0.125,
                "item": {
                    "count": 1,
                    "id": "minecraft:gold_nugget"
                }
            },
            {
                "chance": 0.06,
                "item": {
                    "count": 1,
                    "id": "minecraft:amethyst_shard"
                }
            }
        ]
    })

    event.custom({
        "type": "ftbstuff:sluice",
        "fluid": {
            "amount": 250,
            "fluid": "minecraft:water"
        },
        "input": {
            "item": "ftbstuff:dust"
        },
        "mesh_types": [
            "cloth"
        ],
        "results": [
            {
                "chance": 0.25,
                "item": {
                    "count": 1,
                    "id": "modern_industrialization:salt_tiny_dust"
                }
            }
        ]
    })

    event.custom({
        "type": "ftbstuff:sluice",
        "fluid": {
            "amount": 10,
            "fluid": "minecraft:water"
        },
        "input": {
            "tag": "minecraft:dirt"
        },
        "mesh_types": [
            "cloth"
        ],
        "results": [
            {
                "chance": 0.06,
                "item": {
                    "count": 1,
                    "id": "minecraft:wheat_seeds"
                }
            },
            {
                "chance": 0.04,
                "item": {
                    "count": 1,
                    "id": "immersiveengineering:seed"
                }
            },
            {
                "chance": 0.025,
                "item": {
                    "count": 1,
                    "id": "minecraft:pumpkin_seeds"
                }
            },
            {
                "chance": 0.025,
                "item": {
                    "count": 1,
                    "id": "minecraft:melon_seeds"
                }
            },
            {
                "chance": 0.025,
                "item": {
                    "count": 1,
                    "id": "minecraft:beetroot_seeds"
                }
            },
            {
                "chance": 0.025,
                "item": {
                    "count": 1,
                    "id": "minecraft:sugar_cane"
                }
            },
            {
                "chance": 0.01,
                "item": {
                    "count": 1,
                    "id": "ars_nouveau:sourceberry_bush"
                }
            }
        ]
    })

    event.custom({
        "type": "ftbstuff:sluice",
        "fluid": {
            "amount": 10,
            "fluid": "minecraft:water"
        },
        "input": {
            "tag": "minecraft:leaves"
        },
        "mesh_types": [
            "cloth"
        ],
        "results": [
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:wheat_seeds"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "immersiveengineering:seed"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:oak_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:spruce_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:birch_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:jungle_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:acacia_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:dark_oak_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "minecraft:cherry_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "ars_nouveau:blue_archwood_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "ars_nouveau:red_archwood_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "ars_nouveau:purple_archwood_sapling"
                }
            },
            {
                "chance": 0.05,
                "item": {
                    "count": 1,
                    "id": "ars_nouveau:green_archwood_sapling"
                }
            }
        ]
    })

    event.shaped(
        '1x minecraft:cobblestone',
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:cobblestone_pebble'
        }
    )
    event.shaped(
        '1x minecraft:dirt',
        [
            'AA',
            'AA'
        ],
        {
            A: 'kubejs:dirt_pebble'
        }
    )

    event.shaped(
        'kubejs:spellbook_cover',
        [
            'AAB',
            'AAB',
            'AAB'
        ],
        {
            A: 'kubejs:tanned_leather',
            B: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        'kubejs:magicka_cloth',
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: 'kubejs:tanned_leather',
            B: 'ars_nouveau:magebloom_fiber'
        }
    )

    event.shaped(
        'kubejs:spellbook_frame',
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            A: 'minecraft:gold_nugget',
            B: 'ars_nouveau:source_gem'
        }
    )

    event.replaceInput({ "output": "ftbstuff:stone_crook" }, "ftbstuff:stone_rod", "#c:rods/wooden")
    event.remove({ output: 'ars_nouveau:novice_spell_book' })
    event.shaped(
        'ars_nouveau:novice_spell_book',
        [
            'BAA',
            'CAA',
            'BAA'
        ],
        {
            A: 'ars_nouveau:blank_parchment',
            B: 'kubejs:spellbook_frame',
            C: 'kubejs:spellbook_cover'
        }
    )
    event.replaceInput({ output: /ars_nouveau:.*_sourcelink/ }, "ars_nouveau:source_gem", "minecraft:amethyst_shard")
    event.shapeless(Item.of('ceramicbucket:ceramic_bucket[bucketlib:fluid={amount:1000,id:"sauce:source_fluid"}]'), ['8x ars_nouveau:sourceberry_bush', '1x ceramicbucket:ceramic_bucket'])
    event.shapeless(Item.of('sauce:source_fluid_bucket'), ['8x ars_nouveau:sourceberry_bush', '1x minecraft:bucket'])
})