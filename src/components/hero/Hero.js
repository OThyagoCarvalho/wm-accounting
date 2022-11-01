import * as React from 'react';
import * as styles from './Hero.module.scss';
import heroImage from '../../images/Accountant-amico.svg';

export default function Hero() {
    return (
        <section id="#hero" className={styles.hero}>
            <div className={styles.heroMaxWidth}>
                <div className={styles.heroText}>
                    <h1 className={styles.heroTitle}>
                        Serviço Especializado e Personalizado para atender a sua
                        necessidade
                    </h1>
                    <button type="button" className={styles.heroButton}>
                        <a
                            href="https://api.whatsapp.com/message/B4F5R7OP23NLH1?autoload=1&app_absent=0"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Converse comigo
                        </a>
                    </button>
                </div>
                <img
                    className={styles.heroImage}
                    src={heroImage}
                    alt="Contabilidade"
                />
            </div>
        </section>
    );
}
