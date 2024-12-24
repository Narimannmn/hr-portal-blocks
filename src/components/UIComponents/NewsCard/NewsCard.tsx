'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from '@/components/ui/card'

import Image from 'next/image'
import dayjs from 'dayjs'
import icon from '@/public/arrow-right-top.svg'
import 'dayjs/locale/ru'
import { useLang } from '@/src/contexts/lang.context'
import { News } from '@/src/types/generated-types'
import { imageSource } from '@/src/utils/imageSource'
import { useRouter } from 'next/navigation'

export interface NewsCardProps {
	newItem: News
}

export function NewsCard({ newItem }: NewsCardProps) {
	const { t } = useLang()
	const router = useRouter()

	return (
		<Card className='bg-transparent border-none w-full'>
			<CardContent className='p-0 mb-8'>
				<div className='relative w-full h-[240px]'>
					<Image
						src={imageSource(newItem.preview.url || '')}
						alt={newItem.preview.url || ''}
						layout='fill'
						objectFit='cover'
						className='rounded-xl'
					/>
				</div>
			</CardContent>
			<CardHeader className='p-0 space-y-3 mb-6'>
				<CardTitle className='text-sm text-[#E1056D] overflow-hidden whitespace-nowrap text-ellipsis'>
					{t(newItem.newsGroups.name)}
				</CardTitle>
				<CardDescription className='space-y-2'>
					<div>
						<div
							onClick={() =>
								router.push(
									`${newItem.innerPage.section}/${newItem.innerPage.section_slug}`
								)
							}
							className='grid grid-cols-[1fr_10px] h-8 gap-2 items-center cursor-pointer'
						>
							<h1 className='text-2xl font-bold text-white leading-8 overflow-hidden whitespace-nowrap text-ellipsis'>
								{t(newItem.title)}
							</h1>
							<Image src={icon} alt='arrow' height={10} width={10} />
						</div>
					</div>
					<p className='text-[#D4D4D4] text-lg leading-6 overflow-hidden whitespace-nowrap text-ellipsis'>
						{t(newItem.description)}
					</p>
				</CardDescription>
			</CardHeader>
			<CardFooter className='p-0 space-x-3 text-white'>
				<Avatar>
					<AvatarImage
						src={newItem.author?.image.url || `https://github.com/shadcn.png`}
						alt='ShadCN Avatar'
						className='w-10 h-10 rounded-full'
					/>
					<AvatarFallback>CN</AvatarFallback>
				</Avatar>
				<div className='text-sm'>
					<div className='text-[#84898F]'>
						{dayjs(newItem.createdAt).locale('ru').format('DD MMMM YYYY')}
					</div>
				</div>
			</CardFooter>
		</Card>
	)
}
