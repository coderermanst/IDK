* {
  box-sizing: border-box;
}

:root {
  --bg: #071521;
  --bg-strong: #030b14;
  --panel: rgba(11, 22, 33, 0.94);
  --panel-soft: rgba(18, 31, 42, 0.82);
  --line: rgba(140, 193, 255, 0.18);
  --text: #edf8ff;
  --muted: #9db6c8;
  --cyan: #59d4ff;
  --green: #6df4b1;
  --orange: #ffb980;
  --red: #ff6a7d;
  --purple: #b98cff;
  --gold: #f9d874;
  --shadow: 0 24px 60px rgba(0, 0, 0, 0.42);
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Inter, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top, rgba(89, 212, 255, 0.2), transparent 22%),
    radial-gradient(circle at bottom, rgba(170, 108, 255, 0.2), transparent 26%),
    linear-gradient(160deg, var(--bg) 0%, var(--bg-strong) 100%);
  color: var(--text);
}

button, input, select {
  font: inherit;
}

#app {
  width: min(1200px, calc(100vw - 32px));
  margin: 32px auto;
}

.panel {
  display: none;
}

.panel.active {
  display: block;
}

.hidden {
  display: none !important;
}

.brand-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 18px;
}

.brand-badge {
  width: 50px;
  height: 50px;
  border-radius: 16px;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(89, 212, 255, 0.22), rgba(185, 140, 255, 0.3));
  border: 1px solid rgba(89, 212, 255, 0.42);
  font-size: 24px;
}

.brand-header h1 {
  margin: 0;
  font-size: clamp(2rem, 5vw, 3rem);
}

.brand-header p {
  margin: 2px 0 0;
  color: var(--muted);
}

.setup-grid {
  display: grid;
  grid-template-columns: 1.1fr 1.35fr;
  gap: 22px;
}

.card {
  background: rgba(9, 19, 30, 0.9);
  border: 1px solid var(--line);
  border-radius: 24px;
  box-shadow: var(--shadow);
  padding: 20px;
}

h2, h3 {
  margin-top: 0;
}

.host-join-row,
.settings-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

button {
  cursor: pointer;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 12px;
  padding: 12px 16px;
  transition: transform 0.16s ease, opacity 0.16s ease, box-shadow 0.16s ease;
}

button:hover {
  transform: translateY(-1px);
}

button.primary {
  background: linear-gradient(135deg, var(--cyan), #4578ff);
  color: #051923;
  border: none;
  font-weight: 700;
}

button.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
}

button.small {
  padding: 8px 12px;
  border-radius: 10px;
}

.field-group {
  display: flex;
  gap: 10px;
  margin-top: 12px;
}

.inline-room {
  align-items: center;
}

input, select {
  width: 100%;
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 10px 12px;
}

.room-info {
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 12px;
}

.room-info strong {
  font-size: 1.3rem;
  letter-spacing: 0.18em;
}

.player-list-wrap {
  margin-top: 18px;
}

.player-list {
  list-style: none;
  margin: 12px 0 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.player-list li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 12px;
  padding: 10px 12px;
}

.player-meta {
  display: flex;
  align-items: center;
  gap: 10px;
}

.player-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  display: inline-block;
}

.player-tag {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.settings-grid {
  display: grid;
  gap: 16px;
}

label {
  display: grid;
  gap: 8px;
}

label span {
  color: var(--muted);
}

.range-value {
  color: var(--cyan);
  font-weight: 700;
}

.checkbox-row {
  grid-template-columns: 18px 1fr;
  align-items: center;
  gap: 10px;
}

.checkbox-row input {
  width: 18px;
  height: 18px;
}

#gameHud {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 16px;
  background: rgba(9, 19, 30, 0.92);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 12px 16px;
}

.hud-left,
.hud-mid,
.hud-right {
  display: flex;
  align-items: center;
  gap: 16px;
}

.role-badge {
  min-width: 72px;
  text-align: center;
  padding: 8px 12px;
  border-radius: 999px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  background: rgba(109, 244, 177, 0.15);
  color: var(--green);
  border: 1px solid rgba(109, 244, 177, 0.25);
}

.role-badge.impostor {
  background: rgba(255, 106, 125, 0.14);
  color: var(--red);
  border-color: rgba(255, 106, 125, 0.25);
}

.game-shell {
  position: relative;
  background: rgba(8, 17, 26, 0.96);
  border-radius: 24px;
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  overflow: hidden;
}

canvas {
  width: 100%;
  height: auto;
  display: block;
  background: #020d13;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(2, 6, 12, 0.74);
  display: grid;
  place-items: center;
  backdrop-filter: blur(3px);
}

.meeting-card {
  width: min(720px, 92%);
  max-height: 82vh;
  overflow: auto;
  background: rgba(10, 22, 34, 0.96);
  border: 1px solid var(--line);
  border-radius: 24px;
  padding: 20px;
  box-shadow: var(--shadow);
}

.meeting-log {
  display: grid;
  gap: 10px;
  margin: 16px 0;
}

.meeting-entry {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 12px;
}

.vote-panel {
  display: grid;
  gap: 10px;
  margin-top: 12px;
}

.vote-option {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 12px;
}

.vote-option button {
  background: rgba(89, 212, 255, 0.12);
  color: var(--text);
}

@media (max-width: 900px) {
  .setup-grid {
    grid-template-columns: 1fr;
  }

  #gameHud {
    flex-direction: column;
    align-items: flex-start;
  }
}
" , "path":"style.css"},{"content":"# Starline Social

A lightweight browser-based Among Us-style social deduction game using PeerJS for multiplayer and AI-controlled players for empty slots.

## Features

- Create and join private rooms with a room code
- Host-controlled game lobby and authoritative sync
- AI players that walk, investigate, accuse, defend, and vote
- 20 AI personality archetypes with data-driven dialogue
- Multiple map presets (Skeld, Mira HQ, Polus, Airship)
- Crew vs impostor win conditions
- Meeting flow with discussion and voting
- Local development via static server

## Quick start

1. Install a local static server (optional but recommended):

```bash
npm install -g serve
```

2. Start the app:

```bash
serve .
```

3. Open the browser at the served URL, usually `http://localhost:3000`.

4. In the lobby, click `Create Room` or enter a room code to join.

## Notes

- PeerJS requires a browser runtime with WebRTC and a working network handshake.
- For the best experience, run the app in a browser with a local network or a PeerJS server configured through the app if needed.
- The game defaults to host-authoritative state updates and AI filling.

## File structure

```text
/src
  /ai
    ai-behaviours.js
    ai-dialogue.js
    ai-manager.js
    ai-memory.js
    ai-movement.js
    ai-voting.js
  /game
    game-manager.js
    impostor-manager.js
    meeting-manager.js
    player-manager.js
    task-manager.js
    voting-manager.js
  /maps
    airship.js
    map-manager.js
    mira-hq.js
    polus.js
    skeld.js
  /multiplayer
    peer-manager.js
    room-manager.js
    synchronisation.js
  /ui
    hud.js
    lobby.js
    meeting-ui.js
    settings.js
  main.js
Index.html
style.css
```
