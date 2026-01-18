import PlayerComponent from "@/components/Player";
import Player from "@/types/Player";

const players: Player[] = [
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

export default function Team() {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full h-full p-8 flex justify-center">
        <div className="bg-[url('/field.svg')] bg-cover bg-center aspect-280/396 max-h-full relative rounded-3xl border-2 border-lime-600">
          {/* Players */}
          {players.map((player) => {
            let lock = false;
            if (player.pos === "CB") {
              lock = true;
            }
            return (
              <PlayerComponent key={player.id} player={player} lock={lock} />
            );
          })}
        </div>
      </div>
    </div>
  );
}
