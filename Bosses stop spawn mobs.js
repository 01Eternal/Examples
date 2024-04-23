// Author: Yum (Razz#3533)

const Main = new NativeClass('Terraria', 'Main'); // Получаем экземпляр класса Main
const Player = new NativeClass('Terraria', 'Player');
const NPC = new NativeClass('Terraria', 'NPC');

const isNearNPC = Player['bool isNearNPC(int type, float range)']; // Получает экземпляр функции isNearNPC в классе Player
const SpawnNPC = NPC['void SpawnNPC()'];

let AnyBossNPCS = () => {
  let npc = Main.npc;

  for (let i = 0; i < 200; i++) { // Проверяем всех НПС в мире
    if (npc[i].active && npc[i].type != 395 && (npc[i].boss || npc[i].type == 13 || npc[i].type == 15)) {
      return true;
    }
  }
  return false;
}

SpawnNPC.hook(original => { // Хукаем нашу функцию

  original(); // Вызываем оригинальную функцию

  let player = Main.player;

  for (let i = 0; i < 255; i++) { // Проверяем всех игроков в мире
    if (player[i].active && !player[i].dead) {
      if (!player[i].isNearNPC(398, NPC.MoonLordFightingDistance)) {
        if (AnyBossNPCS()) {
          NPC.spawnRate *= 10; // Увеличиваем время которе нужно для возрождения нового врага
          NPC.maxSpawns *= 0.001; // Уменьшаем количество врагов которые могут появится вокруг игрока
        }
      }
    }
  }
});