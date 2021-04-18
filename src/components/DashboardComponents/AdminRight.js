import React from "react";
import AddAdmin from "./AddAdmin";
import AddService from "./AddService";
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
  return (
    <div>
      {order ? (
        <OrderList
          bookingList={bookingList}
          setBookingList={setBookingList}
        ></OrderList>
      ) : (
        ""
      )}

      {/* ADD SERVICES */}
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
