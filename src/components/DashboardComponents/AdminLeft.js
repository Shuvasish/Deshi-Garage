import React from "react";
import styled from "styled-components";

function AdminLeft({
  setAdminClick,
  adminClick,
  activeIndicator,
  setActiveIndicator,
}) {
  //   console.log(adminClick);
  return (
    <>
      <StyledLi
        onClick={() => {
          const temp = { ...adminClick };
          temp.service = false;
          temp.addAdmin = false;
          temp.manage = false;
          temp.order = true;
          setAdminClick(temp);

          const activeTemp = { ...activeIndicator };
          activeTemp.service = "";
          activeTemp.addAdmin = "";
          activeTemp.manage = "";
          activeTemp.order = "active";
          setActiveIndicator(activeTemp);
        }}
        className={activeIndicator.order}
      >
        Order List
      </StyledLi>
      <StyledLi
        onClick={() => {
          const temp = { ...adminClick };

          temp.addAdmin = false;
          temp.manage = false;
          temp.order = false;
          temp.service = true;
          setAdminClick(temp);

          const activeTemp = { ...activeIndicator };
          activeTemp.service = "active";
          activeTemp.addAdmin = "";
          activeTemp.manage = "";
          activeTemp.order = "";
          setActiveIndicator(activeTemp);
        }}
        className={activeIndicator.service}
      >
        Add Service
      </StyledLi>
      <StyledLi
        onClick={() => {
          const temp = { ...adminClick };
          temp.service = false;

          temp.manage = false;
          temp.order = false;
          temp.addAdmin = true;
          setAdminClick(temp);

          const activeTemp = { ...activeIndicator };
          activeTemp.service = "";
          activeTemp.addAdmin = "active";
          activeTemp.manage = "";
          activeTemp.order = "";
          setActiveIndicator(activeTemp);
        }}
        className={activeIndicator.addAdmin}
      >
        Add Admin
      </StyledLi>
      <StyledLi
        onClick={() => {
          const temp = { ...adminClick };
          temp.service = false;
          temp.addAdmin = false;

          temp.order = false;
          temp.manage = true;
          setAdminClick(temp);

          const activeTemp = { ...activeIndicator };
          activeTemp.service = "";
          activeTemp.addAdmin = "";
          activeTemp.manage = "active";
          activeTemp.order = "";
          setActiveIndicator(activeTemp);
        }}
        className={activeIndicator.manage}
      >
        Manage Services
      </StyledLi>
    </>
  );
}

const StyledLi = styled.li``;

export default AdminLeft;
