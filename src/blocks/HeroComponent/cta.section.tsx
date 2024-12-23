'use client'
import styled from "styled-components"

interface CtaSectionProps {
	title: string
	description?: string
}

export const CtaSection: React.FC<CtaSectionProps> = ({
	title,
	description,
}) => {
	return (
		<Column>
			<ContentWrapper>
				<Title>{title}</Title>
				{description && <Description>{description}</Description>}
			</ContentWrapper>
		</Column>
	)
}

const Column = styled.div`
	display: flex;
	flex-direction: column;
	width: 50%;
	height: 100%;
	align-items: center;
	justify-content: center;

	@media (max-width: 991px) {
		width: 100%;
	}
`

const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
	font-family: Inter, sans-serif;
	font-weight: 500;
	color:white;
`

const Title = styled.h1`
	color: white;
	font-size: 48px;
	font-weight: 700;
	line-height: 1;
	word-break: break-word;
`

const Description = styled.p`
	color: white;
	font-size: 20px;
	line-height: 26px;
	align-self: stretch;
	margin-top: 20px;
	word-break: break-word;
`