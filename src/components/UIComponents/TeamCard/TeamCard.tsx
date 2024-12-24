'use client';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import React from 'react';
import { EmployeeCard } from '../EmployeeCard/EmployeeCard';
import { useLang } from '@/src/contexts/lang.context';
import { Team } from '@/src/types/generated-types';

export interface TeamCardProps {
  team: Team;
}
export const TeamCard = ({ team }: TeamCardProps) => {
  const { t } = useLang();
  return (
		<div className='flex flex-col gap-8'>
			<div className='space-y-5'>
				<h1 className='font-semibold text-4xl'>{t(team.teamName)}</h1>
				<p>{t(team?.description)}</p>
			</div>
			<div>
				<Carousel>
					<CarouselContent>
						{team.members?.map(member => (
							<CarouselItem
								key={typeof member == 'number' ? member : member.id}
								className='basis-1/5'
							>
								<EmployeeCard
									employee={member.member}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</div>
		</div>
	)
};
