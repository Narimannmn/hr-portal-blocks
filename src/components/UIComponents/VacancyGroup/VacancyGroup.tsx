'use client';
import { Job, JobGroup } from '@/src/types/generated-types';
import React from 'react';
import { VacancyCard } from '../VacancyCard/VacancyCard';
import { useLang } from '@/src/contexts/lang.context';
export interface VacancyGroupProps {
	jobGroup:JobGroup,
  jobs: Job[]
}
export const VacancyGroup = ({ jobGroup, jobs }: VacancyGroupProps) => {
	const {t} = useLang()
	return (
		<div className='flex flex-col gap-16'>
			<div>
				<h1 className='text-[#E1056D] font-bold text-2xl'>
					{t(jobGroup.name)}
				</h1>
				<h3 className='text-lg'>{jobGroup.description.labelEn}</h3>
			</div>
			<div className='flex flex-col gap-6'>
				{jobs && jobs.length === 0 ? (
					<p>No jobs available for this group.</p>
				) : (
					jobs?.map(job => <VacancyCard vacancy={job} key={job.id} />)
				)}
			</div>
		</div>
	)
}
