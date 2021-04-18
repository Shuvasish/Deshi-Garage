import React from "react";

function UserLeft({
  setUserClick,
  userClick,
  activeIndicatorUser,
  setActiveIndicatorUser,
}) {
  return (
    <>
      <li
        onClick={() => {
          const temp = { ...userClick };
          temp.review = false;
          temp.booking = true;
          setUserClick(temp);

          const activeTemp = { ...activeIndicatorUser };
          activeTemp.review = "";
          activeTemp.booking = "active";
          setActiveIndicatorUser(activeTemp);
        }}
        className={activeIndicatorUser.booking}
      >
        Booking List
      </li>
      <li
        onClick={() => {
          const temp = { ...userClick };
          temp.booking = false;
          temp.review = true;
          setUserClick(temp);

          const activeTemp = { ...activeIndicatorUser };
          activeTemp.review = "active";
          activeTemp.booking = "";
          setActiveIndicatorUser(activeTemp);
        }}
        className={activeIndicatorUser.review}
      >
        Add Review
      </li>
    </>
  );
}

export default UserLeft;
