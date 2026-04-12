import React, { useState, useEffect } from "react";
import Toast from "../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/LoadingError";
import * as PayService from "../../Services/OrderSevice";
import { fetchAsyncProductSingle } from "../../features/productSlide/productSlice";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import { updateProductSingle } from "../../features/productSlide/ProductSliceNew";

const EditOrderMain = (props) => {
  const { id } = props;

  const [loading, setLoading] = useState(true);
  const [nameGroup, setNameGroup] = useState("");

  const [status, setStatus] = useState(false);

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
  const dispatch = useDispatch();

  const handleGetDetailsProduct = async (id, access_token) => {
    const res = await PayService.getDetilsPay(id, access_token);
    // setAddress(res.address_line1);
    // setQuatity(res.products[0].quantity);
    // setStatus(res.isSucces);
    // dispatch(updateProductSingle({ res }));
  };
  // const { productSingle } = useSelector((state) => state.ProductSignle);
  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    PayService.updatePay(id, rests, access_token);
  });
  const { data, error, isLoading, isError, isSuccess } = mutation;
  const handleUpdate = (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem("access_token");
    const convert_acces_token = JSON.parse(access_token);
    mutation.mutate({
      id,
      status,
      access_token: convert_acces_token,
    });
    setLoading(false)

    // mutation.mutate(decoded?.id, { phone, name, email, sex })
  };

  useEffect(() => {
    const access_token = localStorage.getItem("access_token");

    handleGetDetailsProduct(id, JSON.parse(access_token));
    if (!error && isSuccess) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.success("Thành công!", Toastobjects);
      }
    } else if (error) {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error(
          error.response.data.message,
          Toastobjects
        );
      }
    }
  }, [id, error, isSuccess]);
  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        {loading && (
          <>
            <div className="position-absolute w-screen h-screen bg-gray-50 z-10 border border-gray-200 rounded-lg">
              <div
                role="status"
                className={"position-relative left-1/3 top-1/3"}
              >
                <svg
                  aria-hidden="true"
                  className="Toastify__spinner"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </>
        )}
        <form onSubmit={handleUpdate}>
          <div className="content-header">
            <Link to="/groups" className="btn btn-danger text-white">
              Go to Group
            </Link>
            <h2 className="content-title">Edit Group</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Edit
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-12 col-lg-12">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {/* Error Loading */}
                  {false && <Message variant="alert-danger">error</Message>}
                  {/* Update Loading */}

                  {/* {productSingleStatus && <Loading />} */}

                  {/* productSingleStatus Loading */}
                  {false ? (
                    <Loading />
                  ) : (
                    <>
                      {/* <div className="mb-4">
                        <label htmlFor="product_title" className="form-label">
                          Address
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                          id="product_title"
                          required
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </div> */}
                      {/* <div className="mb-4">
                        <label className="form-label">Quantity</label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          required
                          value={quantity}
                          onChange={(e) => setQuatity(e.target.value)}
                        ></input>
                      </div> */}
                      <div className="mb-4">
                        <label className="form-label">Name Group</label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          required
                          value={nameGroup}
                          onChange={(e) => setNameGroup(e.target.value)}
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">Start</label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          required
                          value={nameGroup}
                          onChange={(e) => setNameGroup(e.target.value)}
                        ></input>
                      </div>
                      <div className="mb-4">
                        <label className="form-label">End</label>
                        <input
                          type="number"
                          placeholder="Type here"
                          className="form-control"
                          required
                          value={nameGroup}
                          onChange={(e) => setNameGroup(e.target.value)}
                        ></input>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditOrderMain;
