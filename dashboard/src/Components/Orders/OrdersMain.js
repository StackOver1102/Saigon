import React, { useEffect, useState } from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/LoadingError";
import Orders from "./Orders";
import * as OrderService from "../../Services/OrderSevice";
import { Link } from "react-router-dom";
const OrderMain = () => {

  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");
  const [tempData, setTempData] = useState([]);
  const [search, SetSearch] = useState("");

  const hangldeGetAll = async () => {
    setLoading(true);
    const access_token = localStorage.getItem("access_token")
    await OrderService.getAll(JSON.parse(access_token))
      .then((res) => {
        setLoading(false);
        setTempData(res);
      })
      .catch((error) => {
        setError(error);
      });

  };
  useEffect(() => {
    if (search === "") {
      hangldeGetAll();
    } else {
      const result = tempData.filter((product) => {
        const values = Object.values(product).join().toLowerCase();
        return values.includes(search.toLowerCase());
      });
      setTempData(result);
    }
  }, [search]);
  return (
    <>
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Group</h2>
          <div>
            <Link to="/addGroup" className="btn btn-primary">
              Add new
            </Link>
          </div>
        </div>

        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            <div className="table-responsive">
              {loading ? (
                <Loading />
              ) : error ? (
                <Message variant="alert-danger">{error}</Message>
              ) : (
                <Orders data={tempData} search={search} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderMain;
