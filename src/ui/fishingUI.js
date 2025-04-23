// src/ui/fishingUI.js
import { attemptCatch } from '../game/fishing.js';

export function renderFishingUI() {
  const container = document.getElementById('fishing-ui');
  container.innerHTML = '<h2>Fishing</h2>';

  const btn = document.createElement('button');
  btn.textContent = '🎣 Cast Line';
  btn.onclick = () => attemptCatch();
  container.appendChild(btn);
}
