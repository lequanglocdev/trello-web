import Box from "@mui/system/Box";
import ListColumn from "./ListColumns/ListColumn";
import { mapOrder } from "~/utils/sort";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
  MouseSensor,
  TouchSensor,
  DragOverlay,
  defaultDropAnimationSideEffects,
  closestCorners,
} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";

import Column from "./ListColumns/Columns/Column";
import Card from "./ListColumns/Columns/ListCard/Card/Card";
import { cloneDeep } from "lodash";

const ATIVE_DRAG_ITEM_TYPE = {
  COLUMN: "ATIVE_DRAG_ITEM_TYPE_COLUMN",
  CARD: "ATIVE_DRAG_ITEM_TYPE_CARD",
};

const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderedColumns] = useState([]);

  const pointerSensor = useSensor(PointerSensor, {
    activationConstraint: { distance: 10 },
  });

  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event ,fix các trương hợp bị gọi event
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: { distance: 10 },
  });
  // Nhấn giữ 250ms và dung sai của cảm ứng (di chuyển chênh lệch 5px ) thì mới kích hoạt envent
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: { delay: 250, tolerance: 500 },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  const [activeDragItemId, setActiveDragItemId] = useState(null);
  const [activeDragItemType, setActiveDragItemType] = useState(null);
  const [activeDragItemData, setActiveDragItemData] = useState(null);
  useEffect(() => {
    const orderedColumn = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedColumns(orderedColumn);
  }, [board]);

  // Trigger  khi bắt đầu kéo(drag) một phần tử
  const handleDragStart = (event) => {
    console.log(event);
    setActiveDragItemId(event?.active?.id);
    setActiveDragItemType(
      event?.active?.data?.current?.columnId
        ? ATIVE_DRAG_ITEM_TYPE.CARD
        : ATIVE_DRAG_ITEM_TYPE.COLUMN
    );
    setActiveDragItemData(event?.active?.data?.current);
  };

  const findColumnByCardId = (cardId) => {
    return orderedColumns.find((column) =>
      column?.cards?.map((card) => card._id)?.includes(cardId)
    );
  };

  // Trigger trong quá trình kéo
  const handeDragsOver = (event) => {
    // không làm gì thêm nếu đang kéo column
    if (activeDragItemType === ATIVE_DRAG_ITEM_TYPE.COLUMN) return;

    console.log("handleDragOver", event);
    const { active, over } = event;

    // cần đảm bảo nếu không tồn tại active hoặc over (khi kéo ra khỏi phạm vi container ) thì không làm gì (tránh crash trang)
    if (!active || !over) return;

    // activeDraggingCard: là cái card đang được kéo
    const {
      id: activeDraggingCardId,
      data: { current: activeDraggingCardData },
    } = active;

    // overCard: là cái card đang tương tác trên hoặc dưới so với cái card được kéo ở trên
    const { id: overCardId } = over;

    // Tìm 2 cái column theo cardId
    const activeColumn = findColumnByCardId(activeDragItemId);
    const overColumn = findColumnByCardId(overCardId);

    console.log("activeColumn", activeColumn);
    console.log("overColumn", overColumn);

    if (!activeColumn || !overColumn) return;

    if (activeColumn._id !== overColumn._id) {
      setOrderedColumns((prevColumns) => {
        // Tìm vị trí index của cái overCard trong column đich (nơi active card sắp đc thả)
        const overCardIndex = overColumn?.cards?.findIndex(
          (card) => card._id === overCardId
        );
        console.log("overCardIndex", overCardIndex);

        let newCardIndex;
        const isBelowOverItem =
          active.rect.current.translated &&
          active.rect.current.translated.top > over.rect.top + over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        newCardIndex =
          overCardIndex >= 0
            ? overCardIndex + modifier
            : overColumn?.cards?.lenght + 1;

        const nextColumns = cloneDeep(prevColumns);

        const nextActiveColumn = nextColumns.find(
          (column) => column._id === activeColumn._id
        );
        const nextOverColumn = nextColumns.find(
          (column) => column._id === overColumn._id
        );

        // column cũ
        if (nextActiveColumn) {
          // Xóa card ở cái column active (cũng có thể hiểu là cái column cũ ,cái lúc mà định kéo colum đó sang column khác)
          nextActiveColumn.cards = nextActiveColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          // Cập nhật lai mảng cardOverIds
          nextActiveColumn.cardOrderIds = nextActiveColumn.cards.map(
            (card) => card._id
          );
        }

        // column mới
        if (nextOverColumn) {
          // kiểm tra xem card đang kéo nó có tồn tại ở overColumn chưa, nếu có thì xóa nó trước
          nextOverColumn.cards = nextOverColumn.cards.filter(
            (card) => card._id !== activeDraggingCardId
          );

          // Tiếp theo là thêm cái card đang kéo vào overColumn theo vị trí index mới
          nextOverColumn.cards = nextOverColumn.cards.toSpliced(
            newCardIndex,
            0,
            activeDraggingCardData
          );

          // Cập nhật lại mảng cardOverIds
          nextOverColumn.cardOrderIds = nextOverColumn.cards.map(
            (card) => card._id
          );
        }

        return nextColumns;
      });
    }
  };

  // Trigger khi kết thúc hành động kéo (drag) một phần tử => hành động thả(drop)
  const handleDragEnd = (event) => {
    if (activeDragItemType === ATIVE_DRAG_ITEM_TYPE.CARD) {
    }

    console.log(event);
    // active là kéo thằng nào
    // cover là kéo đến chỗ nào
    // đầu tiên cần xác active và cover
    const { active, over } = event;

    // cần đảm bảo nếu không tồn tại active hoặc over (khi kéo ra khỏi phạm vi container ) thì không làm gì (tránh crash trang)
    if (!active || !over) return;

    // nếu vị trí sau khi kéo thả khác với vị trí ban đầu
    if (active.id !== over.id) {
      // console.log('kéo thả')
      // tiếp theo cần lấy tìm vị trí cũ
      const oldIndex = orderedColumns.findIndex((c) => c._id === active.id);
      // tiếp theo cần lấy tìm vị trí mới
      const newIndex = orderedColumns.findIndex((c) => c._id === over.id);
      // dùng arrayMove của thằng dnd-kit để sắp xếp gọi lại các mảng ban đầu

      const dndOrderedColumn = arrayMove(orderedColumns, oldIndex, newIndex);

      // cập nhật lại state columns ban đầu sau khi đã kéo thả
      setOrderedColumns(dndOrderedColumn);
    }
    setActiveDragItemId(null);
    setActiveDragItemType(null);
    setActiveDragItemData(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragOver={handeDragsOver}
      onDragEnd={handleDragEnd}
    >
      <Box
        sx={{
          bgcolor: (theme) =>
            theme.palette.mode === "dark" ? "#34495e" : "#3498db",
          height: (theme) => theme.trello.boardContentHeight,
          width: "100ww",
          p: "10px 0",
        }}
      >
        <ListColumn columns={orderedColumns} />
        <DragOverlay>
          {!activeDragItemType && null}
          {activeDragItemType === ATIVE_DRAG_ITEM_TYPE.COLUMN && (
            <Column column={activeDragItemData} />
          )}
          {activeDragItemType === ATIVE_DRAG_ITEM_TYPE.CARD && (
            <Card card={activeDragItemData} />
          )}
        </DragOverlay>
      </Box>
    </DndContext>
  );
};

export default BoardContent;
