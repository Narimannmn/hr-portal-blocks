'use client'
import { Button } from '@/components/ui/button'
import { EmployeeCard } from '@/src/components/UIComponents/EmployeeCard/EmployeeCard'
import { useLang } from '@/src/contexts/lang.context'
import { Employee } from '@/src/types/generated-types'
import { DepartmentBlockLayout } from '@/src/types/page.type'
import { useRouter } from 'next/navigation'
import React from 'react'

export const DepartmentBlockComponent = ({ description, title, employees, linkType, customLink, pageSlug}:DepartmentBlockLayout) => {
	const { t } = useLang()
	const router = useRouter() // Initialize the router
	return (
		<div className='py-24 space-y-16'>
			<div className='text-center flex flex-col justify-center items-center'>
				<div className='flex justify-center'>
					<div className='w-1/2'>
						<h1 className='font-bold text-4xl mb-5'>{t(description)}</h1>
						<p className='text-xl mb-8'>{t(title)}</p>
					</div>
				</div>

				<Button
					className='bg-[#E1056D] text-white py-3 px-5'
					onClick={() => {
						router.push((linkType === 'custom' ? customLink : pageSlug) || '/')
					}}
				>
					{t({
						labelEn: 'View all divisions',
						labelKz: 'Барлық бөлімшелерді қараңыз',
						labelRu: 'Смотреть все подразделения',
					})}
				</Button>
			</div>
			<div className='grid grid-cols-6 gap-10 justify-between'>
				{employees.map((member: Employee) => (
					<EmployeeCard employee={member} key={member.id} />
				))}
			</div>
		</div>
	)
}
