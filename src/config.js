export const PLAYER_COLORS = [
  '#ff7b72', '#ffd166', '#7ae582', '#5ec8ff', '#b084ff', '#ffb3c6', '#a0e7e5', '#f7c59f', '#d9f99d', '#fcbf49', '#48cae4', '#c77dff'
];

export const DEFAULT_SETTINGS = {
  map: 'skeld',
  totalPlayers: 8,
  impostorCount: 2,
  aiPlayers: 3,
  autoFillAI: true,
  aiCanBeImpostor: true
};

export const MAP_LIBRARY = {
  skeld: {
    name: 'The Skeld',
    width: 980,
    height: 640,
    rooms: [
      { id: 'cafeteria', name: 'Cafeteria', x: 80, y: 90, w: 130, h: 120 },
      { id: 'weapons', name: 'Weapons', x: 260, y: 100, w: 110, h: 95 },
      { id: 'navigation', name: 'Navigation', x: 420, y: 90, w: 150, h: 120 },
      { id: 'reactor', name: 'Reactor', x: 650, y: 90, w: 140, h: 120 },
      { id: 'medbay', name: 'Medbay', x: 70, y: 260, w: 150, h: 118 },
      { id: 'storage', name: 'Storage', x: 250, y: 260, w: 132, h: 120 },
      { id: 'electrical', name: 'Electrical', x: 430, y: 250, w: 120, h: 118 },
      { id: 'security', name: 'Security', x: 630, y: 255, w: 122, h: 118 },
      { id: 'upper-engine', name: 'Upper Engine', x: 80, y: 430, w: 170, h: 120 },
      { id: 'lower-engine', name: 'Lower Engine', x: 300, y: 430, w: 170, h: 120 },
      { id: 'communications', name: 'Communications', x: 520, y: 430, w: 170, h: 120 }
    ],
    tasks: [
      { id: 'task-1', name: 'Download Data', room: 'cafeteria', x: 120, y: 150 },
      { id: 'task-2', name: 'Upload File', room: 'navigation', x: 490, y: 150 },
      { id: 'task-3', name: 'Inspect Engine', room: 'upper-engine', x: 140, y: 500 },
      { id: 'task-4', name: 'Fix Wires', room: 'electrical', x: 470, y: 315 },
      { id: 'task-5', name: 'Calibrate', room: 'reactor', x: 700, y: 160 },
      { id: 'task-6', name: 'Scan Body', room: 'medbay', x: 130, y: 320 }
    ]
  },
  'mira-hq': {
    name: 'Mira HQ',
    width: 980,
    height: 640,
    rooms: [
      { id: 'launch', name: 'Launch', x: 80, y: 90, w: 128, h: 120 },
      { id: 'office', name: 'Office', x: 260, y: 90, w: 150, h: 120 },
      { id: 'greenhouse', name: 'Greenhouse', x: 480, y: 90, w: 150, h: 120 },
      { id: 'reactor', name: 'Reactor', x: 700, y: 90, w: 160, h: 120 },
      { id: 'medbay', name: 'Medbay', x: 70, y: 260, w: 130, h: 120 },
      { id: 'lab', name: 'Laboratory', x: 250, y: 260, w: 150, h: 120 },
      { id: 'storage', name: 'Storage', x: 470, y: 260, w: 140, h: 120 },
      { id: 'communications', name: 'Communications', x: 680, y: 260, w: 180, h: 120 },
      { id: 'cafeteria', name: 'Cafeteria', x: 70, y: 430, w: 170, h: 120 },
      { id: 'vault', name: 'Vault', x: 300, y: 430, w: 150, h: 120 },
      { id: 'security', name: 'Security', x: 520, y: 430, w: 170, h: 120 }
    ],
    tasks: [
      { id: 'task-1', name: 'Inspect Lab', room: 'lab', x: 300, y: 320 },
      { id: 'task-2', name: 'Patch Network', room: 'communications', x: 740, y: 310 },
      { id: 'task-3', name: 'Resupply', room: 'storage', x: 540, y: 330 },
      { id: 'task-4', name: 'Check Greenhouse', room: 'greenhouse', x: 540, y: 150 },
      { id: 'task-5', name: 'Test Launch', room: 'launch', x: 150, y: 150 },
      { id: 'task-6', name: 'Monitor Reactor', room: 'reactor', x: 770, y: 150 }
    ]
  },
  polus: {
    name: 'Polus',
    width: 980,
    height: 640,
    rooms: [
      { id: 'dropship', name: 'Dropship', x: 60, y: 80, w: 150, h: 120 },
      { id: 'electrical', name: 'Electrical', x: 250, y: 80, w: 120, h: 110 },
      { id: 'storage', name: 'Storage', x: 430, y: 80, w: 130, h: 110 },
      { id: 'science', name: 'Science', x: 620, y: 80, w: 130, h: 110 },
      { id: 'specimen', name: 'Specimen', x: 800, y: 80, w: 120, h: 110 },
      { id: 'medbay', name: 'Medbay', x: 70, y: 260, w: 140, h: 120 },
      { id: 'oxygen', name: 'Oxygen', x: 260, y: 260, w: 140, h: 120 },
      { id: 'drone', name: 'Drone', x: 470, y: 260, w: 140, h: 120 },
      { id: 'security', name: 'Security', x: 670, y: 260, w: 140, h: 120 },
      { id: 'lab', name: 'Laboratory', x: 130, y: 430, w: 170, h: 120 },
      { id: 'boiler', name: 'Boiler', x: 380, y: 430, w: 180, h: 120 },
      { id: 'communications', name: 'Communications', x: 620, y: 430, w: 180, h: 120 }
    ],
    tasks: [
      { id: 'task-1', name: 'Scan Sample', room: 'science', x: 670, y: 150 },
      { id: 'task-2', name: 'Power Grid', room: 'electrical', x: 300, y: 140 },
      { id: 'task-3', name: 'Collect Ore', room: 'boiler', x: 445, y: 490 },
      { id: 'task-4', name: 'Fix Oxygen', room: 'oxygen', x: 320, y: 320 },
      { id: 'task-5', name: 'Monitor Specimen', room: 'specimen', x: 860, y: 140 },
      { id: 'task-6', name: 'Check Lab', room: 'lab', x: 200, y: 500 }
    ]
  },
  airship: {
    name: 'Airship',
    width: 980,
    height: 640,
    rooms: [
      { id: 'cockpit', name: 'Cockpit', x: 70, y: 80, w: 140, h: 120 },
      { id: 'cargo', name: 'Cargo', x: 260, y: 90, w: 130, h: 120 },
      { id: 'kitchen', name: 'Kitchen', x: 450, y: 90, w: 140, h: 120 },
      { id: 'vault', name: 'Vault', x: 660, y: 90, w: 150, h: 120 },
      { id: 'electrical', name: 'Electrical', x: 70, y: 260, w: 150, h: 120 },
      { id: 'shower', name: 'Shower', x: 280, y: 260, w: 140, h: 120 },
      { id: 'records', name: 'Records', x: 500, y: 260, w: 150, h: 120 },
      { id: 'security', name: 'Security', x: 700, y: 260, w: 150, h: 120 },
      { id: 'medbay', name: 'Medbay', x: 100, y: 430, w: 170, h: 120 },
      { id: 'hallway', name: 'Hallway', x: 320, y: 430, w: 170, h: 120 },
      { id: 'engine', name: 'Engine', x: 590, y: 430, w: 190, h: 120 }
    ],
    tasks: [
      { id: 'task-1', name: 'Fuel Engine', room: 'engine', x: 670, y: 500 },
      { id: 'task-2', name: 'Inspect Cargo', room: 'cargo', x: 330, y: 150 },
      { id: 'task-3', name: 'Repair Electrical', room: 'electrical', x: 140, y: 320 },
      { id: 'task-4', name: 'Upload Records', room: 'records', x: 560, y: 320 },
      { id: 'task-5', name: 'Restock Kitchen', room: 'kitchen', x: 520, y: 150 },
      { id: 'task-6', name: 'Scan Patients', room: 'medbay', x: 170, y: 500 }
    ]
  }
};

