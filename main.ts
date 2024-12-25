let mySprite = sprites.create(assets.image`Packman`, SpriteKind.Player)
if (controller.A.isPressed()) {
    controller.moveSprite(mySprite, 75, 75)
} else {
    controller.moveSprite(mySprite, 25, 25)
}
