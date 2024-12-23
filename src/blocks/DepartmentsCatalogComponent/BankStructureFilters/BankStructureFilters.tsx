'use client';
import { TreeDataItem, TreeView } from '@/components/tree-view';
import React, { useEffect, useMemo } from 'react';
import search from '@/public/search.svg'
import Image from 'next/image';
import { Department } from '@/src/types/generated-types';
import { useLang } from '@/src/contexts/lang.context';

export interface BankStructureFiltersProps {
	setSearchInput: React.Dispatch<React.SetStateAction<string>>
	setSelectedDep: React.Dispatch<React.SetStateAction<string>>
	departments: Department[]
	selectedDep: string
}

export const BankStructureFilters = ({
  setSearchInput,
  setSelectedDep,
  departments,
  selectedDep,
}: BankStructureFiltersProps) => {
  const {t} = useLang()

  const treeData: TreeDataItem[] = useMemo(() => {
		return departments.map(dep => ({
			id: `${dep.id}-dep`,
			name: t(dep.name),
			children: dep.teams?.map(team => ({
				id: `${team.id}-team`,
				name: t(team.teamName),
			})),
		}))
	}, [departments, t])

  useEffect(() => {
    if (treeData.length > 0) {
      setSelectedDep(treeData[0].id);
    }
  }, [setSelectedDep, treeData]);
  
  return (
    <div className='flex flex-col gap-5'>
      <div className='bg-[#1D161B] relative flex align-middle rounded-md px-3 py-2 gap-2'>
        <Image src={search} alt='search icon' />
        <input
          type='text'
          className='font-medium'
          placeholder='Поиск сотрудника или подразделения'
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
      </div>
      <TreeView
        data={treeData}
        className='bg-transparent'
        expandAll={true}
        initialSelectedItemId={selectedDep}
        onSelectChange={(value) => {
          setSelectedDep(value ? value.id : '');
        }}
      />
    </div>
  );
};