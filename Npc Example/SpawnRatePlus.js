const NPC = new NativeClass('Terraria', 'NPC'); 
const SetDefaults = Item["void SetDefaults(int Type, bool noMatCheck, ItemVariant variant)"]; 

NPC.SetDefaults.hook((orginal, self, type, spawnparams ) => {
orginal(self, type, spawnparams)

self.defaultSpawnRate *= 50;

});
