import { Form, message, Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";

// admin experience component
function AdminExperiences() {

  const dispatch = useDispatch();
  // global state
  const { portfolioData } = useSelector((state) => state.root);
  // destructuring portfolioData
  const { experiences } = portfolioData;

  // states
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = useState("add");

  
// on submitting the form
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;

      // if selected item for edit is not null update experience
      if (selectedItemForEdit) {
        response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/portfolio/update-experience`,
          {
            ...values,
            _id: selectedItemForEdit._id,
          }
        );
      } else {
        // if selected item for edit is null add experience
        response = await axios.post(
          `${process.env.REACT_APP_SERVER_URL}/api/portfolio/add-experience`,
          values
        );
      }

      dispatch(HideLoading());
      // if success
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModal(false);
        setSelectedItemForEdit(null);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  // on delete
  const onDelete = async (item) => {

    try {
      dispatch(ShowLoading());
      // deleting experience in backend
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/api/portfolio/delete-experience`,
        {
          _id: item._id,
        }
      );
      dispatch(HideLoading());
      // if success
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(HideLoading());
        dispatch(ReloadData(true));
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
      <div className="flex justify-end">
        {/* add experience button */}
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Experience
        </button>
      </div>

      <div className="grid grid-cols-4 gap-5 mt-5 sm:grid-cols-1">
        {/* maping the array of experiences in the backend */}
        {experiences.map((experience) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-3">
            {/* period */}
            <h1 className="text-primary text-xl font-bold">
              {experience.period}
            </h1>
            <hr />
            {/* company name */}
            <h1>Company : {experience.company}</h1>
            {/* role */}
            <h1>Role : {experience.title}</h1>
            {/* description */}
            <h1>{experience.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              {/* delete button */}
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => {
                  onDelete(experience);
                }}
              >
                Delete
              </button>
              {/* edit button */}
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(experience);
                  setShowAddEditModal(true);
                  setType("edit");
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

{/* show the modal if any is true */}
      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          // title
          title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
          footer={null}
          onCancel={() => {
            setShowAddEditModal(false);
            setSelectedItemForEdit(null);
          }}
        >
          {/* form */}
          <Form
            layout="vertical"
            onFinish={onFinish}
            initialValues={selectedItemForEdit || {}}
          >
            {/* form item */}
            {/* period */}
            <Form.Item name="period" label="Period">
              <input placeholder="Period" />
            </Form.Item>
            {/* company */}
            <Form.Item name="company" label="Company">
              <input placeholder="Company" />
            </Form.Item>
            {/* title */}
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            {/* description */}
            <Form.Item name="description" label="Description">
              <input placeholder="Description" />
            </Form.Item>

            <div className="flex justify-end">
              {/* cancel button */}
              <button
                className="border-primary text-primary px-5 py-2"
                onClick={() => {
                  setShowAddEditModal(false);
                  setSelectedItemForEdit(null);
                }}
              >
                Cancel
              </button>
              {/* update/add button */}
              <button className="bg-primary text-white px-5 py-2">
                {selectedItemForEdit ? "Update" : "Add"}
              </button>
            </div>
          </Form>
        </Modal>
      )}
    </div>
  );
}

export default AdminExperiences;
