import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
    return (
        <div className={styles.WelcomeContainer}>
            <h1>Welcome!</h1>
            <div className={styles.WelcomeInfo}>
                <p>
                    We are working hard to get clubhouse ready for everyone!
                    while we wrap up the finishing touhes, we are adding people gradully
                    to make sure nothing breaks.
                </p>

                <p>
                    Anyone can join with the invite from the existing user or reserve username and 
                    we will text you if you have a friend on the app whocan let you in. we are so greatfull
                    you are here and can't wait to have you join. 
                </p>

                <p>yafet & the clubhouse team</p>
            </div>

            <div className={styles.actionBtn}>
                <Link href="/Invite" className="primaryBtn d-flex align-items-center mb-3">
                    <a >
                        Get your username
                    </a>
                </Link>

                <Link href="">
                    <a >
                        Have an invite text? sign in
                    </a>
                </Link>
            </div>
        </div>
    )
}
