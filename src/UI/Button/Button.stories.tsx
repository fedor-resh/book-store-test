import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'
import Button from './Button'

export default {
	title: 'book-store/Button',
	component: Button,
} as ComponentMeta<typeof Button>

export const button: ComponentStory<typeof Button> = (args) => (
	<Button {...args} />
)
button.args = {
	children: 'buy',
	size: 'small',
}
