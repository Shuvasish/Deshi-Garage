import React from "react";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";
import AdminBookingList from "./AdminBookingList";
import ManageServices from "./ManageServices";
import OrderList from "./OrderList";

function AdminRight({
  bookingList,
  setBookingList,
  setTrack,
  track,
  services,
  isAdmin,
  setAdminClick,
  adminClick,
  setUserClick,
  userClick,
}) {
  //   console.log(adminClick);
  const { order, service, addAdmin, manage } = adminClick;
  //   console.log(order, service, addAdmin, manage);
  console.log(bookingList);
  console.log(setBookingList);
  return (
    <div>
      {/* ADD SERVICES */}
      {order ? (
        <AdminBookingList
          bookingList={bookingList}
          setBookingList={setBookingList}
        ></AdminBookingList>
      ) : (
        ""
      )}
      {service ? <AddService></AddService> : ""}

      {/* ADD ADMIN */}
      {addAdmin ? <AddAdmin></AddAdmin> : ""}

      {/* MANAGE SERIVCES */}
      {manage ? (
        <ManageServices
          setTrack={setTrack}
          track={track}
          services={services}
        ></ManageServices>
      ) : (
        ""
      )}
    </div>
  );
}

export default AdminRight;
