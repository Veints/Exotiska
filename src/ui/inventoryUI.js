// src/ui/inventoryUI.js
import { player } from '../game/player.js';

export function renderInventoryUI() {
  const container = document.getElementById('inventory-ui');
  container.innerHTML = '<h2>Inventory</h2>';

  const coins = document.createElement('p');
  coins.textContent = `Coins: ${player.coins}`;
  container.appendChild(coins);

  const list = document.createElement('ul');
  player.inventory.forEach((fish, i) => {
    const li = document.createElement('li');
    li.textContent = `${fish.name} - Value: ${fish.value} coins`;

    const sellBtn = document.createElement('button');
    sellBtn.textContent = 'Sell';
    sellBtn.onclick = () => {
      player.coins += fish.value;
      player.inventory.splice(i, 1);
      renderInventoryUI(); // re-render
    };

    li.appendChild(sellBtn);
    list.appendChild(li);
  });

  container.appendChild(list);
}
