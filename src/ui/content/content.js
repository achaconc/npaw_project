import React, { useEffect, useState } from 'react';
import './content.scss';
import UsePagination from '../../customHooks/usePagination'
import MusicList from '../../components/musicList/musicList';
import {
    Pagination,
    Stack,
    Box
} from '@mui/material';

const Content = (props) => {

    const [pageSelected, setPageSelected] = useState(1);
    const [currentPageItems, setCurrentPageItems] = useState(null);

    //reset pagination with initial state
    useEffect(() => {
        setCurrentPageItems({
            resultCount: props.data.resultCount,
            results: props.data.results.slice(0, 20)
        });
        setPageSelected(1);
    }, [props.data])

    //update the list of elements when change the page
    const changePageHandler = (event, value) => {
        const itemsPaginated = UsePagination(value, props.data.results);
        setCurrentPageItems((prevState) => ({
            ...prevState,
            results: itemsPaginated
        }));
        setPageSelected(value);
    }

    return (
        <Box className='container' alignItems="center"
            justifyContent="center">
            <MusicList data={currentPageItems} />
            {props.data && props.data.resultCount > 0 &&
                <Stack id="pagination_container" spacing={2}>
                    <Pagination
                        page={pageSelected}
                        count={props.data ? Math.ceil(props.data.resultCount / 20) : 1}
                        color="primary"
                        onChange={changePageHandler} />
                </Stack>}
        </Box>
    )
}

export default Content;