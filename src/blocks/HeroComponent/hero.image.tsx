import { FC } from 'react'
import { Column, Placeholder } from './hero.style'

export const HeroImage: FC<{
	url: string
	bgType: 'center' | 'bottom' | 'contain'
	right?: number
	backgroundSize?: number
}> = ({ url, bgType, backgroundSize, right }) => {
	return (
		<Column $bgType={bgType}>
			<Placeholder
				$right={right}
				$backgroundSize={backgroundSize}
				$url={url}
				$bgType={bgType}
			/>
		</Column>
	)
}
