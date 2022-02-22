import React from "react";
import dots from "../../assets/image/dot.svg";
import img1 from "../../assets/image/img1.svg";
import img2 from "../../assets/image/img2.svg";
import img3 from "../../assets/image/img3.svg";
import img4 from "../../assets/image/img4.svg";
import User from "../../assets/image/user.png";
import Arrow from "../../assets/image/right-arrow.png";
import Money from "../../assets/image/save-money.png";
import ShCart from "../../assets/image/shopping-cart-2.png";
import dollar from "../../assets/image/dollar-bills-stack.png";
import { HomePageWrapper, P } from "./style";
import { Link } from "react-router-dom";
import Chart from "react-apexcharts";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Loading } from "../Products/style";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function DashboardHome() {
  const product = useSelector((state) => state.getProduct);
  const { loading, success, error } = product;

  const series1 = [
    {
      name: "desktop",
      data: [20, 70, 50, 70, 40, 100, 150],
    },
  ];
  const series2 = [
    {
      name: "mobile",
      data: [20, 65, 80, 90, 120, 85, 150],
    },
  ];
  const option3 = {
    labels: ["desktop", "mobile", "tablet", "phone"],
    title: {
      text: "Visit Customer",
      style: {
        fotnSize: "20px",
        color: "gray",
      },
    },
    style: {
      margin: "10px 20px",
    },
    colors: ["#4049FE", "#34DEFF", "#FFBF40", "#8884D8"],
    theme: {
      mode: "light",
    },
    dataLabels: {
      enabled: false,
    },
  };
  const option2 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "string",
      category: ["Sun", "Mon", "Tue", 40, 50, 60, 70],
    },
    title: {
      text: "Analytics",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const option1 = {
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "number",
      category: [10, 20, 30, 40, 50, 60, 70],
    },
    title: {
      text: "Sales overview",
      style: {
        fotnSize: 30,
      },
    },
    toolbar: {
      style: {
        display: "none",
      },
    },
  };
  const data = [
    {
      name: "Page A",
      uv: 100,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 300,
      pv: 3400,
      amt: 2400,
    },
    {
      name: "Page C",
      uv: 100,
      pv: 1400,
      amt: 2400,
    },
    {
      name: "Page D",
      uv: 200,
      pv: 5400,
      amt: 8400,
    },
    {
      name: "Page E",
      uv: 100,
      pv: 5400,
      amt: 8400,
    },
  ];
  const qata = [
    { name: "Page A", uv: 100, pv: 600, amt: 2400 },
    { name: "Page A", uv: 400, pv: 300, amt: 2400 },
    { name: "Page A", uv: 200, pv: 200, amt: 2400 },
    { name: "Page A", uv: 500, pv: 400, amt: 2400 },
  ];

  return (
    <HomePageWrapper>
      {loading && (
        <Loading>
          <div className="loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loading>
      )}
      {success && "Success"}
      {error && "Error"}

      <div className="wrapper">
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={img1} />
            </div>
            <img src={dots} className="img2" />
          </div>
          <p className="price-card">1234$</p>
          <div className="card-total">
            <p className="title-card">Today Sales</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+35%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={img2} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">4567$</p>
          <div className="card-total">
            <p className="title-card">Today Expenses</p>
            <div className="bb">
              <img src={Arrow} className="src" />
              <p className="p">+10%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={img3} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">8912$</p>
          <div className="card-total">
            <p className="title-card">Today Visitors</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+15%</p>
            </div>
          </div>
        </div>
        <div className="mini-card">
          <div className="card-image">
            <div className="img1">
              <img src={img4} />
            </div>
            <img src={dots} className="img2" />
          </div>

          <p className="price-card">4567$</p>
          <div className="card-total">
            <p className="title-card">Today Orders</p>
            <div className="bb">
              <img src={Arrow} />
              <p>+17%</p>
            </div>
          </div>
        </div>
      </div>
      <div className="middle">
        <div className="apexcharts1">
          <P>Sales Overview</P>
          <BarChart width={520} height={300} data={qata}>
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis />
            <Tooltip />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <Bar dataKey="uv" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>
        <div className="apexcharts2">
          <P>Analytcs</P>
          <LineChart
            width={490}
            height={300}
            data={data}
            margin={{ top: 5, bottom: 5, left: 0 }}
          >
            <Line type="monotone" dataKey="uv" stroke="#FF0000" />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
      </div>
      <div className="bottom">
        <div className="table">
          <p>Recent Product</p>
          <table>
            <tr>
              <th>Order ID</th>
              <th>Product Name</th>
              <th>Data</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>#265665</td>
              <td>
                <img
                  src="https://www.bing.com/th?id=OIP.Qig9-oaOoo2wSoIhAq7h4AHaHa&w=179&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="nike"
                />
                Nike Air Max
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg">Shipping</td>
            </tr>
            <tr>
              <td>#5252657</td>
              <td>
                <img
                  src="https://www.bing.com/th?id=OIP.PNDJjh8DrwBa04SlvvBhegHaHa&w=180&h=170&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                  alt="headphone"
                />
                Headphone
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg2">Pasding</td>
            </tr>
            <tr>
              <td>#7433755</td>
              <td>
                <img
                  src="https://www.bing.com/th?u=https%3a%2f%2ftse1.mm.bing.net%2fth%3fid%3dOIP.mn104SisZzo0wVxVpTCqXgHaMf&ehk=z%2b9%2fUtBOaXJsWaoeD25EGy1xlO%2bbsLdJ%2fyKGCw%2fir3k%3d&w=76&h=100&c=8&o=6&pid=AppEx"
                  alt="iphon"
                />
                Iphone Pro
              </td>
              <td>31/03/2021</td>
              <td>$250,00</td>
              <td className="bg3">Canseled</td>
            </tr>
          </table>
        </div>
        <div className="charts">
          <Chart
            type="donut"
            width="360"
            series={[60, 20, 20, 10]}
            options={option3}
            style={{
              margin: "30px 5px 0px 0px",
              height: "250px",
              backgroundColor: "white",
            }}
          ></Chart>
        </div>
      </div>
    </HomePageWrapper>
  );
}

export default DashboardHome;
