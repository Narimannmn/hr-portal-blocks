import { TeamCard } from '@/src/components/UIComponents/TeamCard/TeamCard'
import { useLang } from '@/src/contexts/lang.context'
import { DepartmentsCatalogLayout } from '@/src/types/page.type'
import React, { useMemo, useState } from 'react'
import { BankStructureFilters } from './BankStructureFilters/BankStructureFilters'

export const DepartmentsCatalogComponent = ({ departments }: DepartmentsCatalogLayout) => {
  const { t } = useLang()
  const [selectedDep, setSelectedDep] = useState<string>('')
  const [searchInput, setSearchInput] = useState<string>('')

  const filteredDepartments = useMemo(() => {
    return departments
      .map(dep => ({
        ...dep,
        teams: dep.department.teams?.filter(team =>
          t(team.teamName).toLowerCase().includes(searchInput.toLowerCase())
        ),
      }))
      .filter(
        dep =>
          t(dep.department.name).toLowerCase().includes(searchInput.toLowerCase()) ||
          dep.teams?.length
      )
  }, [departments, searchInput, t])

  const displayedTeams = useMemo(() => {
    if (selectedDep.endsWith('-dep')) {
      const departmentId = parseInt(selectedDep.split('-')[0], 10)
      const department = departments.find(dep => dep.id == `${departmentId}`)
      return department?.department.teams || []
    } else if (selectedDep.endsWith('-team')) {
      const teamId = selectedDep.split('-')[0]
      return departments
        .flatMap(dep => dep.department.teams || [])
        .filter(team => `${team.id}` === teamId)
    }
    return []
  }, [selectedDep, departments])

  return (
    <div className="grid grid-cols-[280px_1fr] gap-6">
      <BankStructureFilters
        setSearchInput={setSearchInput}
        setSelectedDep={setSelectedDep}
        departments={filteredDepartments}
        selectedDep={selectedDep}
      />
      <div className="flex flex-col gap-8">
        {displayedTeams.length === 0 && <h1>Структура Банка пуста</h1>}
        {displayedTeams.map(team => (
          <div key={team.id}>
            <TeamCard team={team} />
          </div>
        ))}
      </div>
    </div>
  )
}
