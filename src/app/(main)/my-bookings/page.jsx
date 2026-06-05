import React from "react";
import { headers } from "next/headers";
import { auth } from "../../../lib/auth/auth";

import MyBookingComponent from "../../../components/Rooms/MyBookingComponent";

const getBookingData = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    process.env.NEXT_PUBLIC_URL + "/my-bookings",

    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  );

  const data = await res.json();
  return data.data;
};

export const metadata = {
  title: "My Bookings - StudyNook",
};
const MyBookings = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;

  const bookingData = await getBookingData(user?.id);

  return (
    <div>
      <MyBookingComponent data={bookingData} />
    </div>
  );
};

export default MyBookings;
