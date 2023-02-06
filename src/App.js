import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../src/components/Navbar/Navbar";
import ContactList from "../src/components//Contacts/ContactList/ContactList";
import ViewContact from "../src/components/Contacts/ViewContact/ViewContact";
import AddContact from "../src/components/Contacts/AddContact/AddContact";
import EditContact from "../src/components/Contacts/EditContact/EditContact";
let App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Navigate to={"/contacts/list"} />} />
        <Route path={"/contacts/list"} element={<ContactList />} />
        <Route path={"/contacts/add"} element={<AddContact />} />
        <Route path={"/contacts/view/:contactId"} element={<ViewContact />} />
        <Route path={"/contacts/edit/:contactId"} element={<EditContact />} />
      </Routes>
    </>
  );
};

export default App;
