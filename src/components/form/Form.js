import * as React from 'react';
import * as styles from './Form.module.scss';
import getInTouch from '../../images/Get-in-touch-amico.svg';

export default function FormComponent() {
    return (
        <section id="contact" className={styles.form}>
            <div className={styles.formMaxWidth}>
                <img
                    className={styles.formImage}
                    src={getInTouch}
                    alt="Get in touch"
                />
                <div className={styles.formContainer}>
                    <div className={styles.formHeading}>
                        <h2> Ficou com dúvidas ?</h2>
                        <p> Nós entramos em contato</p>
                    </div>
                    <form
                        action="https://getform.io/f/86a0b3d7-1871-4504-80ba-6ddd9148083f"
                        method="POST"
                        target="_blank"
                        className={styles.formForm}
                    >
                        <input type="text" name="name" placeholder="Nome" />
                        <input
                            type="email"
                            name="email"
                            placeholder="email@dominio.com.br"
                        />
                        <textarea
                            type="text"
                            for="message"
                            name="message"
                            placeholder="Escreva sua mensagem"
                            lang='pt-br'
                        />
                        <button type="submit" className={styles.formButton}>
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
