enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    // deletes the first tilemap from the list
    mazeFloors.shift()
    // easy way to track the floor num
    info.changeScoreBy(1)
    game.splash("Floor " + info.score() + " complete!")
    // displays new 1st tilemap in list
    tiles.setCurrentTilemap(mazeFloors[0])
    tiles.placeOnRandomTile(mySprite, sprites.dungeon.greenInnerSouthWest)
    // if the score = 3 then the game resets
    if (info.score() == 3) {
        game.gameOver(true)
    }
})
// creates a new walking anim set for facing left
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    anim = animation.createAnimation(ActionKind.Walking, 170)
    anim.addAnimationFrame(img`
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 f . f d f 
        . f 2 2 2 2 2 2 b b f f d f 
        . f b d d d d d d b b d b f 
        . f d d d d d b d d f f f . 
        . f d f f f d f f d f . . . 
        . f f . . f f . . f f . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e . b f b 
        f d d f d d f d d f . f d f 
        f b d d b b d d 2 b f f d f 
        . f 2 2 2 2 2 2 d b b d b f 
        . f d d d d d d d f f f f . 
        . . f d b d f d f . . . . . 
        . . . f f f f f f . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        e e e . . . . e e e . . . . 
        c d d c . . c d d c . . . . 
        c b d d f f d d b c . . . . 
        c 3 b d d b d b 3 c . . . . 
        f b 3 d d d d 3 b f . . . . 
        e d d d d d d d d e . . . . 
        e d f d d d d f d e b f b . 
        f d d f d d f d d f f d f . 
        f b d d b b d d 2 b f d f . 
        . f 2 2 2 2 2 2 d b d b f . 
        . f d d d d d d d f f f . . 
        . f d b d f f f d f . . . . 
        . . f f f f . . f f . . . . 
        `)
    animation.attachAnimation(mySprite, anim)
    animation.setAction(mySprite, ActionKind.Walking)
})
// walking anim set for facing right
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    anim = animation.createAnimation(ActionKind.Walking, 170)
    anim.addAnimationFrame(img`
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f . f 2 d d b b d d b f 
        f d f f b b 2 2 2 2 2 2 f . 
        f b d b b d d d d d d b f . 
        . f f f d d b d d d d d f . 
        . . . f d f f d f f f d f . 
        . . . f f . . f f . . f f . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        b f b . e d f d d d d f d e 
        f d f . f d d f d d f d d f 
        f d f f b 2 d d b b d d b f 
        f b d b b d 2 2 2 2 2 2 f . 
        . f f f f d d d d d d d f . 
        . . . . . f d f d b d f . . 
        . . . . . f f f f f f . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . 
        . . . . e e e . . . . e e e 
        . . . . c d d c . . c d d c 
        . . . . c b d d f f d d b c 
        . . . . c 3 b d b d d b 3 c 
        . . . . f b 3 d d d d 3 b f 
        . . . . e d d d d d d d d e 
        . b f b e d f d d d d f d e 
        . f d f f d d f d d f d d f 
        . f d f b 2 d d b b d d b f 
        . f b d b d 2 2 2 2 2 2 f . 
        . . f f f d d d d d d d f . 
        . . . . f d f f f d b d f . 
        . . . . f f . . f f f f . . 
        `)
    animation.attachAnimation(mySprite, anim)
    animation.setAction(mySprite, ActionKind.Walking)
})
// the player cant move until they press A
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
})
function choosefloorNum (num: number) {
    // for 1-3 it arranges the list in a different way, for any other number it asks you to put the right input in
    if (num == 1) {
        mazeFloors = [
        tilemap`level3`,
        tilemap`level1`,
        tilemap`level2`,
        tilemap`level5`
        ]
    } else if (num == 2) {
        mazeFloors = [
        tilemap`level1`,
        tilemap`level3`,
        tilemap`level2`,
        tilemap`level7`
        ]
    } else if (num == 3) {
        mazeFloors = [
        tilemap`level2`,
        tilemap`level1`,
        tilemap`level3`,
        tilemap`level6`
        ]
    } else {
        game.splash("please pick 1-3 :(")
        pause(100)
        choosefloorNum(game.askForNumber("Welcome! Pick a number 1-3 to begin!", 1))
    }
}
let anim: animation.Animation = null
let mySprite: Sprite = null
let mazeFloors: tiles.TileMapData[] = []
choosefloorNum(game.askForNumber("Welcome! Pick a number 1-3 to begin!", 1))
// this calls for the tilemap at the top of the list
tiles.setCurrentTilemap(mazeFloors[0])
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d d f f d d b c . . . . 
    c 3 b d d b d b 3 c . . . . 
    f b 3 d d d d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.greenInnerSouthWest)
scene.cameraFollowSprite(mySprite)
game.showLongText("find the stairs to the next level, reach the bottom floor to win!", DialogLayout.Bottom)
