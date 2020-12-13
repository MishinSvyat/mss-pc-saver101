import React from 'react';
import { Button } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

export const UiLink: React.FC<{ to: string }> = ({ children, to }) => {
    const isActive = useRouteMatch({ path: to, strict: true, sensitive: true });
    return (
        <Link to={to}>
            <Button variant="contained" color={isActive ? 'primary' : 'secondary'}>
                {children}
            </Button>
        </Link>
    );
};
