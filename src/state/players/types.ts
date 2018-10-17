export interface Player {
  _id: string;
  name: string;
  email?: string;
  registrationDate: string;
}

export interface PlayersState {
  loading: boolean;
  // all: { [key: string]: Player };
  all: Player[];
  error?: string;
}