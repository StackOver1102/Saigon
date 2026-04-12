import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../LoadingError/LoadingError";
import * as ProductService from "../../Services/ProductService";
import Table from "../Table/Table";
import { toast } from "react-toastify";
import Toast from "./../LoadingError/Toast";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);
const Dubai_Timezone = "Asia/Dubai";

const MainProducts = () => {
  const [loading, setLoading] = useState(false);

  const [tempData, setTempData] = useState([]);
  const [search, SetSearch] = useState("");

  const toastId = React.useRef(null);
  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const formattedAmount = (amount, options) => {
    return amount.toLocaleString(undefined, options);
  };
  const handleDelete = async (id) => {
    if (id) {
      if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
        await ProductService.deleteProduct(id)
          .then((res) => {
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.success("Thành công!", Toastobjects);
            }
            hangldeGetAll();
            window.location.reload();
          })
          .catch((error) => {
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.error(error, Toastobjects);
            }
          });
      }
    }
  };
  const columns = [
    {
      name: "Image",
      selector: (row) => (
        <img
          src={row.image}
          // alt={row.title}
          class="img-thumbnail"
          style={{ maxWidth: "50%" }}
        />
      ),
    },
    {
      name: "Content",
      selector: (row) => row.content,
    },
    {
      name: "Tittle",
      selector: (row) => row.tittle,
    },
    {
      name: "Description",
      selector: (row) => row.description,
    },
    {
      name: "Created At",
      selector: (row) => {
        return dayjs(row.createdAt)
          .utc()
          .tz(Dubai_Timezone)
          .format("YYYY-MM-DD HH:mm:ss");
      },
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            to={`/events/${row._id}/edit`}
            className="btn p-2 pb-3 col-md-6"
            style={{ display: "inline" }}
          >
            <button className="btn btn-warning">Sửa</button>
          </Link>
          <Link
            style={{ marginLeft: "10px", display: "inline" }}
            onClick={() => handleDelete(row._id)}
            className="btn  p-2 pb-3 col-md-6"
          >
            <button className="btn btn-danger">Xóa</button>
          </Link>
        </>
      ),
    },
  ];
  const hangldeGetAll = async () => {
    setLoading(true);
    const resProduct = await ProductService.getAll();
    setLoading(false);
    setTempData(resProduct);

    // dispatch(updatePay(res));
  };
  useEffect(() => {
    if (search === "") {
      hangldeGetAll();
    } else {
      const result = tempData.filter((idProduct) => {
        return idProduct.id.toString().match(search.toLowerCase());
      });
      console.log(result);
      setTempData(result);
    }
  }, [search]);

  return (
    <>
      <Toast />
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Events</h2>
          <div>
            <Link to="/addEvent" className="btn btn-primary">
              Add new
            </Link>
          </div>
        </div>

        <div className="card mb-4 shadow-sm">
          <div className="card-body">
            {loading ? (
              <Loading />
            ) : (
              <div className="row">
                <Table data={tempData} columns={columns} sub={true} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default MainProducts;
