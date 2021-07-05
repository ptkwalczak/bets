export interface Bet {
  id: number;
  teams: Team[];
  draw: number;
}

export interface Team {
  name: string;
  win: number;
}
