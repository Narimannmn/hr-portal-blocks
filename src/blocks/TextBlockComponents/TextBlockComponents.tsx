import { useLang } from '@/src/contexts/lang.context'
import { TextBlockLayout } from '@/src/types/page.type'
import React from 'react'

export const TextBlockComponents = ({Text,backgroundColor}:TextBlockLayout) => {
  const {t} = useLang()
  return <div className={`bg-[${backgroundColor}]`}>{t(Text)}</div>
}
