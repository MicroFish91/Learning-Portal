import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <div>
      <Header />
      <Sidebar />
      test
      <Footer />
    </div>
  );
};

export default Dashboard;
