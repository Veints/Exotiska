// src/index.js
import { initPlayer } from './game/player.js';
import { renderZoneUI } from './ui/mapUI.js';
import { renderFishingUI } from './ui/fishingUI.js';
import { renderInventoryUI } from './ui/inventoryUI.js';
import { renderShopUI } from './ui/shopUI.js';

function startGame() {
  initPlayer();
  renderZoneUI();
  renderFishingUI();
  renderInventoryUI();
  renderShopUI();
}

startGame();
