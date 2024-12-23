import { BlockType } from "../blocks/Blocks"
import { Department, Employee, Job, JobGroup, Media, News } from "./generated-types"
import { TLabel } from "./global.types"

export interface PageDocument {
	id: string
	name: string
	slug: string
	layout: PageLayout[]
	createdAt: string
	updatedAt: string
}

export interface Layout {
	id: string
	blockType: BlockType
	blockName: string | null
}

export interface IPage {
	docs: PageDocument[]
	totalDocs: number
	limit: number
	totalPages: number
	page: number
	pagingCounter: number
	hasPrevPage: boolean
	hasNextPage: boolean
	prevPage: number | null
	nextPage: number | null
}

// Blocks interfaces

export interface BreadcrumbLayout extends Layout {
	items: {
		label: TLabel
		linkType: 'custom' | 'page'
		id?: string | null
		customLink?: string | null
		pageSlug?: string | null
	}[]
	blockType: 'breadcrumb'
}

export interface DepartmentsCatalogLayout extends Layout {
	departments: {
		department: Department,
		id:string
	}[]
	blockType: 'departmentsCatalog'
}

export interface DepartmentBlockLayout extends Layout {
	title: TLabel
	description: TLabel
	linkType: 'custom' | 'page'
	customLink?: string | null
	pageSlug?: string | null
	employees: Employee[]
	blockType: 'departmentBlock'
}

export interface HeadingLayout extends Layout {
	type: 'centered' | 'left'
	title: TLabel
	description?: TLabel
	blockType: 'heading'
}

export interface HeroLayout extends Layout {
	title: TLabel
	subtitle: TLabel
	heroImage: Media
	backgroundColor: string
	secondaryColor?: string | null
	bgType: 'center' | 'bottom' | 'contain'
	right?: number | null
	backgroundSize?: number | null
	blockType: 'hero'
}

export interface JobGroupsBlockLayout extends Layout {
	title: TLabel
	description: TLabel
	linkType: 'custom' | 'page'
	customLink?: string | null
	pageSlug?: string | null
	jobGroups: JobGroup[]
	blockType: 'jobGroupsBlock'
}

export interface Last3NewsLayout extends Layout {
	title: TLabel
	lastThreeNews: News[]
	blockType: 'last3News'
}

export interface NewsCatalogLayout extends Layout {
	title: TLabel
	news: News[]
	blockType: 'newsCatalog'
}

export interface SpaceFillerLayout extends Layout {
	height: number
	blockType: 'SpaceFiller'
}

export interface VacancyCatalogLayout extends Layout {
	groups: {
		jobGroup: JobGroup
		jobs: Job[]
		id: string
	}[]
	id: string
	blockType: 'vacancyCatalog'
}

// export interface WrapperLayout extends Layout {
// 	margins?: {
// 		marginTop?: number
// 		marginRight?: number
// 		marginBottom?: number
// 		marginLeft?: number
// 	}
// 	paddings?: {
// 		paddingTop?: number
// 		paddingRight?: number
// 		paddingBottom?: number
// 		paddingLeft?: number
// 	}
// 	blockType: 'wrapper'
// }

export type PageLayout =
	| BreadcrumbLayout
	| DepartmentsCatalogLayout
	| DepartmentBlockLayout
	| HeadingLayout
	| HeroLayout
	| JobGroupsBlockLayout
	| Last3NewsLayout
	| NewsCatalogLayout
	| SpaceFillerLayout
	| VacancyCatalogLayout
