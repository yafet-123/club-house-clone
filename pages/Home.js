import Header from '../components/Header'
import DailyInfoCard from '../components/DailyInfoCard'
import RoomInfoCard from '../components/RoomInfoCard'
import BottomSheet from '../components/BottomSheet'
import {useState} from 'react'
import {AiOutlinePlus} from 'react-icons/ai'
import {BsGrid3X3Gap} from 'react-icons/bs'
import data from '../data/roomCard.json'
import newRoomData from '../data/newRoom.json'
import styles from '../styles/ClubHouseHome.module.css'

function Home(){
	const [itemVisible,setitemVisible] = useState(true)
	const [sheetVisible, setsheetVisible] = useState(false)
	const [sheetCreateRoom, setsheetCreateRoom] = useState(false)
	const [loaderVisiblity, setloaderVisiblity] = useState(false)
	const [cardId, setcardId] = useState(1)

	return(
		<div>
		{loaderVisiblity ? (
			<div style={{
				position:"fixed",
				top:"0",
				left:"0",
				right:"0",
				bottom:"0",
				display: "flex",
				alignItems: "center",
				justifyContent:"center",
			}}>
				<img src="/images/loader.gif" alt="" />
			</div>
		) : (
			""
		)}
			<Header />
			<div className={styles.home_container}>
				<DailyInfoCard />
				<RoomInfoCard />
			</div>

			<div className={styles.action_btn}>
				<button onClick={()=> setsheetVisible(true)}> 
					<AiOutlinePlus className="mr-2" />
					Start Room
				</button>

				<button>
					<BsGrid3X3Gap />
				</button>
			</div>

			<BottomSheet 
				sheetTitle="start room"
				setsheetVisible = {(item)=> setsheetVisible(item)}
				sheetVisible = {sheetVisible}
				cardDetail = {data.find((item)=> item.id == cardId)}
				setitemVisible = {(item)=> setitemVisible(item)}
				setsheetCreateRoom = {(item)=>{
					setloaderVisiblity(true)
					setTimeout(()=>{
						setsheetCreateRoom(item)
						setloaderVisiblity(false)
					},1000)
				}}
			/>

			<BottomSheet
				sheetTitle="new room"
				setsheetVisible = {(item)=> setsheetVisible(item)}
				sheetVisible = {sheetCreateRoom}
				cardDetail={newRoomData}
				setitemVisible={(item)=>{setitemVisible(item)}}
			/>
		</div>
	)
}

export default Home