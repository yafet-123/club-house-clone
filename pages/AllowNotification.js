import React from 'react'
import styles from '../styles/Invite.module.css'
import Link from 'next/link'

function AllowNotification(){
	return(
		<div className={styles.PhoneConfirmContainer}>
			<div className="text-center">
				<h1 className="mb-4">Last, important step</h1>
				<h1 className="mb-3">Enable notification to know when people are speaking</h1>
			

				<div className={styles.notificationContainer}>
					<div className="p-3">
						<p>"Clubhouse" would like to send you Notification</p>
						<p>Notification may include alerts, sounds and icon badges </p>
					</div>

					<div className={styles.action_btn}>
						<a href="/Home">
							Don't Allow
						</a>

						<a href="/Home">
							Allow
						</a>

						<img src="/images/handIcon.svg" alt="" className={styles.hand_icon}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AllowNotification