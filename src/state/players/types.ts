export interface Player {
  email: string;
}

export interface PlayersState {
  [key: string]: Player;
}
