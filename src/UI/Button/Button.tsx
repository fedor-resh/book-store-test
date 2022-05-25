import React from 'react'
import s from './Button.module.css'
export interface ButtonProps {
	children: string
	className?: string
	size?: 'general' | 'small'
	onClick?: (value: any) => void
}

const Button = ({
	size = 'small',
	children = 'button',
	onClick,
	className,
}: ButtonProps) => {
	const sizes = {
		general: '22px 32px',
		small: '10px 20px',
	}
	let padding = sizes[size]

	return (
		<button
			onClick={onClick}
			className={`${s.button} ${className}`}
			style={{ padding }}
		>
			{children}
		</button>
	)
}

export default Button
