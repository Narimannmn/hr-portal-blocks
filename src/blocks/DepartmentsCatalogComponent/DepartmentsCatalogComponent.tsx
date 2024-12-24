import React, { useMemo, useState, useEffect } from 'react'
import { useLang } from '@/src/contexts/lang.context'
import { BankStructureFilters } from './BankStructureFilters/BankStructureFilters'
import { TeamCard } from '@/src/components/UIComponents/TeamCard/TeamCard'
import { DepartmentsCatalogLayout } from '@/src/types/page.type'
import { Department } from '@/src/types/generated-types'

export const DepartmentsCatalogComponent = ({
	departments,
}: DepartmentsCatalogLayout) => {
	const { t } = useLang()

	const extractedDepartments: Department[] = departments.map(
		({ department }) => department
	)

	// State to manage selected department or team
	const [selectedItem, setSelectedItem] = useState<string | null>(null)
	const [searchQuery, setSearchQuery] = useState<string>('')

	useEffect(() => {
		if (extractedDepartments.length > 0 && !selectedItem) {
			setSelectedItem(`${extractedDepartments[0].id}-dep`)
		}
	}, [extractedDepartments, selectedItem])

	const filteredDepartments = useMemo(() => {
		if (!searchQuery) return extractedDepartments
		const query = searchQuery.toLowerCase()
		return extractedDepartments.filter(
			dep =>
				t(dep.name).toLowerCase().includes(query) ||
				dep.teams?.some(
					team =>
						t(team.team.teamName).toLowerCase().includes(query) ||
						t(team.team.description)?.toLowerCase().includes(query) ||
						team.team.members?.some(
							employee =>
								t(employee.member.name).toLowerCase().includes(query) ||
								t(employee.member.position).toLowerCase().includes(query)
						)
				)
		)
	}, [searchQuery, extractedDepartments, t])

	useEffect(() => {
		const [selectedId, type] = (selectedItem || '').split('-')
		const itemExists =
			type === 'dep'
				? filteredDepartments.some(dep => dep.id.toString() === selectedId)
				: filteredDepartments.some(dep =>
						dep.teams?.some(team => team.id === selectedId)
				  )

		if (!itemExists && filteredDepartments.length > 0) {
			setSelectedItem(`${filteredDepartments[0].id}-dep`)
		}
	}, [filteredDepartments, selectedItem])

	const filteredTeams = useMemo(() => {
		if (!selectedItem) return []
		const [selectedId, type] = selectedItem.split('-')

		if (type === 'dep') {
			const department = filteredDepartments.find(
				dep => dep.id.toString() === selectedId
			)
			return department?.teams || []
		} else if (type === 'team') {
			const department = filteredDepartments.find(dep =>
				dep.teams?.some(team => team.id === selectedId)
			)
			return department?.teams?.filter(team => team.id === selectedId) || []
		}

		return []
	}, [selectedItem, filteredDepartments])

	return (
		<div className='grid grid-cols-[280px_1fr] gap-6'>
			{/* Filters component */}
			<BankStructureFilters
				departments={filteredDepartments}
				setSelectedItem={setSelectedItem}
				selectedItem={selectedItem}
				searchQuery={searchQuery}
				setSearchQuery={setSearchQuery}
			/>
			{/* Teams display */}
			<div className='flex flex-col gap-8'>
				{filteredTeams.map(team => (
					<div key={team.id}>
						<TeamCard team={team.team} />
					</div>
				))}
			</div>
		</div>
	)
}
