'use client'
import { setCookie } from 'cookies-next'
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	ReactNode,
	FC,
} from 'react'
import { TLabel, TRichText } from '../types/global.types'
import { RichTextNode } from '../utils/serializeRichTextToHtml'

export type LangType = 'Рус' | 'En' | 'Қаз'

type LangContextType = {
	lang: LangType
	setLang: (lang: LangType) => void
	t: (labels: TLabel) => string
	tRichText: (labels: TRichText) => RichTextNode[]
	tJsx: (jsxLabels: {
		labelEn: React.JSX.Element
		labelRu: React.JSX.Element
		labelKz: React.JSX.Element
	}) => React.JSX.Element
}

const LangContext = createContext<LangContextType>({
	lang: 'Рус',
	setLang: () => {},
	t: () => '',
	tRichText: () => ({} as RichTextNode[]),
	tJsx: () => <></>,
})

export const LangProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [lang, setLang] = useState<LangType>('Рус')

	useEffect(() => {
		// Ensure localStorage is only accessed on the client-side
		if (typeof window !== 'undefined') {
			const storedLang = localStorage.getItem('lang') as LangType
			if (storedLang) {
				setLang(storedLang)
			}
		}
	}, [])

	useEffect(() => {
		if (typeof window !== 'undefined') {
			localStorage.setItem('lang', lang)
			setCookie('lang', lang)
			document.documentElement.lang =
				lang === 'Рус' ? 'ru' : lang === 'Қаз' ? 'kk' : 'en'
		}
	}, [lang])

	const t = (labels: TLabel): string => {
		const { labelRu, labelEn, labelKz } = labels

		switch (lang) {
			case 'En':
				return labelEn
			case 'Рус':
				return labelRu
			case 'Қаз':
				return labelKz
			default:
				return labelEn
		}
	}

	const tRichText = (labels: TRichText): RichTextNode[] => {
		const { labelRu, labelEn, labelKz } = labels

		switch (lang) {
			case 'En':
				return labelEn
			case 'Рус':
				return labelRu
			case 'Қаз':
				return labelKz
			default:
				return labelEn
		}
	}

	const tJsx = (jsxLabels?: {
		labelEn: React.JSX.Element
		labelRu: React.JSX.Element
		labelKz: React.JSX.Element
	}): React.JSX.Element => {
		switch (lang) {
			case 'En':
				return jsxLabels?.labelEn as React.JSX.Element
			case 'Рус':
				return jsxLabels?.labelRu as React.JSX.Element
			case 'Қаз':
				return jsxLabels?.labelKz as React.JSX.Element
			default:
				return jsxLabels?.labelEn as React.JSX.Element
		}
	}

	return (
		<LangContext.Provider value={{ lang, setLang, t, tJsx, tRichText }}>
			{children}
		</LangContext.Provider>
	)
}

export const useLang = () => useContext(LangContext)
