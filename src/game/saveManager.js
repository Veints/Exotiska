// src/storage/saveManager.js
import { player } from '../game/player.js';

const KEY = 'exotiska_save';

export function saveGame() {
  localStorage.setItem(KEY, JSON.stringify(player));
  alert("Game saved.");
}

export function loadGame() {
  const data = localStorage.getItem(KEY);
  if (data) {
    const loaded = JSON.parse(data);
    Object.assign(player, loaded);
    alert("Game loaded.");
  }
}
