"use client";
import React from "react";
import { api } from "../api/api";

const Contacts = () => {
  console.log(api.get("/user", { withCredentials: true }));
  return <div>Contacts</div>;
};

export default Contacts;
