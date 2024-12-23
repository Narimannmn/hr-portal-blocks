import { SpaceFillerLayout } from '@/src/types/page.type'
import styled from 'styled-components'

export const SpaceFillerContainer = styled.div<{
	$height: number
}>`
	display: block;
	width: 100%;
	height: ${({ $height }) => $height}px;
	margin: 0;
	padding: 0;
	background-color: transparent;
`

export type TSpaceFillerProps = {
	height: number
	mobileHeight: number
}

export const SpaceFillerComponent = ({
	height = 10,
}: SpaceFillerLayout) => {
	return (
		<div className='container'>
			<SpaceFillerContainer $height={height} />
		</div>
	)
}
