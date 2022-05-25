import React, { useEffect, useState } from 'react'
import s from './Alert.module.css'
import { useRecoilState } from 'recoil'
import { showAlertState } from '../../recoil/showAlertState'
interface AlertProps {
	message: string
	type?: 'error' | 'normal'
}
const Alert = ({ message, type = 'normal' }: AlertProps) => {
	const [showAlert, setShowAlert] = useRecoilState(showAlertState)
	useEffect(() => {
		if (showAlert) {
			setTimeout(() => setShowAlert(false), 2000)
		}
	}, [showAlert])
	return (
		<div
			className={`${
				type === 'error' ? s.error : s.normal
			}
            ${showAlert ? s.show__alert : s.hide__alert}`}
		>
			<p>{message}</p>
		</div>
	)
}

export default Alert
