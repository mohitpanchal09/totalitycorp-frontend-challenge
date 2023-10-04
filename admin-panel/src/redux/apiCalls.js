import {
    loginFailure,
    loginStart,
    loginSuccess,
    registerFailure,
    registerStart,
    registerSuccess,
    getuserFailure,
    getuserStart,getuserSuccess,deleteuserFailure,deleteuserStart,deleteuserSuccess
  } from "./userRedux";
  import { publicRequest, userRequest } from "../requestMethods";
import { getProductStart, getProductSuccess,getProductFailure,deleteProductFailure,updateProductFailure,updateProductStart,updateProductSuccess,addProductFailure,addProductStart,addProductSuccess,
  deleteProductStart,
  deleteProductSuccess} from "./productRedux";
import { deleteuserListFailure, deleteuserListSuccess, getuserListFailure, getuserListStart, getuserListSuccess } from "./userListRedux";
  
  export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
      const res = await publicRequest.post("auth/login", user);
      dispatch(loginSuccess(res.data));
    } catch (err) {
      dispatch(loginFailure());
    }
  };
  
  export const register = async (user, dispatch) => {
    dispatch(registerStart());
    try {
      const res = await publicRequest.post("/auth/register", user);
      dispatch(registerSuccess(res.data));
    } catch (err) {
      dispatch(registerFailure());
    }
  };

  export const getProducts = async (dispatch) => {
    dispatch(getProductStart());
    try {
      const res = await publicRequest.get("/products");
      dispatch(getProductSuccess(res.data));
    } catch (err) {
      dispatch(getProductFailure());
    }
  };
  

  export const deleteProduct = async (id,dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

  // update product
  export const updateProduct = async (id,product,dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`).save();
      dispatch(updateProductSuccess({id,product}));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };

  // add
  export const addProduct = async (product,dispatch) => {
    dispatch(addProductStart());
    try {
      const res = await userRequest.post(`/products`,product);
      dispatch(addProductSuccess(res.data));
    } catch (err) {
      dispatch(addProductFailure());
    }
  };
  
// get users list
  export const getUsers = async (dispatch) => {
    dispatch(getuserListStart());
    try {
      const res = await userRequest.get("/users");
      console.log(res.data,"resdata")
      dispatch(getuserListSuccess(res.data));
    } catch (err) {
      dispatch(getuserListFailure());
    }
  };

  // delete user
  export const deleteUser = async (id,dispatch) => {
    dispatch(deleteuserListSuccess());
    try {
      const res = await userRequest.delete(`/users/${id}`);
      dispatch(deleteuserListSuccess(id));
    } catch (err) {
      dispatch(deleteuserListFailure());
    }
  };
   // update user
   export const updateUser = async (id,product,dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/users/${id}`);
      dispatch(updateProductSuccess({id,product}));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };