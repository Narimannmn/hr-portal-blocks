import { RichTextNode } from "../utils/serializeRichTextToHtml"
import { TLabel } from "./global.types"

export interface User {
	id: number
	role: 'admin' | 'seller' | 'hr'
	updatedAt: string
	createdAt: string
	email: string
	resetPasswordToken?: string | null
	resetPasswordExpiration?: string | null
	salt?: string | null
	hash?: string | null
	loginAttempts?: number | null
	lockUntil?: string | null
	password: string | null
}
export interface Media {
	id: number
	alt: string
	updatedAt: string
	createdAt: string
	url?: string | null
	filename?: string | null
	mimeType?: string | null
	filesize?: number | null
	width?: number | null
	height?: number | null
	focalX?: number | null
	focalY?: number | null
}
export interface Employee {
	id: number
	name: TLabel
	position: TLabel
	email: string
	telephone: string
	image: Media
	updatedAt: string
	createdAt: string
}

export interface News {
	id: number
	title: TLabel
	content: {
		labelKz: RichTextNode[]
		labelRu: RichTextNode[]
		labelEn: RichTextNode[]
	}
	description: TLabel
	preview: Media
	newsGroups: NewsGroup
	isArchive?: boolean
	author?: Employee
	updatedAt: string
	createdAt: string
}

export interface NewsGroup {
	id: number
	name: TLabel
	description: TLabel
	groupTagColor?: string | null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "departments".
 */
export interface Department {
	id: number
	name: TLabel
	description: TLabel
	teams?: Team[]
	updatedAt: string
	createdAt: string
}

export interface Team {
	id: number
	teamName: TLabel
	description: TLabel
	members?: Employee[]
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobs".
 */
export interface Job {
	id: number
	jobTitle: TLabel
	jobDescription: TLabel
	workSchedule: 'Full-Time' | 'Part-Time' | 'Remote' | 'Flexible'
	location: TLabel
	jobGroup: JobGroup
	content: {
		labelKz: RichTextNode[]
		labelRu: RichTextNode[]
		labelEn: RichTextNode[]
	}
	priceRange: {
		minPrice: number
		maxPrice: number
	}
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "jobGroups".
 */
export interface JobGroup {
	id: number
	name: TLabel
	description: TLabel
	icon: Icon
	groupTagColor?: string | null
	updatedAt: string
	createdAt: string
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
	id: number
	updatedAt: string
	createdAt: string
	url?: string | null
	filename?: string | null
	mimeType?: string | null
	filesize?: number | null
	width?: number | null
	height?: number | null
	focalX?: number | null
	focalY?: number | null
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "job-responses".
 */
export interface JobResponse {
	id: number
	lastName: string
	firstName: string
	phone: string
	resume: Media
	job: Job
	updatedAt: string
	createdAt: string
}

export interface NewsResponse {
	id: number
	email: string
	updatedAt: string
	createdAt: string
}