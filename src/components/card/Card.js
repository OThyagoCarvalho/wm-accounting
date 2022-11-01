import * as React from 'react';
import * as styles from './Card.module.scss';

export default function Card({ title, description, action, link }) {
    return (
        <div className={styles.card}>
            <div>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardText}>{description}</p>
            </div>
            <a className={styles.cardLink} href={link ? link : '#'}>
                {action} <span>➡</span>
            </a>
        </div>
    );
}
