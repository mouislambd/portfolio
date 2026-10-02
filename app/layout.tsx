'use client';
import { Space_Grotesk, Inter, JetBrains_Mono, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import Footer from '@/components/Footer';
import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kanich Fatema Mou | Portfolio',
  description: 'Portfolio of Kanich Fatema Mou, showcasing projects and skills.',
};

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  weight: ['400', '500'],
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  style: ['italic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} ${playfairDisplay.variable} font-body bg-[#FDFBF7] text-[#1A202C] antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}