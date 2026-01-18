import { useDroppable } from "@dnd-kit/core";
import clsx from "clsx";
import { BiSolidTrashAlt, BiTrashAlt } from "react-icons/bi";

interface Props {
  visible: boolean;
}

export default function RemoveZone({ visible }: Props) {
  const { setNodeRef, isOver } = useDroppable({
    id: "remove-zone",
  });

  if (!visible) return null;

  return (
    <div
      ref={setNodeRef}
      className={clsx(
        "absolute bottom-0 right-0 w-64 h-64 rounded-full translate-x-1/2 translate-y-1/2 border-2 flex items-start justify-start",
        isOver
          ? "bg-red-950/90 border-red-500"
          : "bg-red-950/80 border-red-400"
      )}
    >
      {isOver ? (
        <BiSolidTrashAlt className="text-4xl mt-16 ml-16 text-red-600" />
      ) : (
        <BiTrashAlt className="text-4xl mt-16 ml-16 text-red-600" />
      )}
    </div>
  );
}
