import { connect } from 'react-redux';
import { addTrendGifs } from './actions';
import { useScrollableListEffect } from 'lib/effects/scrollableList';
import { useEffect, useState } from 'react';

import GiphyItem from './GiphyItem'
import styles from './style.module.css';
import classLister from 'css-module-class-lister';
import loadingIcon from 'assets/loading.svg';

const classes = classLister(styles);


const GiphyList = (props) => {

    const { loadTrendGifs, isLoading, giphyList } = props;
    const [listOffset, setListOffset] = useState(0);

    useEffect(() => {
        loadTrendGifs(listOffset);
    }, [listOffset, loadTrendGifs]);

    useScrollableListEffect(
        () => isLoading,
        () => setListOffset(listOffset + 20)
    )

    return (
        <div className={styles.wraper}>
            <div className={classes("flex", "max-width-wrapper")} >
                {giphyList && giphyList.map(gif => (<GiphyItem key={gif.id} data={gif} />))}
            </div >
            <div style={{textAlign: 'center'}}>
                {!isLoading && (<img  className={classes("loading-icon")} src={loadingIcon}/>)}
            </div>

        </div >
    );
}
const mapState = ({ giphyTrendList: { giphyList, isLoading } }) => ({ isLoading, giphyList });
const mapDispatch = (dispatch) => ({
    loadTrendGifs: (offset, limit = 20) => dispatch(addTrendGifs(offset, limit))
});

export default connect(mapState, mapDispatch)(GiphyList);