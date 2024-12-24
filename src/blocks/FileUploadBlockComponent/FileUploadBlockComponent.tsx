import { FileUploadBlockLayout } from '@/src/types/page.type'
import React from 'react'
import Image from 'next/image'
import filesIcon from '@/public/files.svg'
import { useLang } from '@/src/contexts/lang.context'

const formatFileSize = (bytes: number | undefined): string => {
	if (!bytes) return 'Unknown size'
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
	const i = Math.floor(Math.log(bytes) / Math.log(1024))
	return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
}

export const FileUploadBlockComponent = ({ files }: FileUploadBlockLayout) => {
  const {t} = useLang()
	return (
		<div className='flex flex-row gap-5 flex-wrap'>
			{files?.map((file, index) => (
				<div
					key={file.id || index}
					className='file-block flex gap-4 align-middle'
				>
					<Image src={filesIcon} alt='file icon' width={36} height={36} />
					<div>
						<div className='underline '>
							{file.file?.fileLabels
								? t(file.file?.fileLabels)
								: 'Unknown file name'}
						</div>
						<div className='text-sm'>{formatFileSize(file.file?.filesize || 0)}</div>
					</div>
				</div>
        
			))}
		</div>
	)
}
