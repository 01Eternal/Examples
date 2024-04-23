// Author: Yum (Razz#3533)
// Fixed: Luan (@Eternal)

const Player = new NativeClass('Terraria', 'Player');
const Item = new NativeClass('Terraria', 'Item');

const NewItem = Item['int NewItem(int X, int Y, int Width, int Height, int Type, int Stack, bool noBroadcast, int pfix, bool noGrabDelay, bool reverseLookup)'];

function RandomQuantity(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function DropChance(chance) {
    if (Number.isInteger(chance)) {
        return Math.round(Math.random() * 100) < chance;
    } else {
        return (Math.random() * 100).toFixed(1) < chance;
    }
}

Player.OpenFishingCrate.hook((original, self, crateItemID) => {
	original(self, crateItemID);
	if (crateItemID === 3206) {
		if (DropChance(100)) {
       NewItem(self.position.X, self.position.Y, self.width, self.height, 3621, RandomQuantity(5, 20), false, 0, false, false);

		}
	}
});