import Player from "@/types/Player";
import Position from "@/types/Position";
import Tactic from "@/types/Tactic";
import Team from "@/types/Team";

export const POSITIONS: Position[] = [
  { name: "GK", x: 50, y: 85 },
  { name: "LB", x: 20, y: 55 },
  { name: "CB", x: 50, y: 65 },
  { name: "RB", x: 80, y: 55 },
  { name: "CF", x: 50, y: 35 },
  { name: "LW", x: 20, y: 25 },
  { name: "RW", x: 80, y: 25 },
];

export const PLAYERS: Player[] = [
  { id: "1", photo: "/vercel.svg", name: "Irineu", pos: "GK", price: 10 },
  {
    id: "2",
    photo: "/vercel.svg",
    name: "Irineu da Silva",
    pos: "LB",
    price: 10,
  },
  {
    id: "3",
    photo: "/vercel.svg",
    name: "Irineu da Silva Santos",
    pos: "RB",
    price: 10,
  },
  {
    id: "4",
    photo: "/vercel.svg",
    name: "Irineu Barros",
    pos: "CB",
    price: 10,
  },
  {
    id: "5",
    photo: "/vercel.svg",
    name: "Irineu Moraes",
    pos: "CF",
    price: 10,
  },
  { id: "6", photo: "/vercel.svg", name: "Irineu Gomes", pos: "LW", price: 10 },
  { id: "7", photo: "/vercel.svg", name: "Irineu Tadeu", pos: "RW", price: 10 },
];

export const TEAMS: Team[] = [
  {
    id: "1",
    playersIds: ["1", "2", "3", "4", "5", "6", "7"],
    subPlayersIds: ["8", "9", "10"],
    tactics: "3-3",
  },
];

export const TACTICS: Tactic[] = [
  {
    id: "1",
    tacticName: "3-3",
    positions: ["GK", "LB", "CB", "RB", "CF", "LW", "RW"],
  },
];
