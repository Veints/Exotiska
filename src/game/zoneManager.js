// src/game/zoneManager.js
import zones from '../data/zones.json' assert { type: 'json' };
import boats from '../data/boats.json' assert { type: 'json' };
import { player } from './player.js';

export function getUnlockedZones() {
  return zones.filter(zone => {
    const requiredBoat = boats.find(b => b.unlocksZone === zone.id);
    return requiredBoat && player.boatTier >= requiredBoat.tier;
  });
}
