'use client'
import { FC } from 'react'
import { PageLayout } from '../types/page.type'
import { BlockComponents } from '../blocks/Blocks'

type TRenderBlocksProps = {
	layout: PageLayout[]
}

export const RenderBlocks: FC<TRenderBlocksProps> = ({ layout }) => {
	return (
		<div className='space-y-16'>
			{layout.map(block => {
				const BlockType = block.blockType as keyof typeof BlockComponents
				const Component = BlockComponents[BlockType]
				if (!Component) return
				return <Component key={block.id} {...block} />
			})}
		</div>
	)
}

export default RenderBlocks
