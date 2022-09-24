import React from 'react'
import styles from '../styles/dailyInfoCard.module.css'
import data from '../data/dailyCard.json'

function DailyInfoCard(){
	return(
		<div className={styles.dailyCard}>
			{data.map((item, index)=>(
				<div key={index}>
					<span className="">{item.time}</span>
					<div>
						<span className="">{item.title}</span>
						<p>{item.description}</p>
					</div>
				</div>
			))}
		</div>
	)
}

export default DailyInfoCard