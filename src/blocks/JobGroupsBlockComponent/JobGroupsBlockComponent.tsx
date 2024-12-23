import { useLang } from '@/src/contexts/lang.context'
import { JobGroupsBlockLayout } from '@/src/types/page.type'
import { imageSource } from '@/src/utils/imageSource'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import arrow from '@/public/arrow-right.svg'

export const JobGroupsBlockComponent = ({description,title,jobGroups,linkType,customLink,pageSlug}:JobGroupsBlockLayout) => {
  const { t } = useLang()
	return (
		<div className='py-24'>
			<div className='text-center flex flex-col justify-center gap-16'>
				<div className='flex justify-center'>
					<div className='w-1/2'>
						<h1 className='font-bold text-4xl mb-5'>{t(title)}</h1>
						<p className='text-xl'>{t(description)}</p>
					</div>
				</div>
				<div className='grid grid-cols-3 gap-16'>
					{jobGroups.map(group => (
						<div className='flex flex-col justify-center' key={group.id}>
							<div className='flex justify-center align-middle'>
								<Image
									src={imageSource(group.icon?.url || '')}
									width={64}
									height={64}
									className='mb-4'
									alt={'icon'}
								/>
							</div>
							<div className='text-center'>
								<h3>{t(group.name)}</h3>
								<p className='text-[#D4D4D4] mb-5'>{t(group.description)}</p>
								<div className='flex align-middle justify-center'>
									<Link
										href={(linkType == 'custom' ? customLink : pageSlug) || ''}
										className='text-[#E1056D]'
									>
										Смотреть вакансии
									</Link>
									<Image src={arrow} alt={'icon right'} className='ml-2' />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
