// src/game/player.js

export let player = {
  coins: 100,
  currentZone: "deck",
  rodTier: 1,
  bait: "basic",
  boatTier: 0,
  inventory: [],
};

export function initPlayer() {
  console.log("Player initialized", player);
}
