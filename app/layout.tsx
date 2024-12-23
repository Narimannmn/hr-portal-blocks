import './globals.css'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { cookies } from 'next/headers'
import Footer from '@/src/components/layoutComponents/Footer/Footer'
import Header from '@/src/components/layoutComponents/Header/Header'
import clsx from 'clsx'
import Providers from '@/src/contexts/providers'

const inter = Inter({ subsets: ['cyrillic'] })

export const metadata: Metadata = {
	title: 'Euro corp web site',
	description: 'We are a company',
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const lang =
		(await cookies()).get('lang')?.value === 'Рус'
			? 'ru'
			: (await cookies()).get('lang')?.value === 'Қаз'
			? 'kk'
			: 'en'
	return (
		<html lang={lang}>
			<head>
				<title>Euro corp web site</title>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<meta name='description' content='We are a company' />
			</head>
			<body
				className={clsx(
					inter.className,
					'bg-[#0A0B09]',
					'flex',
					'flex-col',
					'w-full',
					'custom-gradient'
				)}
			>
				<Header />
				<div className='mb-auto'>
					<Providers>{children}</Providers>
				</div>
				<Footer />
			</body>
		</html>
	)
}
