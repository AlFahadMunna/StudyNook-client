import React from "react";
import { getAllRooms } from "../../../lib/data /data";
import Wrapper from "../../../components/shared/Wrapper";
import AllRoomsSection from "../../../sections/Rooms/AllRoomsSection";
export const metadata = {
  title: "Available Rooms - StudyNook",
};
const Rooms = async ({ searchParams }) => {
  const sParams = await searchParams;
  const allRooms = await getAllRooms(
    sParams.search,
    sParams.amenities,
    sParams.max,
    sParams.min,
  );

  return (
    <div>
      <Wrapper>
        <AllRoomsSection allRooms={allRooms}></AllRoomsSection>
      </Wrapper>
    </div>
  );
};

export default Rooms;
