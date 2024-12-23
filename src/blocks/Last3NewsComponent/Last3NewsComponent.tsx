import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useLang } from '@/src/contexts/lang.context'
import { Last3NewsLayout } from '@/src/types/page.type'
import { imageSource } from '@/src/utils/imageSource'
import React from 'react'
import Image from 'next/image'

export const Last3NewsComponent = ({lastThreeNews}:Last3NewsLayout) => {
  const { t } = useLang()
	return (
		lastThreeNews.length > 2 && (
			<div className='pt-8 pb-24'>
				<div className='relative grid grid-cols-1 lg:grid-cols-2 gap-8 w-full lg:h-[432px] h-full'>
					<div className='lg:min-h-full flex flex-col'>
						<Card className='bg-transparent border-none h-full space-y-8'>
							<CardContent className='p-0'>
								<div className='relative lg:h-[280px] h-[240px]'>
									<Image
										src={imageSource(lastThreeNews[0].preview.url || '')}
										alt={lastThreeNews[0].preview.alt}
										objectFit='cover'
										className='rounded-xl'
										fill
									/>
								</div>
							</CardContent>
							<CardHeader className='p-0 space-y-3 mb-6'>
								<CardTitle className='text-sm text-[#E1056D]'>
									{t(lastThreeNews[0].newsGroups.name)}
								</CardTitle>
								<CardDescription className='space-y-2'>
									<div className='flex h-8 overflow-hidden whitespace-nowrap text-ellipsis'>
										<h1 className='text-2xl font-bold text-white leading-8'>
											{t(lastThreeNews[0].title)}
										</h1>
									</div>
									<p className='text-[#D4D4D4] text-lg leading-6'>
										{t(lastThreeNews[0].description)}
									</p>
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
					<div className='lg:min-h-full grid grid-rows-2 gap-y-8'>
						<Card className='bg-transparent grid grid-cols-2 gap-6 border-none'>
							<CardContent className='p-0'>
								<div className='relative h-full'>
									<Image
										src={imageSource(lastThreeNews[1].preview.url || '')}
										alt={lastThreeNews[1].preview.alt}
										objectFit='cover'
										className='rounded-xl'
										fill
									/>
								</div>
							</CardContent>
							<CardHeader className='p-0 space-y-3 h-full'>
								<CardTitle className='text-sm text-[#E1056D]'>
									{t(lastThreeNews[1].newsGroups.name)}
								</CardTitle>
								<CardDescription className='space-y-2'>
									<div className='flex'>
										<h1 className='text-2xl font-bold text-white leading-8'>
											{t(lastThreeNews[1].title)}
										</h1>
									</div>
									<p className='text-[#D4D4D4] text-lg leading-6 overflow-hidden whitespace-nowrap text-ellipsis'>
										{t(lastThreeNews[1].description)}
									</p>
								</CardDescription>
							</CardHeader>
						</Card>
						<Card className='bg-transparent grid grid-cols-2 gap-6 border-none'>
							<CardContent className='p-0'>
								<div className='relative h-full'>
									<Image
										src={imageSource(lastThreeNews[0].preview.url || '')}
										alt={lastThreeNews[2].preview.alt}
										objectFit='cover'
										className='rounded-xl'
										fill
									/>
								</div>
							</CardContent>
							<CardHeader className='p-0 space-y-3 h-full'>
								<CardTitle className='text-sm text-[#E1056D]'>
									Фин-тех
								</CardTitle>
								<CardDescription className='space-y-2'>
									<div className='flex'>
										<h1 className='text-2xl font-bold text-white leading-8'>
											{t(lastThreeNews[2].title)}
										</h1>
									</div>
									<p className='text-[#D4D4D4] text-lg leading-6 overflow-hidden whitespace-nowrap text-ellipsis'>
										{t(lastThreeNews[2].description)}
									</p>
								</CardDescription>
							</CardHeader>
						</Card>
					</div>
				</div>
			</div>
		)
	)
}
