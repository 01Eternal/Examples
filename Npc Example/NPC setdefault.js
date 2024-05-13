const NPC = new NativeClass('Terraria', 'NPC'); 
const NPCID = new NativeClass('Terraria.ID', 'NPCID'); 
// NPCs NativeClass

const SetDefaults = ["void SetDefaults(int Type, bool noMatCheck, ItemVariant variant)"]; 
// setdefault

NPC.SetDefaults.hook((orginal, self, type, spawnparams ) => {
orginal(self, type, spawnparams)

  // if npc type Is 1 give 2x scale and hitbox
 if (self.type == 1) {
   self.scale *= 2
   sefl.height *= 2
   self.width *= 2
 }
 // switch npc type
  switch (self.type) {
    case 1: 
    self.scale *= 2
    sefl.height *= 2
    self.width *= 2
      break; // loop
      
    case 1: // others types with Number ID
      break;
    case NPCID.Slime: // other type with NPCID
      break;
  }
});
