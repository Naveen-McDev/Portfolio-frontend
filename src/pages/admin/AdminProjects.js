import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Form, message } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

// admin project component
function AdminProjects() {
  const dispatch = useDispatch();
  // global state
  const { portfolioData } = useSelector((state) => state.root);
  // destructure
  const { projects } = portfolioData;
  // states
  const [showAddEditModal, setShowAddEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [type, setType] = React.useState("add");

  const onFinish = async (values) => {
    try {
      // splitting the string
      const tempTechnologies = values?.technologies?.split(",") || [];
      values.technologies = tempTechnologies;
      dispatch(ShowLoading());
      let response;
      // it selected item for edit is not null then edit project
      if (selectedItemForEdit) {
        response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/portfolio/update-project`, {
          ...values,
          _id: selectedItemForEdit._id,
        });
      } else {
        // if selected item for edit is null then add project
        response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/portfolio/add-project`, values);
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
        // if not success
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
      // deleting projects in backend
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/api/portfolio/delete-project`, {
        _id: item._id,
      });
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
        {/* add project button */}
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemForEdit(null);
            setShowAddEditModal(true);
          }}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {/* mapping project array */}
        {projects.map((project) => (
          <div className="shadow border p-5 border-gray-400 flex flex-col gap-5">
            {/* title */}
            <h1 className="text-primary text-xl font-bold">{project.title}</h1>
            <hr />
            {/* image */}
            <img src={project.image} alt="" className="h-60 w-80" />
            {/* description */}
            <h1>{project.description}</h1>
            <div className="flex justify-end gap-5 mt-5">
              {/* delete button */}
              <button
                className="bg-red-500 text-white px-5 py-2 "
                onClick={() => {
                  onDelete(project);
                }}
              >
                Delete
              </button>
              {/* edit button */}
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemForEdit(project);
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


{/* if any one is true show the modal */}
      {(type === "add" || selectedItemForEdit) && (
        <Modal
          visible={showAddEditModal}
          // title
          title={selectedItemForEdit ? "Edit Project" : "Add Project"}
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
            initialValues={
              {
                ...selectedItemForEdit,
                technologies: selectedItemForEdit?.technologies?.join(" , "),
              } || {}
            }
          >
            {/* form item */}
            {/* title */}
            <Form.Item name="title" label="Title">
              <input placeholder="Title" />
            </Form.Item>
            {/* image */}
            <Form.Item name="image" label="Image URL">
              <input placeholder="Image" />
            </Form.Item>
            {/* description */}
            <Form.Item name="description" label="Description">
              <textarea placeholder="Description" />
            </Form.Item>
            {/* link */}
            <Form.Item name="link" label="Link">
              <input placeholder="Link" />
            </Form.Item>
            {/* technologies */}
            <Form.Item name="technologies" label="Technologies">
              <input placeholder="Technologies" />
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

export default AdminProjects;