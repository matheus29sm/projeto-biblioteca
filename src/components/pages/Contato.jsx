import styles from './Contato.module.css'

function Contato(){
    return(
        <div className={styles.contato}>
            <h1>
                Contato
            </h1>
            <div>
                <p>
                    Numero: <span>(<span className={styles.dd}>79</span>)99999-9999</span>
                </p>
                <p>
                    Endereço: <span>Rua A, 50, CEP: 00000-000  Cidade Nova, AC</span>
                </p>
            </div>
        </div>
    )
}

export default Contato;