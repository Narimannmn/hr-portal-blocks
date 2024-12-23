import { imageSource } from '@/src/utils/imageSource'
import styled from 'styled-components'

export const PageWrapper = styled.main`
	background-color: #eeeff0;
	display: flex;
	justify-content: center;
	min-height: 456px;
	width: 100%;
	border-radius: 30px;
`

export const ContentContainer = styled.section<{ $backgroundColor: string }>`
	width: 100%;
	border-radius: 30px;
	background-color: ${props =>
		props.$backgroundColor.includes('linear-gradient')
			? 'transparent'
			: props.$backgroundColor};
	background: ${props => props.$backgroundColor};
	overflow: hidden;
	padding-left: 48px;

	display: flex;

	@media (max-width: 991px) {
		max-width: 100%;
		padding: 0 20px;
	}
`

export const TwoColumnLayout = styled.div`
	width: 100%;
	display: flex;
	gap: 20px;
	@media (max-width: 991px) {
		flex-direction: column;
		align-items: stretch;
	}
`

export const Column = styled.div<{ $bgType: 'center' | 'bottom' | 'contain' }>`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-left: 20px;
	justify-content: ${props =>
		props.$bgType === 'bottom' ? 'flex-end' : 'center'};

	@media (max-width: 991px) {
		width: 100%;
		margin-left: 0;
	}
`

export const Placeholder = styled.div<{
	$url: string
	$bgType: 'center' | 'bottom' | 'contain'
	$backgroundSize?: number
	$right?: number
}>`
	background-image: url(${props => imageSource(props.$url)});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	width: auto;
	max-width: 100%;
	height: ${props => (props.$bgType === 'contain' ? '100%' : '80%')};
	margin-right: ${props => (props.$right ? `${props.$right}px` : '0')};
	margin: ${props => props.$backgroundSize && props.$backgroundSize};

	@media (max-width: 991px) {
		margin-top: 40px;
		width: 100%;
		height: 300px;
	}
`
