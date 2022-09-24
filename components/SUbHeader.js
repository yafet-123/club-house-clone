import React from 'react'
import styles from '../styles/explore.module.css'
import Link from 'next/link'

function SubHeader(props){
	return(
		<div className={styles.head}>
			<Link href"/home">
				<img src="/images/arrow.png" alt="" />
			</Link>
			<h3>{props.pageTitle}</h3>
		</div>
	)
}


export default SubHeader