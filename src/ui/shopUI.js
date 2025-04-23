// src/ui/shopUI.js
import rods from '../data/rods.json' assert { type: 'json' };
import baitTypes from '../data/bait.json' assert { type: 'json' };
import boats from '../data/boats.json' assert { type: 'json' };
import { player } from '../game/player.js';
import { renderInventoryUI } from './inventoryUI.js';

export function renderShopUI() {
  const container = document.getElementById('shop-ui');
  container.innerHTML = '<h2>Shop</h2>';

  // Rods
  container.appendChild(document.createElement('hr'));
  container.appendChild(makeSection("Rods", rods.map(r => ({
    name: r.name,
    cost: r.tier * 50,
    onBuy: () => {
      if (r.tier > player.rodTier) player.rodTier = r.tier;
    }
  }))));

  // Bait
  container.appendChild(document.createElement('hr'));
  container.appendChild(makeSection("Bait", baitTypes.map(b => ({
    name: b.type,
    cost: b.rarityBoost * 30,
    onBuy: () => {
      player.bait = b.type;
    }
  }))));

  // Boats
  container.appendChild(document.createElement('hr'));
  container.appendChild(makeSection("Boats", boats.map(b => ({
    name: b.name,
    cost: b.tier * 100,
    onBuy: () => {
      if (b.tier > player.boatTier) player.boatTier = b.tier;
    }
  }))));
}

function makeSection(title, items) {
  const section = document.createElement('div');
  section.innerHTML = `<h3>${title}</h3>`;

  items.forEach(item => {
    const div = document.createElement('div');
    const btn = document.createElement('button');
    btn.textContent = `Buy ${item.name} (${item.cost} coins)`;
    btn.onclick = () => {
      if (player.coins >= item.cost) {
        player.coins -= item.cost;
        item.onBuy();
        renderInventoryUI(); // update coin count
      } else {
        alert("Not enough coins.");
      }
    };
    div.appendChild(btn);
    section.appendChild(div);
  });

  return section;
}
