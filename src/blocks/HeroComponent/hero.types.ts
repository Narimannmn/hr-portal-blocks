import { TLabel } from "@/src/types/global.types"


export type TButton = {
	label: TLabel
	variant: 'primary' | 'secondary' | 'ghost' | 'tertiary'
	linkType?: 'custom' | 'page'
	pageSlug?: { slug: string }
	customLink?: string
}

export type THeroProps = {
	title: TLabel
	subtitle?: TLabel
	heroImage: {
		url: string
	}
	backgroundColor: string
	secondaryColor?: string
	bgType: 'center' | 'bottom' | 'contain'
	right?: number
	backgroundSize?: number
	buttons?: TButton[]
}
