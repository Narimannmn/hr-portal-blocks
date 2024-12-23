import { RichTextNode } from "../utils/serializeRichTextToHtml"

export type TLabel = {
	labelKz: string
	labelRu: string
	labelEn: string
}

export type TRichText = {
	labelRu: RichTextNode[]
	labelEn: RichTextNode[]
	labelKz: RichTextNode[]
}

export type MarginY = {
	top: number
	bottom: number
}

export interface DocFileType {
	id: number
	fileLabels: TLabel,
	alt: string
	updatedAt: string
	createdAt: string
	url: string
	filename: string
	mimeType: string
	filesize: number
	width: null | number,
	height: null | number,
	focalX: null | number,
	focalY: null | number,
}

export interface ICollection<T> {
	docs: T[]
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