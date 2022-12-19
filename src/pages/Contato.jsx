import { useState } from 'react'
import { Header } from '../components/Header'
import contatoImg from '../assets/contato.svg'
import { database } from '../services/firebase'
import { ref, push, set } from 'firebase/database'
import { InstagramLogo, GithubLogo } from 'phosphor-react'
import styles from '../styles/pages/contato.module.css'

export function Contato() {
    const [ nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
    function handleInputName(event) {
        setNome(event.target.value)
    }


    function handInputEmail(event) {
        setEmail(event.target.value)
    }

    function handInputMenssage(event) {
        setMensagem(event.target.value)
    }

    function createMessage(event) {
        event.preventDefault()

        console.log('nome: ', nome)
        console.log('email: ', email)
        console.log('mensagem: ', mensagem)

// dentro do firebase cria uma tabela de mensagem
        const mensagensListRef = ref( database, 'mensagens')

//dentro da tabela de mensagem crie uma nova mensagem
        const novaMensagemRef = push(mensagensListRef)

        //dizer o que vai em cada mensagem
        set(novaMensagemRef, {
            nome: nome,
            email: email,
            texto: mensagem
        })

        setNome('')
        setEmail('')
        setMensagem('')
    }
    
    return(
       <>
       <Header text="Chama no contatinho" image={contatoImg} />
       <div className={styles.formContainer}>
        <form onSubmit={createMessage} className={styles.form}>
            <input onChange={handleInputName} placeholder="Digite seu Nome" className={styles.formInput} value={nome} />
            <input onChange={handInputEmail} placeholder="Digite seu e-mail" className={styles.formInput} value={email} />
            <textarea onChange={handleInputMessage} placeholder="Digite sua mensagem" className={styles.formTextArea} value={mensagem} />
            <button className={styles.formButton} type="submit">Enviar Mensagem</button>
        </form>
       </div>
       <div className={styles.icon}>
        <a href="https://www.instagram.com/ju.callado/" target="_blank" className={styles.links}>
        <InstagramLogo size={32} color="#686AAC" weight="thin" />ju.callado
        </a>
       </div>

       <div className={Styles.icon}>
                        <a href="https://github.com/JulianaCallado" target="_blank" className={styles.links}>
                            <GithubLogo size={32} color="#686AAC" weight="thin" />JulianaCallado</a>
        </div>
       </> 
    )
}

export default Contato