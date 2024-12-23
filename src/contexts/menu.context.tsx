// 'use client'

// import { fetchPayload } from '../api/request'
// import {
// 	fetchContact,
// 	fetchMenuItems,
// 	fetchSecondaryMenuItems,
// } from '@/api/menu.item'
// import PageLoader from '@/blocks/ui-components/page.loader/page.loader.component'
// import { TLabel } from '@/types/global.types'
// import React, {
// 	createContext,
// 	useContext,
// 	useEffect,
// 	useState,
// 	ReactNode,
// 	FC,
// } from 'react'

// export type TContact = {
// 	phone: string
// } & TLabel

// export type TSecondaryMenu = {
// 	labels: TLabel
// 	links: {
// 		linkLabels: TLabel
// 		pageSlug: string
// 		customLink: string
// 		linkType: 'page' | 'custom'
// 	}[]
// }[]

// export type TFooterTop = {
// 	contact: {
// 		private: TContact
// 		business: TContact
// 	}
// 	socialLinks: {
// 		telegram: {
// 			url: string
// 			icon: {
// 				url: string
// 			}
// 		}
// 		vk: {
// 			url: string
// 			icon: {
// 				url: string
// 			}
// 		}
// 		facebook: {
// 			url: string
// 			icon: {
// 				url: string
// 			}
// 		}
// 		youtube: {
// 			url: string
// 			icon: {
// 				url: string
// 			}
// 		}
// 		whatsapp: {
// 			url: string
// 			icon: {
// 				url: string
// 			}
// 		}
// 	}
// 	menus: TSecondaryMenu
// }

// export type TMenuLinks = {
// 	labelKz: string
// 	labelRu: string
// 	labelEn: string
// 	linkType: 'custom' | 'page'
// 	pageSlug?: string
// 	customLink?: string
// }[]

// export type TMenuItems = {
// 	links: TMenuLinks
// 	richText?: any
// 	addMenu?: {
// 		nameMenu: string
// 		links: {
// 			labelKz: string
// 			labelRu: string
// 			labelEn: string
// 			pageSlug: string
// 			customLink: string
// 			linkType: 'page' | 'custom'
// 		}[]
// 	}
// }

// export type TMenuList = {
// 	labelKz: string
// 	labelRu: string
// 	labelEn: string
// 	menuItems: TMenuItems
// 	linkType: 'custom' | 'page'
// 	freeLink: string
// 	pageSlug: string
// }[]

// export type TMenu = {
// 	labels: {
// 		labelKz: string
// 		labelRu: string
// 		labelEn: string
// 	}
// 	customLink: string
// 	menuList: TMenuList
// 	linkType: 'custom' | 'page'
// 	pageSlug: string
// }

// export type MenuContextType = {
// 	menu: TMenu[] | undefined
// 	secondaryMenu: TSecondaryMenu | undefined
// 	contact: TFooterTop['contact'] | undefined
// 	socialLinks: TFooterTop['socialLinks'] | undefined
// 	loading: boolean
// 	setCityModal: (value: boolean) => void
// 	cityModal: boolean
// }

// const MenuContext = createContext<MenuContextType>({
// 	menu: undefined,
// 	secondaryMenu: undefined,
// 	contact: undefined,
// 	socialLinks: undefined,
// 	loading: true,
// 	setCityModal: () => {},
// 	cityModal: false,
// })

// export const MenuProvider: FC<{ children: ReactNode }> = ({ children }) => {
// 	const [cityModal, setCityModal] = useState<boolean>(false)
// 	const [menu, setMenu] = useState<TMenu[] | undefined>(undefined)
// 	const [secondaryMenu, setSecondaryMenu] = useState<
// 		TSecondaryMenu | undefined
// 	>(undefined)
// 	const [contact, setContact] = useState<TFooterTop['contact'] | undefined>(
// 		undefined
// 	)
// 	const [socialLinks, setSocialLinks] = useState<
// 		TFooterTop['socialLinks'] | undefined
// 	>(undefined)
// 	const [loading, setLoading] = useState(true)
// 	const [fadeOut, setFadeOut] = useState(false)

// 	useEffect(() => {
// 		setLoading(true)
// 		Promise.all([
// 			fetchContact(),
// 			fetchMenuItems(),
// 			fetchSecondaryMenuItems(),
// 			fetchPayload('menu-order'),
// 		])
// 			.then(([contactData, menuData, secondaryMenuData, menuOrder]) => {
// 				const orderedMenuList = menuOrder?.docs?.[0]?.menuItems?.map(
// 					(item: any) => {
// 						return item.menuItem
// 					}
// 				)

// 				const formattedMenu = orderedMenuList?.map(
// 					(item: {
// 						labelKz: string
// 						labelRu: string
// 						labelEn: string
// 						freeLink: string
// 						link: string
// 						menuList: TMenuList
// 						linkType: 'custom' | 'page'
// 						pageSlug: string
// 					}): TMenu => ({
// 						pageSlug: item.pageSlug,
// 						menuList: item.menuList,
// 						labels: {
// 							labelKz: item.labelKz,
// 							labelRu: item.labelRu,
// 							labelEn: item.labelEn,
// 						},
// 						customLink: item.freeLink,
// 						linkType: item.linkType,
// 					})
// 				)

// 				const formattedSecondaryMenu = secondaryMenuData?.docs?.map?.(
// 					(item: {
// 						labels: TLabel
// 						links: {
// 							linkLabels: TLabel
// 							pageSlug: string
// 							customLink: string
// 							linkType: 'page' | 'custom'
// 						}[]
// 					}) => ({
// 						labels: item.labels,
// 						links: item.links,
// 					})
// 				)

// 				setMenu(formattedMenu)
// 				setSecondaryMenu(formattedSecondaryMenu)
// 				setContact({
// 					business: contactData?.docs?.[0]?.business,
// 					private: contactData?.docs?.[0]?.private,
// 				})
// 				setSocialLinks(contactData?.docs?.[0]?.socialLinks)
// 			})
// 			.finally(() => {
// 				setFadeOut(true)
// 				setLoading(false)
// 			})
// 	}, [])

// 	return (
// 		<MenuContext.Provider
// 			value={{
// 				menu,
// 				secondaryMenu,
// 				contact,
// 				socialLinks,
// 				loading,
// 				setCityModal,
// 				cityModal,
// 			}}
// 		>
// 			{loading && <PageLoader className={fadeOut ? 'fade-out' : ''} />}
// 			{!loading && children}
// 		</MenuContext.Provider>
// 	)
// }

// export const useMenu = () => useContext(MenuContext)
