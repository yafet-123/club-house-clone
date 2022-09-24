import React from 'react'
import styles from '../styles/header.module.css'
import Link from 'next/link'

function Header(){
	return(
		<div className={styles.Header}>
			<Link href="/explore">
				<img src="/images/search.png" alt="" />
			</Link>

			<div className={styles.nav_items}>
				<Link href="/friends_invite">
					<img src="/images/invite.png" alt="" />
				</Link>

				<Link href="/upcoming">
					<img src="/images/calendar.png" alt="" />
				</Link>

				<Link href="/activity">
					<img src="/images/noti.png" alt="" />
				</Link>

				<Link href="/profile">
					<img src="/images/b1.png" alt="" />
				</Link>
			</div>

		</div>
	)
}

export default Header