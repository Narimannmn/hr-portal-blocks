'use client'

import { Button } from '@/components/ui/button'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { CITY_LOCALIZED } from '@/src/consts/consts'
import { useLang } from '@/src/contexts/lang.context'
import { JobGroup } from '@/src/types/generated-types'

type JobFilterProps = {
	selectedGroup: string | undefined
	setSelectedGroup: React.Dispatch<React.SetStateAction<string | undefined>>
	selectedCity: string | undefined
	setSelectedCity: React.Dispatch<React.SetStateAction<string | undefined>>
	jobGroups: JobGroup[] // Receive jobGroups as a prop
}

export const JobFilter = ({
	selectedGroup,
	setSelectedGroup,
	selectedCity,
	setSelectedCity,
	jobGroups, // Use the prop here
}: JobFilterProps) => {
	const { t } = useLang()

	const handleGroupChange = (group: string) => {
		setSelectedGroup(group === 'clear' ? undefined : group)
	}

	const handleCityChange = (city: string) => {
		setSelectedCity(city === 'clear' ? undefined : city)
	}

	return (
		<div className='flex justify-between items-center flex-wrap gap-4'>
			<div className='flex gap-2 flex-wrap'>
				<Button
					variant='outline'
					className={
						!selectedGroup ? 'bg-white text-black' : 'bg-black text-white'
					}
					onClick={() => handleGroupChange('clear')}
				>
					Все вакансии
				</Button>

				{jobGroups.map((group: JobGroup) => (
					<Button
						key={group.id}
						variant='outline'
						className={
							Number(selectedGroup) == group.id
								? 'bg-white text-black'
								: 'bg-black text-white'
						}
						onClick={() => handleGroupChange(`${group.id}`)}
					>
						{t(group.name)}
					</Button>
				))}
			</div>
			<div className='flex items-center gap-4 flex-wrap'>
				<span className='text-white font-medium'>Местоположение</span>
				<Select
					value={selectedCity || 'clear'}
					onValueChange={handleCityChange}
				>
					<SelectTrigger className='w-80 bg-[#1D161B] text-white rounded-lg px-4 py-2'>
						<SelectValue placeholder='Выберите город' />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectItem value='clear'>Без фильтра</SelectItem>
							{CITY_LOCALIZED.map(city => (
								<SelectItem key={city.labelRu} value={city.labelRu}>
									{city.labelRu}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	)
}
