import React from "react";
import { Form } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
import { message } from "antd";

// Admin about component
function AdminAbout() {
  const dispatch = useDispatch();
  // global state
  const { portfolioData } = useSelector((state) => state.root);

  // on submitting the form
  const onFinish = async (values) => {
    try {
      // splitting the string
      const tempSkills = values.skills.split(",");
      values.skills = tempSkills;
      dispatch(ShowLoading());
      //update the data
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/portfolio/update-about`,
        {
          ...values,
          _id: portfolioData.about._id,
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
        initialValues={{
          ...portfolioData.about,
          skills: portfolioData.about.skills.join(" , "),
        }}
      >
        {/* form items */}
        {/* url */}
        <Form.Item name="lottieURL" label="Lottie URL">
          <input placeholder="Lottie URL" />
        </Form.Item>

        {/* description1 */}
        <Form.Item name="description1" label="Description1">
          <textarea placeholder="Description1" />
        </Form.Item>

        {/* description2 */}
        <Form.Item name="description2" label="Description2">
          <textarea placeholder="Description2" />
        </Form.Item>

        {/* skills */}
        <Form.Item name="skills" label="Skills">
          <textarea placeholder="Skills" />
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

export default AdminAbout;
