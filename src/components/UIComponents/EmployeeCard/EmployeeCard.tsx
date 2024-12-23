import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import React from 'react';
import Image from 'next/image';
import { useLang } from '@/src/contexts/lang.context';
import { Employee } from '@/src/types/generated-types';
import { imageSource } from '@/src/utils/imageSource';


export interface EmployeeCardProps {
  employee: Employee;
}

export const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const { t } = useLang();
  return (
		<Card className='bg-transparent border-none text-white w-full'>
			<CardContent className='p-0 mb-6'>
				<div className='relative w-full h-[186px]'>
					<Image
						src={imageSource(employee.image.url || '')}
						alt={employee.image.alt}
						layout='fill'
						objectFit='cover'
						className='rounded-xl'
					/>
				</div>
			</CardContent>
			<CardHeader className='p-0 space-y-4'>
				<CardTitle className='space-y-2'>
					<p className='font-bold'>{t(employee.name)}</p>
					<p className='font-medium text-sm text-[#E1056D]'>
						{t(employee.position)}
					</p>
				</CardTitle>
				<CardDescription className='space-y-2 text-sm'>
					<div className='flex gap-1 align-middle'>
						<Image
							src='./phone.svg'
							alt='phone'
							width={16}
							height={16}
							className='rounded-xl'
						/>
						{employee.telephone}
					</div>
					<div className='flex gap-1 align-middle'>
						<Image
							src='./envelope.svg'
							alt='envelope'
							width={16}
							height={16}
							className='rounded-xl'
						/>
						{employee.email}
					</div>
				</CardDescription>
			</CardHeader>
		</Card>
	)
};
