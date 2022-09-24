import React,{useState} from 'react'
import styles from '../../styles/roomDetail.module.css'
import {AiOutlineFile, AiOutlinePlus } from 'react-icons/ai'
import {BsMicMuteFill, BsMicFill} from 'react-icons/bs'

function NewRoom(props){
	const [micMuteVisible, setmicMuteVisible] = useState(false)
	const [itemVisible,setitemVisible] = useState(true)
	const card = props.cardDetail
	return(
		<div>
			<div className={styles.roomDetailContainer}>
				<div className={styles.head}>
					<div className="d-flex align-items-center">
						<a 	
							href="#" 
							onClick={()=>{
								props.setsheetVisible(false)
							}}
						>
							<img 
								src="/images/arrow.png"
								alt=""
								className={styles.arrow_icon}
							/>
						</a>
						<span>Hallway</span>
					</div>
					<div>
						<AiOutlineFile />
						<img 
							src="/images/user-img.jpg"
							alt=""
							className={styles.profile_img}
						/>
					</div>
				</div>	
				<div className={styles.roomDetailCard}>
					<div className="d-flex align-items-center justify-content-between flex-wrap"
					style={{ padding: "0.5em 1em"}}>
						{card.members.map((item)=>(
							<div className={styles.memberContainer}>
								{micMuteVisible ? (
									<div className={styles.audio_icon}>
										<BsMicMuteFill />
									</div>
								) : ""}
								<img src="/images/user-img.jpg" alt="" />
								<p>
									<span>*</span>
									{item.first_name}
								</p>
							</div>
						))}
					</div>	
				</div>	
				<div className={styles.footer}>
					<button
						onClick = {()=>{
							props.setsheetVisible(false)
						}}
					>
						<img src="/images/hand-peace.png" alt="" /> Leave Quitely
					</button>
					<div>
						<button>
							<AiOutlinePlus />
						</button>

						<button>
							<img src="/images/stopHandIcon.png" alt="" />
						</button>

						<button onClick={ ()=> setmicMuteVisible(!micMuteVisible)}>
							{micMuteVisible ? <BsMicMuteFill /> : <BsMicFill />}
						</button>
					</div>
				</div>	
			</div>
		</div>
	)
}

export default NewRoom