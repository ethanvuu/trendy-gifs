import styles from './style.module.css';
import classLister from 'css-module-class-lister';
import { Image } from 'antd';

const classes = classLister(styles);

const GiphyItem = (props) => {
    const { data } = props;

    return <div className={classes('item', 'item-block')}>
        <div className={classes('image-wrapper')}>
            <Image
                height={'100%'}
                width={'100%'}
                src={data.images.original.url}
                placeholder={
                    <Image
                        height={'100%'}
                        width={'100%'}
                        src={data.images.fixed_width_small_still.url}
                    />
                }
            />
        </div>
        <div className={classes('title')}>
            {data.title}
        </div>
    </div>
}

export default GiphyItem;