import * as React from 'react';
import * as styles from './Footer.module.scss';

export const socialLinks = [
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/wwm.contabilidade/',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384015.png'
    },
    {
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=5521979813770',
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/3670/3670302.png'
    }
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerMaxWidth}>
                <div className={styles.footerHeading}>
                    <h3> WWM Contabilidade</h3>
                    <p> Contabilidade e Consultoria</p>
                </div>
                <div className={styles.footerContent}>
                    <div className={styles.footerContentColumn}>
                        <h4>Social</h4>
                        {socialLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img src={link.iconUrl} alt={link.name} />{' '}
                                {link.name}
                            </a>
                        ))}
                    </div>
                    <div className={styles.footerContentColumn}>
                        <h4>Sobre</h4>
                        <p> Weslley Morais - CRC RJ-010052/O-0 </p>
                    </div>
                </div>
                <p className={styles.footerCredits}>
                    © 2022, Built with ❤ by:
                    <a
                        href="https://www.github.com/othyagocarvalho"
                        target="_blank"
                        rel="noreferrer"
                    >
                        othyagocarvalho
                    </a>
                </p>
            </div>
        </footer>
    );
}
