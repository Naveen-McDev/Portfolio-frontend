import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";

// admin component
function Admin() {
  // global state
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      {/* header component */}
      <Header />

      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          {/* title */}
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
        {/* logout button */}
        <h1
          className="underline text-primary text-xl cursor-pointer"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>

      {/* if portfolio data is present */}
      {portfolioData && (
        <div className="px-5 pb-10">
          {/* tabs */}
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              {/* admin intro component */}
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              {/* admin about component */}
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="3">
              {/* admin experiences component */}
              <AdminExperiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              {/* admin projects */}
              <AdminProjects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="5">
              {/* admin contact */}
              <AdminContact />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;
