import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
height:30px;
background-color: teal;
color: white;
display:flex;
align-items:center;
justify-content:center;
font-size 14px;
font-weight:500;
`;
const Announcement = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Container>
      <>Super Deal! Free shipping on orders over ₹600</>
    </Container>
  );
};

export default Announcement;
