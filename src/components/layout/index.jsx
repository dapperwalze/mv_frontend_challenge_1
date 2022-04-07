import React from "react";
import { Routes, Route } from "react-router-dom";
import PageContent from "./Content/index";
import Home from "./../../pages/Home";
import Sider from "./Sider/index";
import "./page-layout.scss";
import NotFound from "./../../pages/NotFound";
import ComingSoon from "./../../pages/ComingSoon";

const PageLayout = () => {
  return (
    <div className="pageLayout">
      <Sider />
      <PageContent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="invest" element={<ComingSoon />} />
          <Route path="account" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageContent>
    </div>
  );
};
export default PageLayout;
