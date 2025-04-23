// src/ui/mapUI.js
import zones from '../data/zones.json' assert { type: 'json' };
import boats from '../data/boats.json' assert { type: 'json' };
import { player } from '../game/player.js';

export function renderZoneUI() {
  const container = document.getElementById('zone-ui');
  container.innerHTML = '<h2>Zones</h2>';

  zones.forEach(zone => {
    const requiredBoat = boats.find(b => b.unlocksZone === zone.id);
    const unlocked = player.boatTier >= requiredBoat.tier;

    const btn = document.createElement('button');
    btn.textContent = zone.name;
    btn.disabled = !unlocked;
    btn.onclick = () => {
      player.currentZone = zone.id;
      alert(`Traveled to ${zone.name}`);
    };
    container.appendChild(btn);
  });
}
