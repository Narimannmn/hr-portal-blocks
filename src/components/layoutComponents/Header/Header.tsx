'use client'
import Link from 'next/link'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import { MenuItem } from '@/src/types/generated-types'
import { useLang } from '@/src/contexts/lang.context'
import { Button } from '@/components/ui/button'
import { GlobeIcon, ChevronDownIcon } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
interface HeaderProps {
	menuItems: MenuItem[]
}

const Header = ({ menuItems }: HeaderProps) => {
  const {t, setLang, lang} = useLang()
	return (
		<div className='border-b border-[#747474] px-20'>
			<header className='flex justify-between items-center h-20'>
				<Link href='/'>
					<Image src={logo} alt='Logo' width={128} height={44} />
				</Link>
				<div className='flex flex-row align-middle gap-8'>
					<nav className='flex gap-8 font-semibold leading-6 '>
						{menuItems.map(item => (
							<Link
								key={item.id}
								href={
									item.linkType === 'page'
										? item.page?.slug || '/'
										: item.freeLink || '/'
								}
								className='flex items-center justify-center hover:opacity-80 text-middle h-full'
							>
								<span>
									{t({
										labelEn: item.labelEn,
										labelKz: item.labelKz,
										labelRu: item.labelRu,
									})}
								</span>
							</Link>
						))}
					</nav>
					<Popover>
						<PopoverTrigger asChild>
							<Button
								variant='outline'
								className='flex items-center gap-2 text-white bg-transparent'
							>
								<GlobeIcon className='h-5 w-5' />
								<span>
									{lang == 'En'
										? 'English'
										: (lang == 'Рус'
										? 'Русский'
										: 'Қазақ')}
								</span>
								<ChevronDownIcon className='h-4 w-4' />
							</Button>
						</PopoverTrigger>
						<PopoverContent className='w-56 p-2 text-black'>
							<div className='grid gap-1'>
								<Button
									variant='ghost'
									className='justify-start bg-none hover:underline'
									onClick={() => setLang('Қаз')}
								>
									<span>Қазақша</span>
								</Button>
								<Button
									variant='ghost'
									className='justify-start bg-none hover:underline'
									onClick={() => setLang('Рус')}
								>
									<span>Русский</span>
								</Button>
								<Button
									variant='ghost'
									className='justify-start bg-none hover:underline'
									onClick={() => setLang('En')}
								>
									<span>English</span>
								</Button>
							</div>
						</PopoverContent>
					</Popover>
				</div>
			</header>
		</div>
	)
}
export default Header