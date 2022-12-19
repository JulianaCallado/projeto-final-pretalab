import { Header} from '../components/Header'
import sobre from'../assets/sobre-img.svg'
import homeImg from '../assets/home.svg'
import portfolio from '../assets/portfolio-img.svg'
import styles from '../styles/pages/sobre.module.css'

function Sobre() {
return (
    <>

    <Header text="Oxe,vem me conhecer um pouquinho! " image={homeImag} />
    <div className={styles.textCard}>
        <p>
        Fiquei desempregada com dois filhos para servir de inspiração.Então meu filho mais velho conseguiu uma bolsa de estudos em uma universidade
        muito conceituada em minha cidade,o curso? Ciência da Computação.E foi daí,que tive a curiosidade sobre a área.Queria incentivar meu filho
        e migrar de carreira.
        Sou Juliana Callado,Pernambucana,visse!!! Atuei na área de pesquisa de opinão pública e vendas.
        Atualmente busco conhecimento no Ciclo Formativo Pretalab,para desenvolver minhas habilidades,sendo esse meu primeiro projeto.
        Coloco-me à disposição para iniciar minha trajetória profissional na área como Desenvolvedora Font-end.
        </p> 

    </div>
    </>
    )
}

export default Sobre

