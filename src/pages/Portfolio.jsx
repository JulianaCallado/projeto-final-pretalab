import { Header } from '../components/Header.jsx'
import imagemPortfolio from '../assets/portfolio-img.svg'
import imgHtml from '../assets/portfolio-img.svg'
import styles from '../styles/pages/portfolio.module.css'

export function Portfolio() {
    return (
        <>
        <Header text='Meu projeto' image={imagemPortfolio} />
        <div className={styles.homeContainer}>
            <img src={imgHtml} alt='portfolio' width="350" height="350" />
            <button className={styles.menuButton} type="button"><a href="https://portfolio-juliana-callado.netlify.app/" className={style.btnButtton} target="_blank">Portfolio</a></button>
    
        </div>
        </>
    )
}
export default Portfolio 