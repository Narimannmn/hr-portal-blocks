import { ImageBlockLayout } from '@/src/types/page.type'
import React from 'react'
import Image from 'next/image'
import { imageSource } from '@/src/utils/imageSource'
export const ImageBlockComponent = ({ image }: ImageBlockLayout) => {
  console.log(image)
	return (
		<div
			className={`relative w-[${image.width ? image.width : '150px'}] h-[${
				image.height ? image.height : '150px'
			}]`}
		>
			<Image
				alt={image.alt}
				src={imageSource(image.url || '')}
				layout='fill'
				objectFit='cover'
			/>
		</div>
	)
}
