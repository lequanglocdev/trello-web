import Box from "@mui/system/Box";
import ListColumn from "./ListColumns/ListColumn";
import { mapOrder } from "~/utils/sort";
import { DndContext , PointerSensor, useSensor, useSensors,MouseSensor,TouchSensor} from "@dnd-kit/core";
import { useEffect, useState } from "react";
import { arrayMove } from "@dnd-kit/sortable";
const BoardContent = ({ board }) => {
  const [orderedColumns, setOrderedColumns] = useState([]);
  
  const pointerSensor = useSensor(PointerSensor,{activationConstraint:{distance:10}})
  
  // Yêu cầu chuột di chuyển 10px thì mới kích hoạt event ,fix các trương hợp bị gọi event
  const mouseSensor = useSensor(MouseSensor, {activationConstraint: {distance:10}})
  // Nhấn giữ 250ms và dung sai của cảm ứng (di chuyển chênh lệch 5px ) thì mới kích hoạt envent 
  const touchSensor = useSensor(TouchSensor, {activationConstraint: {delay:250, tolerance:500}})
  
  const sensors = useSensors(mouseSensor, touchSensor)
  useEffect(() => {
    const orderedColumn = mapOrder(
      board?.columns,
      board?.columnOrderIds,
      "_id"
    );
    setOrderedColumns(orderedColumn);
  }, [board]);

  // hàm kéo board
  const handleDragEnd = (event) => {
    console.log(event);
    // active là kéo thằng nào
    // cover là kéo đến chỗ nào
    // đầu tiên cần xác active và cover
    const { active, over } = event;

    // Kiểm tra nếu không tồn tại over(kéo linh tinh ra ngoài thì return luôn tránh lỗi )
    if(!over) return
    
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
  };
  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
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
      </Box>
    </DndContext>
  );
};

export default BoardContent;
