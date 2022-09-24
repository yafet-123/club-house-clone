import React,{useState,useEffect} from 'react'
import styles from '../styles/roomcard.module.css'
import data from '../data/roomCard.json'
import {BsChatDots, BsChatDotsFill, BsFillPersonFill } from 'react-icons/bs'

function RoomInfoCard(props){
	return(
		<div>
			{data.map((item,index)=>(
				<div key={index}>
					<div>
						<div className={styles.roomCardContainer}>
							<h6>{item.title}</h6>
							<h2>{item.sub_title}</h2>
							<div className={styles.roomMembers}>
								<div>
									<img src="/images/user-img.jpg" alt="" />
									<img src="/images/user-img2.jpg" alt="" />
								</div>

								<div>
									{item.members.map((item,index)=>(
										<p key={index}>
											{item.first_name} {item.last_name} <BsChatDots />
										</p>
									))}

									<p className="d-flex align-items-center">
										<span className="mr-5">1.8</span> <BsFillPersonFill/>
										<span className="mx-5"></span>{" "}
										<span className="mr-5">5</span><BsChatDotsFill />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default RoomInfoCard