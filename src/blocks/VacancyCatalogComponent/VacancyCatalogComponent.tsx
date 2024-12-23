'use client'
import React, { useState, useEffect } from 'react'
import { JobFilter } from '@/src/components/UIComponents/JobFilter/JobFilter'
import { VacancyGroup } from '@/src/components/UIComponents/VacancyGroup/VacancyGroup'
import { VacancyCatalogLayout } from '@/src/types/page.type'
import { fetchJobGroup } from '@/src/api/jobGroups'
import { JobGroup } from '@/src/types/generated-types'

export const VacancyCatalogComponent = ({ groups }: VacancyCatalogLayout) => {
	const [selectedGroup, setSelectedGroup] = useState<string | undefined>(
		undefined
	)
	const [selectedCity, setSelectedCity] = useState<string | undefined>(
		undefined
	)
	const [jobGroups, setJobGroups] = useState<JobGroup[]>([])

	// Fetch job groups on component mount
	useEffect(() => {
			const fetchGroups = async () => {
				const groups = await fetchJobGroup()
				setJobGroups(groups)
			}
			fetchGroups()
		}, [])

	return (
		<>
			<JobFilter
				selectedGroup={selectedGroup}
				setSelectedGroup={setSelectedGroup}
				selectedCity={selectedCity}
				setSelectedCity={setSelectedCity}
				jobGroups={jobGroups} // Pass fetched jobGroups to JobFilter
			/>
			{groups
				.filter(jobGroupData => {
					if (
						selectedGroup &&
						jobGroupData.jobGroup.id == Number(selectedGroup)
					)
						return false
					if (
						selectedCity &&
						!jobGroupData.jobs.some(job => job.location.labelRu == selectedCity)
					)
						return false
					return true
				})
				.map(jobGroupData => (
					<VacancyGroup
						key={jobGroupData.id}
						jobGroup={jobGroupData.jobGroup}
						jobs={jobGroupData.jobs}
					/>
				))}
		</>
	)
}
