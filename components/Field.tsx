import PlayerComponent from "@/components/Player";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
  useSensor,
  useSensors,
  PointerSensor,
} from "@dnd-kit/core";
import RemoveZone from "@/components/RemoveZone";
import Team from "@/types/Team";
import { useState } from "react";
import Player from "@/types/Player";
import { PLAYERS } from "@/utils/constants";

interface Props {
  team: Team;
}

export default function Field({ team }: Props) {
  const [players, setPlayers] = useState<Player[]>(
    team.playersIds
      .map((id) => PLAYERS.find((p) => p.id === id))
      .filter((p): p is Player => p !== undefined),
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string);
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over?.id === "remove-zone") {
      setPlayers((prev) => prev && prev.filter((p) => p.id !== active.id));
    }

    setActiveId(null);
  }

  function handleDragCancel() {
    setActiveId(null);
  }

  const activePlayer = players?.find((p) => p.id === activeId) ?? null;

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
  );
  return (
    <DndContext
      sensors={sensors}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div className="bg-[url('/field.svg')] bg-cover bg-center aspect-280/396 max-h-full relative rounded-3xl border-2 border-lime-600 overflow-clip">
        <RemoveZone visible={!!activeId} />

        {/* Players */}
        {players.map((player) => {
          const lock = player.pos === "CB";

          return (
            <PlayerComponent key={player.id} player={player} lock={lock} />
          );
        })}
      </div>

      <DragOverlay>
        {activePlayer ? (
          <PlayerComponent player={activePlayer} isOverlay />
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}
