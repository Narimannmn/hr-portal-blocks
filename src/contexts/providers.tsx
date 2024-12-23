import { DialogProvider } from './DialogProvider'
import { LangProvider } from './lang.context'
import StyledComponentsRegistry from './registerCss'
import { UserInfoProvider } from './user.info.context'
import React, { FC } from 'react'

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<StyledComponentsRegistry>
			<DialogProvider>
				<LangProvider>
					<UserInfoProvider>{children}</UserInfoProvider>
				</LangProvider>
			</DialogProvider>
		</StyledComponentsRegistry>
	)
}

export default Providers
