import React, { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/AuthProvider.jsx";

import { Avatar, List } from 'flowbite-react';

const PersonalBook = () => {
    const { user } = useContext(AuthContext);

  return (
    <div className='mt-12 mx-4'>
       <Avatar img={user?.photoURL} className="mb-4" rounded status="online" statusPosition="top-right" />
       <List unstyled>
      <List.Item className="text-red-400">{user?.displayName}</List.Item>
      <List.Item>{user?.reloadUserInfo.email}</List.Item>
      <List.Item>ID: {user?.reloadUserInfo.localId}</List.Item>
      <List.Item>Ngày tạo: {user?.metadata.createdAt}</List.Item>
      <List.Item>Thời điểm: {user?.metadata.creationTime}</List.Item>
      <List.Item>Gần nhất: {user?.metadata.lastLoginAt}</List.Item>
      <List.Item>Gần đây: {user?.metadata.lastSignInTime}</List.Item>
      <List.Item>Tạo lúc: {user?.reloadUserInfo.lastRefreshAt}</List.Item>
    </List>
    </div>
  )
}

export default PersonalBook
