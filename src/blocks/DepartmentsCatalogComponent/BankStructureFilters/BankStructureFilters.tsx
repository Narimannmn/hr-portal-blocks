import React, { useMemo } from 'react'
import { TreeDataItem, TreeView } from '@/components/tree-view'
import Image from 'next/image'
import search from '@/public/search.svg'
import { Department } from '@/src/types/generated-types'
import { useLang } from '@/src/contexts/lang.context'

export interface BankStructureFiltersProps {
	departments: Department[]
	setSelectedItem: (id: string | null) => void
	selectedItem: string | null
	searchQuery: string
	setSearchQuery: (query: string) => void
}

export const BankStructureFilters = ({
	departments,
	setSelectedItem,
	selectedItem,
	searchQuery,
	setSearchQuery,
}: BankStructureFiltersProps) => {
	const { t } = useLang()

	const treeData: TreeDataItem[] = useMemo(() => {
		return departments.map(dep => ({
			id: `${dep.id}-dep`,
			name: t(dep.name),
			children: dep.teams?.map(team => ({
				id: `${team.id}-team`,
				name: t(team.team.teamName),
			})),
		}))
	}, [departments, t])

	return (
		<div className='flex flex-col gap-5'>
			<div className='bg-[#1D161B] relative flex align-middle rounded-md px-3 py-2 gap-2'>
				<Image src={search} alt='search icon' />
				<input
					type='text'
					className='font-medium'
					placeholder='Поиск сотрудника или подразделения'
					value={searchQuery}
					onChange={e => setSearchQuery(e.target.value)}
				/>
			</div>
			<TreeView
				data={treeData}
				className='bg-transparent'
				expandAll={true}
				initialSelectedItemId={selectedItem || undefined}
				onSelectChange={value => {
					setSelectedItem(value ? value.id : null)
				}}
			/>
		</div>
	)
}
