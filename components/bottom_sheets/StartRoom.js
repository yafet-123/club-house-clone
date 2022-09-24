import React,{useState} from 'react'
import styles from '../../styles/bottomSheet.module.css'
import {FcGlobe} from 'react-icons/fc'

function StartRoom(props) {
	const [room, setroom] = useState('open')
	return(
		<div>
			<div className={styles.switch_line}></div>
			<div className="text-right">
				<button className={styles.addTopicBtn}> + Add a topic </button>
			</div>
			<div className={styles.selectRoom}>
				<button className={room == "open" ? styles.active : ""}
				onClick = {()=> setroom("open")} >
					<div>
						<FcGlobe />
					</div>
					open
				</button>

				<button className={room == "social" ? styles.active : ""}
				onClick = {()=> setroom("social")} >
					<div>
						<FcGlobe />
					</div>
					Social
				</button>

				<button className={room == "closed" ? styles.active : ""}
				onClick = {()=> setroom("closed")} >
					<div>
						<FcGlobe />
					</div>
					Closed
				</button>
			</div>
			<p>
				start a Room {" "}
				<span>
					{
						room == "closed"
						? "for people i choose"
						: room == "social" 
						? "with people i follow"
						: "open to everyone"
					}
				</span>
			</p>

			<div className="text-center">
				<button className={styles.letgoBtn}
					onClick={()=>{
						props.setsheetCreateRoom(true)
						props.setsheetVisible(true)
					}}
				>
					Let's go
				</button>			
			</div>	

		</div>
	)
}

export default StartRoom