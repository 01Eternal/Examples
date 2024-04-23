// Author: Yum (Razz#3533)

let Item = new NativeClass('Terraria', 'Item');
let ItemID = new NativeClass('Terraria.ID', 'ItemID');
let SetDefaults = Item["void SetDefaults(int Type, bool noMatCheck)"];
 
SetDefaults.hook((original, self, type, noMatCheck) => {
 
  original(self, type, noMatCheck);
 
  switch(type) {
    case ItemID.SlushBlock:
    case ItemID.SiltBlock:
    case ItemID.DesertFossil:
      self.useTime = 2;
      break;
  }
});