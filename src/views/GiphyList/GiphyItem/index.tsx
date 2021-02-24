import styles from './style.module.css';
import classLister from 'css-module-class-lister';
import loadingIcon from 'assets/loading.svg';
import { useState } from 'react';

const classes = classLister(styles);

const GiphyItem = (props) => {
    const { data } = props;

    return <div className={classes('item', 'item-color')}>
        <div className={classes('image-placeholder')}>
            <img className={classes('gif-image')} src={data.images.downsized_medium.url} />
        </div>
        <div className={classes('title')}>
            {data.title}
        </div>
    </div>
}

export default GiphyItem;