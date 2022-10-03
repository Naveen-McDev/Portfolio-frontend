import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

// admin contact component
function AdminContact() {
  const dispatch = useDispatch();
  // global state
  const { portfolioData } = useSelector((state) => state.root);

  // onsubmitting the form
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      // updating the contact in backend
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/portfolio/update-contact`,
        {
          ...values,
          _id: portfolioData.contact._id,
        }
      );
      dispatch(HideLoading());
      // if success
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        // if not success
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      {/* form */}
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.contact}
      >
        {/* form items */}
        {/* name */}
        <Form.Item name="name" label="Name">
          <input placeholder="Name" />
        </Form.Item>

        {/* email */}
        <Form.Item name="email" label="Email">
          <input placeholder="Email" />
        </Form.Item>

        {/* mobile */}
        <Form.Item name="mobile" label="Mobile">
          <input placeholder="Mobile" />
        </Form.Item>

        {/* address */}
        <Form.Item name="address" label="Address">
          <input placeholder="Address" />
        </Form.Item>

        <div className="flex justify-end w-full" label="Welcome Text">
          {/* save button */}
          <button className="px-10 py-2 bg-primary text-white" type="submit">
            SAVE
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
