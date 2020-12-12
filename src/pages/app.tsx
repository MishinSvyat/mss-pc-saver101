import React from 'react';

import styles from './app.css';

export const App: React.FC = () => {
    return (
        <div>
            <p className={styles.text}>
                hello 101 <span className={styles.grey}>grey</span>
            </p>
        </div>
    );
};
