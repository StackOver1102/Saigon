import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Toast from "../LoadingError/Toast";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/LoadingError";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import * as CategoryService from "../../Services/CategoryService";
import * as OrderService from "../../Services/OrderSevice";
import axios from "axios";

const AddProductMain = () => {
  const [name, setName] = useState("");
  const toastId = React.useRef(null);
  const [images, setImages] = useState([]);
  const [group, setGroup] = useState("");
  const [dataGroup, setDataGroup] = useState([]);
  const [loading, setLoading] = useState(true);
  const Toastobjects = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const mutationAddCategory = useMutationHooks(async (data) => {
    const { access_token, ...rests } = data;
    const res = await CategoryService.createCategory(rests, access_token);
    return res;
  });

  const submitHandler = async (event) => {
    event.preventDefault();
    if (group === "") {
      if (!toast.isActive(toastId.current)) {
        toastId.current = toast.error("Không được để trống!", Toastobjects);
      }
    } else {
      let uploadedImageUrls;
      try {
        const uploadPromises = images.map(async (image) => {
          const formData = new FormData();
          formData.append("file", image);
          formData.append("upload_preset", "Project1");

          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/dgeeyhyzq/image/upload`,
            formData
          );
          return response.data.secure_url;
        });

        uploadedImageUrls = await Promise.all(uploadPromises);
      } catch (error) {
        console.log(error);
      }
      await mutationAddCategory.mutate({
        group_id: group,
        images: uploadedImageUrls,

      });
    }
  };

  const { error, isLoading, isSuccess, isError } = mutationAddCategory;
  useEffect(() => {
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
  }, [error, isSuccess]);

  useEffect(() => {
    const getData = async () => {
      const response = await OrderService.getAll();
      if (response) {
        setDataGroup(response);
        setLoading(false);
      }
    };
    getData();
  }, []);
  const handleFileInputChange = (event) => {
    const selectedImages = Array.from(event.target.files);
    setImages(selectedImages);
  };
  return (
    <>
      <Toast />
      {loading ? (
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
      ) : (
        <section className="content-main" style={{ maxWidth: "1200px" }}>
          <form onSubmit={submitHandler}>
            <div className="content-header">
              <Link to="/menu" className="btn btn-danger text-white">
                Go go menu
              </Link>
              <h2 className="content-title">Add new Menu</h2>
              <div>
                <button type="submit" className="btn btn-primary">
                  Add
                </button>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-xl-12 col-lg-12">
                <div className="card mb-4 shadow-sm">
                  <div className="card-body">
                    <div className="mb-4">
                      <label htmlFor="product_title" className="form-label">
                        Groups
                      </label>
                      <select
                        className="form-select text-capitalize"
                        aria-label="Default select example"
                        onChange={(e) => {
                          setGroup(e.target.value);
                        }}
                      >
                        <option value="1">Choose Groups</option>
                        {dataGroup?.map((item, index) => (
                          <option
                            key={index}
                            value={item._id}
                            className="text-capitalize"
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="mb-3">
                      <label for="formFileMultiple" class="form-label">
                        Images
                      </label>
                      <input
                        class="form-control"
                        type="file"
                        id="formFileMultiple"
                        onChange={handleFileInputChange}
                        multiple
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      )}
    </>
  );
};

export default AddProductMain;
