'use client'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { useLang } from "@/src/contexts/lang.context"
import { BreadcrumbLayout } from "@/src/types/page.type"
import React from "react"

export const BreadcrumbComponent = ({ items }: BreadcrumbLayout) => {
	const { t } = useLang()
	return (
		<Breadcrumb className='py-8'>
			<BreadcrumbList className='text-white'>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Главная</BreadcrumbLink>
				</BreadcrumbItem>
				{items.map((breadcrumb, index) => (
					<React.Fragment key={breadcrumb.id}>
						<BreadcrumbSeparator />
						<BreadcrumbItem>
							<BreadcrumbLink
								href={
									(breadcrumb.linkType == 'custom'
										? breadcrumb.customLink
										: breadcrumb.pageSlug) || ''
								}
								className={index === items.length - 1 ? 'text-[#E1056D]' : ''}
							>
								{t(breadcrumb.label)}
							</BreadcrumbLink>
						</BreadcrumbItem>
					</React.Fragment>
				))}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
