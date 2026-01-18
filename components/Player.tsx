import Player from "@/types/Player";
import clsx from "clsx";
import Image from "next/image";
import { RiLock2Line } from "react-icons/ri";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { POSITIONS } from "@/utils/constants";

interface Props {
  player: Player;
  lock?: boolean;
  isOverlay?: boolean;
}

export default function PlayerComponent({ player, lock, isOverlay }: Props) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: player.id,
      disabled: lock,
    });

  const position = POSITIONS.find((p) => p.name === player.pos);

  const style = {
    transform: !isOverlay ? CSS.Translate.toString(transform) : undefined,
    left: !isOverlay ? `${position?.x ?? 0}%` : undefined,
    top: !isOverlay ? `${position?.y ?? 0}%` : undefined,
    clipPath:
      "polygon(50% 0%, 60% 2%, 80% 3%, 90% 6%, 94% 10%, 100% 12%, 100% 90%, 97% 92%, 95% 95%, 50% 100%, 5% 95%, 3% 92%, 0% 90%, 0% 12%, 6% 10%, 10% 6%, 20% 3%, 40% 2%, 50% 0%)",
  };

  return (
    <div
      ref={!isOverlay ? setNodeRef : undefined}
      {...(!isOverlay ? listeners : {})}
      {...(!isOverlay ? attributes : {})}
      style={style}
      className={clsx(
        "aspect-3/4 select-none touch-none",
        lock ? "cursor-not-allowed" : "cursor-grab active:cursor-grabbing",
        isOverlay
          ? "w-24 opacity-85 z-50"
          : "absolute -translate-x-1/2 -translate-y-1/2 w-1/5",
        isDragging && !isOverlay && "opacity-0",
      )}
    >
      <div className="w-full h-full bg-gray-700 flex flex-col items-center justify-end">
        <div className="h-1/2 w-full relative flex">
          <span className="absolute text-center text-xs text-lime-400 font-semibold left-[5%] top-[5%]">
            <div>$10</div>
            <div>GK</div>
          </span>
          <Image
            src="/vercel.svg"
            alt="Player photo"
            fill
            draggable={false}
            className="object-contain pl-[10%]"
          />
          {lock && (
            <span className="absolute right-[2.5%] bottom-0 rounded-full bg-gray-900/80 w-6 h-6 flex items-center justify-center translate-y-1/2">
              <RiLock2Line className="text-base text-lime-400" />
            </span>
          )}
        </div>
        <div className="h-2/5 w-full flex items-center justify-center text-center text-sm bg-white/15 text-lime-400 font-semibold p-2">
          {player.name.split(" ").length > 2
            ? player.name.split(" ")[0] +
              " " +
              player.name.split(" ").reverse()[0]
            : player.name}
        </div>
      </div>
    </div>
  );
}
