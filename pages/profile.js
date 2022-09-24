import React from 'react'
import exploreStyles from '../styles/explore.module.css'
import styles from '../styles/Profile.module.css'
import Link from 'next/link'
import {BsAt, BsUpload,BsPlus } from  'react-icons/bs'
import {AiOutlineSetting} from 'react-icons/ai'
import {AiOutlineTwitter,AiOutlineInstagram} from 'react-icons/ai'

function Profile(props){
	return(
		<div>
			<div className={styles.profileContainer}>
				<div className={exploreStyles.header}>
					<div className={`${exploreStyles.head} text-right mb-0`}>
						<Link href="/Home">
							<img 
								src="/images/arrow.png"
								alt=""
								className ={exploreStyles.arrow_icon}
							/>
						</Link>

						<div className={styles.actionBtn}>
							<BsAt />
							<BsUpload />
							<AiOutlineSetting />
						</div>
					</div>
				</div>

				<img src="/images/user-img.jpg" alt='' className={styles.profile_img}/>
				<h4>Yafet Addisu</h4>
				<p>@yafet</p>
				<div className={styles.follow}>
					<p>
						<span>0</span>Followers
					</p>

					<p>
						<span>51</span>Followeing
					</p>
				</div>
				<button>Add a bio</button>
				<div className="mb-4">
					<button className="mb-0">
						<AiOutlineTwitter /> Add Twitter
					</button>

					<button className="mb-0">
						<AiOutlineInstagram /> Add Instagram
					</button>
				</div>

				<div className={styles.nominated}>
					<img src="/images/user-img.jpg" alt="" />
					<div>
						<p>Joined inMay 16,2022</p>
						<p>
							Nominated by <span>BiniyamTolosa</span>
						</p>
					</div>
				</div>
				<p>Member of </p>
				<button className={styles.addMemberBtn}>
					<BsPlus />
				</button>
			</div>
		</div>
	)
}

export default Profile
