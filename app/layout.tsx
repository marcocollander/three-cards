import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from '@/components/AuthProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Gra w trzy karty',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en' className={'bg-green-800'}>
            <body className={inter.className}>
                <Toaster position={'bottom-right'} />
                <AuthProvider>
                    <Header />
                    {children}
                </AuthProvider>
                <Footer />
            </body>
        </html>
    );
}
