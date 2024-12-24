import { BreadcrumbComponent } from './BreadcrumbComponent/BreadcrumbComponent'
import { DepartmentBlockComponent } from './DepartmentBlockComponent/DepartmentBlockComponent'
import { DepartmentsCatalogComponent } from './DepartmentsCatalogComponent/DepartmentsCatalogComponent'
import { HeadingComponent } from './HeadingComponent/HeadingComponent'
import { JobGroupsBlockComponent } from './JobGroupsBlockComponent/JobGroupsBlockComponent'
import { Last3NewsComponent } from './Last3NewsComponent/Last3NewsComponent'
import { NewsCatalogComponent } from './NewsCatalogComponent/NewsCatalogComponent'
import { SpaceFillerComponent } from './SpaceFillerComponent/SpaceFillerComponent'
import { VacancyCatalogComponent } from './VacancyCatalogComponent/VacancyCatalogComponent'
import { HeroComponent } from './HeroComponent/HeroComponent'
import { ShareResponsesFormComponent } from './ShareResponsesFormComponent/ShareResponsesFormComponent'
import { RichTextComponent } from './RichTextComponent/RichTextComponent'
import { FileUploadBlockComponent } from './FileUploadBlockComponent/FileUploadBlockComponent'
import { TextBlockComponents } from './TextBlockComponents/TextBlockComponents'
import { ImageBlockComponent } from './ImageBlockComponent/ImageBlockComponent'

// Define your block types
export const blockTypesMap = {
	breadcrumb: 'breadcrumb',
	departmentsCatalog: 'departmentsCatalog',
	departmentBlock: 'departmentBlock',
	heading: 'heading',
	hero: 'hero',
	jobGroupsBlock: 'jobGroupsBlock',
	last3News: 'last3News',
	newsCatalog: 'newsCatalog',
	SpaceFiller: 'SpaceFiller',
	vacancyCatalog: 'vacancyCatalog',
	shareResponsesForm: 'shareResponsesForm',
	richText: 'richText',
	fileUploadBlock: 'fileUploadBlock',
	textBlock: 'textBlock',
	imageBlock: 'imageBlock',
} as const

export type BlockKeys = keyof typeof blockTypesMap
export type BlockType = (typeof blockTypesMap)[BlockKeys]

export const BlockComponents = {
	breadcrumb: BreadcrumbComponent,
	departmentsCatalog: DepartmentsCatalogComponent,
	departmentBlock: DepartmentBlockComponent,
	heading: HeadingComponent,
	hero: HeroComponent,
	jobGroupsBlock: JobGroupsBlockComponent,
	last3News: Last3NewsComponent,
	newsCatalog: NewsCatalogComponent,
	SpaceFiller: SpaceFillerComponent,
	vacancyCatalog: VacancyCatalogComponent,
	shareResponsesForm: ShareResponsesFormComponent,
	richText: RichTextComponent,
	fileUploadBlock: FileUploadBlockComponent,
	textBlock: TextBlockComponents,
	imageBlock: ImageBlockComponent,
}