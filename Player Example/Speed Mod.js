// Author: Luan or @Eternal and Swaggie :)

const Player = new NativeClass ('Terrarai','Player');
const UpdateEquips = Player['void UpdateEquips(int i)'];

Player.UpdateArmorSets.hook((original, self, i) => { // speedMod
		original(self, i);
		self.moveSpeed = 1.90;// Default player = +90, speed 
	});