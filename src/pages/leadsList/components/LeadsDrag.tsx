import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { useDroppable } from "@dnd-kit/core";
import { ReactNode, useState } from "react";
import { DndContext } from "@dnd-kit/core";

export type DragType = {
  children: ReactNode;
  id: string;
};

function Draggable({ children, id }: DragType) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });
  const style = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
  };

  return (
    <button
      className="w-1/3 p-4 bg-slate-600 text-white"
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      {children}
    </button>
  );
}

export function Droppable({ children, id }: DragType) {
  const { isOver, setNodeRef } = useDroppable({
    id: id,
  });
  const style = {
    opacity: isOver ? 1 : 0.5,
  };

  return (
    <div
      className="w-1/3 p-4 bg-slate-200 text-black"
      ref={setNodeRef}
      style={style}
    >
      {children}
    </div>
  );
}

export function LeadsDrag() {
  const [parent, setParent] = useState(null);
  const draggable = <Draggable id="draggable">Tassio Santos</Draggable>;

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div className="flex">
        {!parent ? draggable : null}
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
        <Droppable id="droppable">
          {parent === "droppable" ? draggable : "Drop here"}
        </Droppable>
      </div>
    </DndContext>
  );
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-expect-error
  function handleDragEnd({ over }) {
    setParent(over ? over.id : null);
  }
}
