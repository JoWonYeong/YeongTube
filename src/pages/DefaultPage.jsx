import React from 'react';
import SearchHeader from '../components/SearchHeader';
import { Outlet } from 'react-router-dom';

export default function DefaultPage() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}

