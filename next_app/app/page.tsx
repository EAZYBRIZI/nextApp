import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'next-app',
	description: 'next-app'
}

const MainPage: React.FC = () => {
	return (
		<div>
			Главная страница
		</div>
	)
}

export default MainPage