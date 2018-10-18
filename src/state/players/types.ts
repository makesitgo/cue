export interface Player {
  _id: string;
  name: string;
  email?: string;
  registrationDate: string;
  currentElo: number;
  stats: PlayerStats;
}

export interface PlayerStats {
  wins: number;
  losses: number;
}

export interface PlayersState {
  loading: boolean;
  // all: { [key: string]: Player };
  all: Player[];
  error?: string;
}
