import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/programming_01.gif";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou a Amanda!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto da Amanda pensando"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? 
            </p>
            <p className={styles.paragrafo}>
                Eu sou de Pindamonhanhanba SP.
            </p>
            <p className={styles.paragrafo}>
                Analista de Sistema no hospital mais 10 anos e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
               Sou deficiente auditiva (Oralizada e uso Prótese) converso normalmente.
            </p>
            <p className={styles.paragrafo}>
                Minha história durante adolescente, quando fiz o ensino médio e diversos cursos como no Senac Taubaté. Eu aprendi redes, manutenção de computadores e outros. Eu gostava muito de estudar na área de tecnologia.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Engenharia de Computação na Universidade de Taubaté (UNTAU). Lá eu consegui entrar no primeiro emprego de estágio como Diagramadora. Lá eu tive a oportunidade de estudar diversas disciplina para chegar onde estou. 
            </p>
            <p className={styles.paragrafo}>
                Com isso tive minha experiência de mexer Banco de dados, com prazos de implementação de módulos do sistema Tasy, e aprendi muito com processo de negócio. Mas entrei como Analista de Suporte e depois Analista de Sistemas no Hospital.
            </p>
            <p className={styles.paragrafo}>
                Quando comecei estudar Alura decidi aprofundar Front End para ter conhecimento HTML, CSS e JavaScript. Após disto comecei estudar React e minha meta é chegar nível de FullStack.
            </p>
            <p className={styles.paragrafo}>
                Desde então, tem sido apenas aprendizados atrás de aprendizados. Procurando oportunidade de emprego para migrar na área de desenvolvimento e ter novos desafios na carreira profissional.
            </p>
        </PostModelo>
    )
}