export const AI_PERSONALITIES = [
  { id: 'detective', label: 'The Detective', description: 'Investigates suspicious movement and alibis.' },
  { id: 'accuser', label: 'The Accuser', description: 'Frequent accusations during meetings.' },
  { id: 'quiet-one', label: 'The Quiet One', description: 'Rarely speaks during voting.' },
  { id: 'defensive', label: 'The Defensive One', description: 'Defends themselves whenever accused.' },
  { id: 'leader', label: 'The Leader', description: 'Tries to steer votes.' },
  { id: 'confused', label: 'The Confused One', description: 'Makes random or illogical statements.' },
  { id: 'liar', label: 'The Liar', description: 'Creates fake alibis.' },
  { id: 'honest', label: 'The Honest One', description: 'Shares genuine observations.' },
  { id: 'suspicious', label: 'The Suspicious One', description: 'Trusts nobody.' },
  { id: 'random-voter', label: 'The Random Voter', description: 'Votes unpredictably.' },
  { id: 'evidence-collector', label: 'The Evidence Collector', description: 'Remembers last sightings.' },
  { id: 'bandwagon', label: 'The Bandwagon', description: 'Votes with the crowd.' },
  { id: 'contrarian', label: 'The Contrarian', description: 'Disagrees with majorities.' },
  { id: 'nervous', label: 'The Nervous One', description: 'Acts suspicious under pressure.' },
  { id: 'silent-observer', label: 'The Silent Observer', description: 'Speaks only when useful.' },
  { id: 'revenge-voter', label: 'The Revenge Voter', description: 'Targets accusers.' },
  { id: 'team-player', label: 'The Team Player', description: 'Supports crewmates.' },
  { id: 'opportunist', label: 'The Opportunist', description: 'Changes sides strategically.' },
  { id: 'overconfident', label: 'The Overconfident One', description: 'Makes bold claims.'