// Author: Yum (Razz#3533)

const Main = new NativeClass('Terraria', 'Main');
const Player = new NativeClass('Terraria', 'Player');

const UpdateBiomes = Player['void UpdateBiomes()'];

UpdateBiomes.hook((original, self) => {

	original(self);


	// -1 лес | Forest
	// 0 чистых вод | Beack
	// 2 искажение | distortion 
	// 3 джунгли | jungle 
	// 4 святые земли | Holy Lands
	// 5 снега | Snow 
	// 6 оазис | oasis
	// 8 пещеры | Caves 
	// 9 кровавая луна | Blood Moon
	// 10 кримзон | CRIMZONE
	// 12 пустыня ??? | desert ???

	switch(Main.SceneMetrics.ActiveFountainColor)
	{
		case 0:
			Main.player[Main.myPlayer].ZoneBeach = true;
			break;

		case 6:
			Main.player[Main.myPlayer].ZoneDesert = true;
			break;

		case 3:
			Main.player[Main.myPlayer].ZoneJungle = true;
			break;

		case 5:
			Main.player[Main.myPlayer].ZoneSnow = true;
			break;

		case 2:
			Main.player[Main.myPlayer].ZoneCorrupt = true;
			break;

		case 10:
			Main.player[Main.myPlayer].ZoneCrimson = true;
			break;

		case 4:
			if (Main.hardMode)
				Main.player[Main.myPlayer].ZoneHallow = true;
			break;

		case 9:
			if(!Main.bloodMoon)
				Main.bloodMoon = true;
			break;
	}

	if (Main.SceneMetrics.ActiveFountainColor != 9 && Main.bloodMoon) {
		Main.bloodMoon = false;
	}
});