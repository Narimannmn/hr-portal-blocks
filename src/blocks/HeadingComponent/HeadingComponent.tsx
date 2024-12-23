import { useLang } from '@/src/contexts/lang.context'
import { HeadingLayout } from '@/src/types/page.type'
import React from 'react'

export const HeadingComponent = ({ title,description,type }:HeadingLayout) => {
  const {t} = useLang()
  return (
		<div className={type == 'left' ? 'text-left' : 'text-center'}>
			<h1 className='pb-5 text-4xl'>{t(title)}</h1>
			<p className='text-lg text-[#D4D4D4]'>{description && t(description)}</p>
		</div>
	)
}
