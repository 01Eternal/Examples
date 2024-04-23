// Author: Yum (Razz#3533)
const Player = new NativeClass('Terraria', 'Player');

const UpdateEquips = Player['void UpdateEquips(int i)'];

UpdateEquips.hook((original, self, i) => {
    original(self, i);

//  30 potion inventory and item stack 30 and item.buffType = item.buffType by debuff id

    const inventory = self.inventory;
    for (i = 0; i < 58; i++) {
        let item = inventory[i];

        if (item.stack >= 30 && item.buffType != 0) {
            self.AddBuff(item.buffType, 2, false, false);
        }
    }
});

    const inventory = self.inventory;
    for (i = 0; i < 58; i++) {
        let item = inventory[i];

        if (item.melee == true && Item.damage>= 15) {
            self.AddBuff(item.buffType, 2, false, false);
        }
    }
});