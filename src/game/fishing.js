// src/game/fishing.js
import fishList from '../data/fish.json' assert { type: 'json' };
import rods from '../data/rods.json' assert { type: 'json' };
import baitTypes from '../data/bait.json' assert { type: 'json' };
import { player } from './player.js';

export function attemptCatch() {
  const rod = rods.find(r => r.tier === player.rodTier);
  const bait = baitTypes.find(b => b.type === player.bait);

  const zoneFish = fishList.filter(f => f.zone === player.currentZone);

  const roll = Math.random() * 100;
  let caught = null;

  for (let i = zoneFish.length - 1; i >= 0; i--) {
    const rarityFactor = zoneFish[i].rarity * 10 - bait.rarityBoost * 5;
    if (roll > rarityFactor) {
      caught = zoneFish[i];
      break;
    }
  }

  if (!caught) caught = zoneFish[0];

  const difficulty = caught.rarity * rod.difficultyModifier * 5;

  const success = clickMinigame(difficulty);
  if (success) {
    player.inventory.push(caught);
    alert(`Caught a ${caught.name}!`);
  } else {
    alert(`The ${caught.name} escaped!`);
  }
}

// Fake click minigame simulation
function clickMinigame(difficulty) {
  const clicks = prompt(`Click challenge! Enter number of clicks you did in 3 seconds:`);
  return parseInt(clicks) > difficulty;
}
