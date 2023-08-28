import React from 'react';
import SearchHeader from '../components/SearchHeader';
import { Outlet } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export default function DefaultPage() {

  const queryClient = new QueryClient();

  return (
    <>
      <SearchHeader />
      <QueryClientProvider client={queryClient}>
        <div className='mt-16 p-4'>
          <Outlet />
        </div>
      </QueryClientProvider>
    </>
  );
}

