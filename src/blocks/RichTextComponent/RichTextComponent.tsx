import { useLang } from '@/src/contexts/lang.context'
import { RichTextLayout } from '@/src/types/page.type'
import RichTextParser from '@/src/utils/RichTextParser'
import React from 'react'

export const RichTextComponent = ({ content }: RichTextLayout) => {
	const { lang } = useLang()
	if (lang == 'En')
		return <RichTextParser content={content.contentEn} color='' />
	if (lang == 'Рус')
		return <RichTextParser content={content.contentRu} color='' />
	return <RichTextParser content={content.contentKz} color='' />
}
