import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile, mobile2 } from "../responsive";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { logout } from "../redux/userRedux";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  ${mobile2({ display: "none" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 1, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);
  const handleLogout = (e) => {
    localStorage.removeItem(user);
    e.preventDefault();
    dispatch(logout()); // Dispatch the logout action

    alert("You have been logged out");
  };

  // console.log(user.others.fullname);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Logo>Switch.</Logo>
          </Link>
        </Center>
        <Right>
          {user ? (
            <Link
              to={"/orders/find/" + user.others._id}
              style={{ textDecoration: "none", color: "black" }}
            >
              <MenuItem>ORDERS</MenuItem>
            </Link>
          ) : (
            <></>
          )}
          {user ? (
            <></>
          ) : (
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <MenuItem>Register</MenuItem>
            </Link>
          )}

          {user ? (
            <div style={{ display: "flex" }}>
              <MenuItem onClick={handleLogout}> SIGN OUT</MenuItem>
            </div>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              {" "}
              <MenuItem>LOGIN</MenuItem>
            </Link>
          )}

          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <MenuItem>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
