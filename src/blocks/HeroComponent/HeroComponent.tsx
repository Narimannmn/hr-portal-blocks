import { HeroLayout } from '@/src/types/page.type'
import { CtaSection } from './cta.section'
import { HeroImage } from './hero.image'
import { ContentContainer, PageWrapper, TwoColumnLayout } from './hero.style'
import { useLang } from '@/src/contexts/lang.context'

export const HeroComponent = ({
	title,
	subtitle,
	backgroundColor,
	secondaryColor,
	heroImage,
	bgType,
	right,
	backgroundSize,
}:HeroLayout) => {
	const getBackgroundColor = secondaryColor
		? `linear-gradient(272.4deg, ${backgroundColor} -1.95%, ${secondaryColor} 97.9%)`
		: backgroundColor

	const { t } = useLang()
	return (
		<PageWrapper>
			<ContentContainer $backgroundColor={getBackgroundColor}>
				<TwoColumnLayout>
					<CtaSection
						title={t(title)}
						description={subtitle && t(subtitle)}
					/>
					{heroImage?.url && (
						<HeroImage
							right={right || 0}
							backgroundSize={backgroundSize || 0}
							bgType={bgType}
							url={heroImage.url}
						/>
					)}
				</TwoColumnLayout>
			</ContentContainer>
		</PageWrapper>
	)
}