import React from "react";
import MyListingSection from "../../../sections/Rooms/MyListingSection";
import { auth } from "../../../lib/auth/auth";
import { headers } from "next/headers";
export const metadata = {
  title: "My Listing - StudyNook",
};

const getListingRooms = async () => {
  try {
    const { token } = await auth.api.getToken({
      headers: await headers(),
    });

    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/my-listing`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    // FIRST check response
    if (!res.ok) {
      const text = await res.text();

      console.log("SERVER ERROR:", text);

      return [];
    }

    // only parse json if success
    const data = await res.json();

    return data.data;
  } catch (error) {
    console.log(error);

    return [];
  }
};

const MyListing = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const rooms = await getListingRooms(user?.id);

  return (
    <div>
      <MyListingSection rooms={rooms}></MyListingSection>
    </div>
  );
};

export default MyListing;
