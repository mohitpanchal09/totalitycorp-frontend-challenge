import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { mobile2 } from "../responsive";
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  ${mobile2({ justifyContent: "space-between", padding: "0 10px" })}
`;
const Announcement = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <>Super Deal! Free shipping on orders over ₹600</>
      <div
        style={{
          position: "absolute",
          right: "20px",
          display: "flex",
          alignItems: "center",
          fontWeight: "600",
        }}
      >
        {user ? (
          <>
            <FaUserCircle style={{ margin: "0 10px" }} /> {user.others.username}
          </>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};

export default Announcement;
