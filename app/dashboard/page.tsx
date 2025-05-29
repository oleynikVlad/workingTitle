import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const Dashboard = async () => {
  const session = await getServerSession();
  console.log(session);
  if (!session) {
    redirect("/");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
