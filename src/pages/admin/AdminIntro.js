import React from "react";
import { Form, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

// admin intro component
function AdminIntro() {
  const dispatch = useDispatch();
  // global state
  const { portfolioData } = useSelector((state) => state.root);

  // on submitting the form
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      // updating intro in backend
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/portfolio/update-intro`,
        {
          ...values,
          _id: portfolioData.intros._id,
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
        initialValues={portfolioData.intros}
      >
        {/* form item */}
        {/* welcome text */}
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Welcome Text" />
        </Form.Item>
        {/* first name */}
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        {/*last name */}
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        {/* caption */}
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        {/* description */}
        <Form.Item name="description" label="Description">
          <textarea placeholder="Description" />
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

export default AdminIntro;
