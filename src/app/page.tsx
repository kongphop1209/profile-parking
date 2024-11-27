"use client"

import React from 'react';
import dynamic from 'next/dynamic';

const Index = dynamic(() => import('@/app/pages/index'), { ssr: false });

export default function Home() {
  return (
    <main>
    <Index/>
    </main>
  );
}

