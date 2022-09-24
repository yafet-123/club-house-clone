import React from 'react'
import styles from '../styles/Invite.module.css'
import Link from 'next/link'

function CodeConfirm(){
	return(
		<div className={styles.PhoneConfirmContainer}>
			<Link href="/get_username">
				<a className={styles.backBtn}>
					<img src="/images/arrow.png" alt="" />
				</a>
			</Link>
			<div className="text-center">
				<h1 style={{width:"100%", marginBottom:"1em"}}>
					Enter the code we just sent you
				</h1>
				<input 
					type="text"
					style={{
						
					}}
				/>
				<p className="mt-2">
					Didn't receive it? <span>Tap to resend</span>
				</p>
			</div>

			<Link href="/AllowNotification">
				<a className="primaryBtn d-flex align-items-center mt-2">
					Next <img src="/images/nextArrowIcon.svg" alt="" className="ml-1"/>
				</a>
			</Link>
		</div>
	)
}

export default CodeConfirm