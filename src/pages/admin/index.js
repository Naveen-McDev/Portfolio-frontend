import React, { useEffect } from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import { useSelector } from "react-redux";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";

function Admin() {
  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center">
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500"></div>
        </div>
      </div>
      {portfolioData && (
        <div className="px-5 pb-10">
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Intro" key="1">
              <AdminIntro />
            </Tabs.TabPane>
            <Tabs.TabPane tab="About" key="2">
              <AdminAbout />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Experiences" key="3">
              <AdminExperiences />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Projects" key="4">
              <AdminProjects />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Contact" key="5">
              <AdminContact />
            </Tabs.TabPane>
          </Tabs>
        </div>
      )}
    </div>
  );
}

export default Admin;