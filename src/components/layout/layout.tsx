import React from 'react';

import s from './layout.css';
import { UiLink } from '..';
import { URLS } from '../../consts';

export const Layout: React.FC = ({ children }) => {
    return (
        <div className={s.container}>
            <header className={s.header}>
                <div className={s.headerSection}>
                    <UiLink to="/">main</UiLink>
                </div>
                <div className={s.headerSection}>
                    <UiLink to={URLS.page1}>page1</UiLink>
                    <UiLink to={URLS.page2}>page2</UiLink>
                </div>
            </header>
            <div className={s.main}>{children}</div>
        </div>
    );
};
