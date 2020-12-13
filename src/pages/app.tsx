import React, { useState } from 'react';

import styles from './app.css';

export const App: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>count {count}</h1>
            <button onClick={() => setCount(count + 1)}>Click me</button>
            <p className={styles.text}>
                hello 101 <span className={styles.grey}>666666666</span>
            </p>
        </div>
    );
};
