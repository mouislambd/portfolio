// 'use client';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kanich Fatema Mou | Portfolio',
  description: 'Portfolio of Kanich Fatema Mou, showcasing projects and skills.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className="font-body bg-[#FDFBF7] text-[#1A202C] antialiased"
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}