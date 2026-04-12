import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../LoadingError/LoadingError";
import * as CategoryService from "../../Services/CategoryService";
import Table from "../Table/Table";
import { toast } from "react-toastify";
import Toast from "./../LoadingError/Toast";
const origin = "admin";

const MainCategory = () => {
  const [loading, setLoading] = useState(false);
  const [tempData, setTempData] = useState([]);
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
  const handleDelete = async (id) => {
    if (id) {
      const access_token = JSON.parse(localStorage.getItem("access_token"));
      if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
        await CategoryService.deleteCategory(id, access_token)
          .then((res) => {
            if (!toast.isActive(toastId.current)) {
              toastId.current = toast.success("Thành công!", Toastobjects);
            }
            // hangldeGetAll();
            setTimeout(() => {
              window.location.reload();
            }, 500);
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
      name: "Images",
      selector: (row) => (
        <img
          src={row.images[0]}
          class="img-thumbnail"
          style={{ maxWidth: "50%" }}
        />
      ),
    },
    {
      name: "Group Name",
      selector: (row) => row.group_id.name,
      sortable: true,
    },
    {
      name: "Action",
      selector: (row) => (
        <>
          <Link
            style={{ marginLeft: "15px" }}
            onClick={() => handleDelete(row._id)}
            // className="btn btn-sm btn-outline-success p-2 pb-3 col-md-6"
          >
            <button className="btn btn-danger">Xóa</button>
          </Link>
        </>
      ),
    },
  ];
  const hangldeGetAll = async () => {
    setLoading(true);
    const resCategory = await CategoryService.getCategory(origin);
    setLoading(false);
    setTempData(resCategory);

    // dispatch(updatePay(res));
  };
  useEffect(() => {
    hangldeGetAll();
  }, []);

  return (
    <>
      <Toast />
      <section className="content-main">
        <div className="content-header">
          <h2 className="content-title">Menu</h2>
          <div>
            <Link to="/addMenu" className="btn btn-primary">
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

export default MainCategory;
