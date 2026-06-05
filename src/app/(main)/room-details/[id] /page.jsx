import { getRoomsById, getUserById } from "../../../../lib/data/data";
import RoomDetailsComponent from "../../../../components/Rooms/RoomDetailsComponent";

export async function generateMetadata({ params }) {
  const { id } = await params;

  const room = await getRoomsById(id);

  return {
    title: room?.roomName + "- StudyNook" || "Room Details - StudyNook",
  };
}

const RoomDetails = async ({ params }) => {
  const { id } = await params;
  const room = await getRoomsById(id);

  return (
    <div>
      <RoomDetailsComponent room={room} />
    </div>
  );
};

export default RoomDetails;
