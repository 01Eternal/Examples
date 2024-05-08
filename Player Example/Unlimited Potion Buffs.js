// author 01Eternal
const Player = new NativeClass('Terraria', 'Player');
const ItemID = new NativeClass('Terraria.ID', 'BuffId');

Player.WingMovement.hook((original, self) => {
original(self)

}

