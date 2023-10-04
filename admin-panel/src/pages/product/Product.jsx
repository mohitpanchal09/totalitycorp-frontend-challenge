import { Link, useLocation } from "react-router-dom";
import "./Product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummy";
import { Publish } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { useEffect, useState, useMemo } from "react";
import { updateProduct } from "../../redux/apiCalls";

export default function Product() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [pStats, setPStats] = useState([]);
  const dispatch = useDispatch();
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const product = useSelector((state) =>
    state.product.products.find((product) => product._id === productId)
  );
  const image = product.img;
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  // update the product
  const handleChange = (e) => {
    setInputs((prev) => {
      return {
        _id: productId,
        ...prev,
        [e.target.name]: e.target.value,
        img: image,
      };
    });
  };
  console.log(inputs);
  const handleClick = (e) => {
    e.preventDefault();
    updateProduct(productId, inputs, dispatch);
  };
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await userRequest.get("orders/income?pid=" + productId);
        console.log(res);
        const list = res.data.sort((a, b) => {
          return a._id - b._id;
        });
        list.map((item) =>
          setPStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], Sales: item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [productId, MONTHS]);
  console.log(pStats);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={pStats} dataKey="Sales" title="Sales Performance" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.img} alt="" className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">active:</span>
              <span className="productInfoValue">yes</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input
              type="text"
              placeholder={product.title}
              name="title"
              onChange={handleChange}
            />
            <label>Product Description</label>
            <input
              type="text"
              placeholder={product.desc}
              name="desc"
              onChange={handleChange}
            />
            <label>Product Price</label>
            <input
              type="number"
              placeholder={product.price}
              name="price"
              onChange={handleChange}
            />
            <label>In Stock</label>
            <select name="inStock" id="idStock" onChange={handleChange}>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              {/* <img src={product.img} alt="" className="productUploadImg" /> */}
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
