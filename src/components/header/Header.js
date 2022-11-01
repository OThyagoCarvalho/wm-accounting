import * as React from 'react';
import * as styles from './Header.module.scss';

const headerLinks = [
    {
        name: 'Início',
        url: '#header'
    },
    {
        name: 'Serviços',
        url: '#services'
    },
    {
        name: 'Contato',
        url: '#contact'
    }
];

export default function Header() {
    return (
        <header className={styles.header} id="header">
            <div className={styles.headerMaxWidth}>
                <h1>WWM</h1>
                <nav aria-label="site-navigation">
                    <ul className={styles.headerLinks}>
                        {headerLinks.map((link, index) => (
                            <li className={styles.headerLink} key={index}>
                                <a href={link.url}>{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <button className={styles.headerButton}>
                    <a
                        href="https://api.whatsapp.com/message/B4F5R7OP23NLH1?autoload=1&app_absent=0"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Converse comigo
                    </a>
                </button>
            </div>
        </header>
    );
}
