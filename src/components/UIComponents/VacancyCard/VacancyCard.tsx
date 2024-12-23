import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent } from '@/components/ui/collapsible';
import { DialogOpenButton } from '../DialogOpenButton/DialogOpenButton';
import { VacancyCardButton } from './VacancyCardButton';
import { useLang } from '@/src/contexts/lang.context';
import { Job } from '@/src/types/generated-types';
import RichTextParser from '@/src/utils/RichTextParser';
export interface VacancyCardProps {
  vacancy: Job;
}
export const VacancyCard = ({ vacancy }: VacancyCardProps) => {
  const { t, tRichText } = useLang();
  return (
		<>
			<Collapsible className='border border-[#7B7B7B] p-6 pb-7 rounded-2xl flex flex-col gap-8'>
				<article className='flex flex-col gap-2'>
					<header className='flex justify-between'>
						<div className='flex gap-2'>
							<h2 className='text-lg font-medium'>{t(vacancy.jobTitle)}</h2>
							<Badge
								className={`text-xs rounded-xl px-2 py-1 ml-2`}
								style={{
									backgroundColor: vacancy.jobGroup.groupTagColor || '#390027',
								}}
								role='status'
								aria-label='Job Category'
							>
								{t(vacancy.jobGroup.name)}
							</Badge>
						</div>
						<Badge className='text-xs bg-[#EDEEEF] text-[#425F9E] hover:bg-[#EDEEEF]'>
							{t(vacancy.location)}
						</Badge>
					</header>
					<p>{t(vacancy.jobDescription)}</p>
				</article>
				<footer className='flex flex-col'>
					<div className='flex justify-between'>
						<div className='flex gap-6'>
							<div className='flex items-center'>
								<Image
									src={'./time.svg'}
									alt='Time Icon'
									width={20}
									height={20}
								/>
								<span className='ml-2'>{vacancy.workSchedule}</span>
							</div>
							<div className='flex items-center'>
								<Image
									src={'./salary.svg'}
									alt='Salary Icon'
									width={20}
									height={20}
								/>
								<span className='ml-2'>
									{vacancy.priceRange.minPrice}K - {vacancy.priceRange.maxPrice}
									K
								</span>
							</div>
						</div>
						<VacancyCardButton />
					</div>
				</footer>
				<CollapsibleContent className='space-y-8'>
					<RichTextParser
						content={tRichText(vacancy.content)}
						color={'#ffffff'}
					/>
					<div>
						<DialogOpenButton vacancyId={vacancy.id} />
					</div>
				</CollapsibleContent>
			</Collapsible>
		</>
	)
};
