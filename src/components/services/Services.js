import * as React from 'react';
import * as styles from './Services.module.scss';
import Card from '../card/Card';

const servicesList = [
    {
        title: 'Abertura de empresa',
        description:
            'Sua empresa 100% regularizada para você se preocupar só com seu negócio. Também trabalhamos com MEI',
        action: 'Abrir empresa agora',
        link: 'https://api.whatsapp.com/send?phone=5521979813770'
    },
    {
        title: 'Troca de Contador',
        description:
            'Cansado de bots e de atendimento por email? Estamos on-line das 9h às 18h para te atender',
        action: 'Quero ser cliente',
        link: 'https://api.whatsapp.com/send?phone=5521979813770'
    },
    {
        title: 'Serviços Especializados',
        description:
            'Regularização e planejamento tributário para Traders, Igrejas e Contabilidade Geral para os demais ramos',
        action: 'Quero me regularizar',
        link: 'https://api.whatsapp.com/send?phone=5521979813770'
    }
];

export default function Services() {
    return (
        <section id="services" className={styles.services}>
            <div className={styles.servicesMaxWidth}>
                {servicesList.map((link, index) => (
                    <div className={styles.card}>
                        <Card
                            key={index}
                            title={link.title}
                            description={link.description}
                            action={link.action}
                            link={link.link}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
