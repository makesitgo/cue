export interface Table {
  _id: string;
  players: string[];
}

export interface TablesState {
  loading: boolean;
  all: Table[];
  error?: string;
}
