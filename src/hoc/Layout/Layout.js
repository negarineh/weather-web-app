import React from 'react';

import classes from './Layout.module.css';
import Carousel from '../../component/Carousel/Carousel';
import Temperature from '../../component/Temperature/Temperature';
import Days from '../../component/Days/Days';

const layout = (props) =>
        (
            <div className={classes.Content}>
                <Carousel/>
                <Temperature/>
                <Days/>
                <main className={classes.Content}>
                    {props.children}
                </main>
            </div>
        );

export default layout;
