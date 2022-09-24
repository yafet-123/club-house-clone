import React from 'react'
import styles from '../styles/explore.module.css'
import {DownOutlined, FireOutlined } from '@ant-design/icons'
import data from '../data/Explore.json'
import {Input} from 'antd'
import SubHeader from '../components/SUbHeader'

function Explore(){
	const {people , conversation } = data
	return(
		<div className={styles.exploreContainer}>
			<div className={styles.header}>
				<SubHeader pageTitle="EXPLORE" />
				<Input
					style={{
						backgroundColor:"#f4f4f4",
						borderRadius:"0.8em",
						padding:"0.3em 0.1em",
						border:"none",
						boxShadow:"none",
					}}
					size="large"
					placeholder="find people and club"
					prefix= {<img src="/images/search.png" width="30px" />}
				/>	
			</div>
			<h6>PEOPLE TO FOLLOW</h6>
			<div className={styles.peopleContainer}>
				{people.map((item, index)=>(
					<div key={index}>
						<div className="d-flex align-items-center">
							<img src="/images/user-img.jpg" alt="" />
							<div className="ml-2">
								<h5>{item.title}</h5>
								<p>{item.description}</p>
							</div>
						</div>
						<button>FOLLOW</button>
					</div>
				))}
				<button className={styles.showMore}>
					show more people <DownOutlined />
				</button>
			</div>
			<h6>FIND CONVERSATION ABOUT</h6>
			<div className="row mx-0">
				{conversation.map((item)=>(
					<div className="col-6 px-2 mb-3">
						<div className={styles.conservationCard}>
							<h6>
								<FireOutlined />
								{item.title}
							</h6>
							<p>
								{item.discription}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Explore