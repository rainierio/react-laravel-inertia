import React, { useState, useEffect } from "react";
import Layout from "../containers/Layout";
import SectionTitle from "../components/Typography/SectionTitle";
import { usePage } from "@inertiajs/inertia-react";
import {
  Avatar,
  Button,
  Pagination,
} from "@windmill/react-ui";
import { EditIcon, TrashIcon } from "../../icons";

const UserProfile = () => {
  return (
    <>
      <SectionTitle>Profile</SectionTitle>

    </>
  );
};

UserProfile.Layout = (page) => <Layout children={page} title="User Profile" />;

export default UserProfile;
