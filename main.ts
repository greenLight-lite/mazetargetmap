enum ActionKind {
    Walking,
    Idle,
    Jumping
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
	
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(mySprite)
    walkingAnim()
})
function choosefloorNum (num: number) {
    mazeFloors = [tilemap`level2`, tilemap`level3`, tilemap`level1`]
    floorNumbers = [1, 2, 3]
    for (let mazeFloors = 0; mazeFloors <= 4; mazeFloors++) {
        realTilemap = 0
    }
    if (num == 1) {
        tiles.setCurrentTilemap(mazeFloors[0])
    } else if (num == 2) {
        tiles.setCurrentTilemap(mazeFloors[1])
    } else {
        tiles.setCurrentTilemap(mazeFloors[1])
    }
}
function walkingAnim () {
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
}
let anim: animation.Animation = null
let realTilemap = 0
let floorNumbers: number[] = []
let mazeFloors: tiles.TileMapData[] = []
let mySprite: Sprite = null
choosefloorNum(game.askForNumber("pick a number 1-3", 1))
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
