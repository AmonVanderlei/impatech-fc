export default interface Team {
  id: string;
  playersIds: string[];
  subPlayersIds: string[] | null;
  tactics: string;
}
