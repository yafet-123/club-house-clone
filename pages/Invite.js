import React,{useState} from 'react'
import Link from 'next/link'
import styles from '../styles/Invite.module.css'
import PhoneInput from 'react-phone-number-input'

function Invite(){
	const [value,setValue] = useState()
	return(
		<div className={styles.PhoneConfirmContainer}>
			<Link href="/">
				<a className={styles.backBtn}>
					<img src="/images/arrow.png" alt="" />
				</a>
			</Link>
			<h1>Enter Your Phone</h1>
			<PhoneInput 
				international
				defaultCountry="ET"
				value={value}
				onChange={setValue}
			/>
			<p>
				By entering your phone number, you are aggreing to our 
				<span> Terms of service and privacy policy </span>
				Thanks!
			</p>

			<Link href="/CodeConfirm" >
				<a className="primaryBtn d-flex align-items-center ">
					Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1"/>
				</a>
			</Link>
		</div>
	)
}

export default Invite