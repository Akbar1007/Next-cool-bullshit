'use client'

import { User2 } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function Footer() {
	const [active, setActive] = useState(false)

	return (
		<footer className='container flex-center py-24 flex-col max-w-2xl space-y-12'>
			<h1 className='text-5xl max-md:text-3xl text-center'>
				Get latest posts delivered right to your inbox
			</h1>
			<div className='grid max-md:grid-cols-1 grid-cols-3 md:gap-4 w-full'>
				<Input
					className='w-full col-span-2'
					placeholder='Your email address'
					onFocus={() => setActive(true)}
					onBlur={() => setActive(false)}
				/>
				<Button
					size={'lg'}
					variant={active ? 'default' : 'outline'}
					className='max-md:mt-2'
					aria-label='join'
				>
					<User2 className='w-4 h-4 me-2' />
					<span>Join Today</span>
				</Button>
			</div>
		</footer>
	)
}

export default Footer
