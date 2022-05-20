const UsePagination = (page, items) => {
    const currentPageItems = items.slice((page - 1) * 20, page * 20);
    return currentPageItems;
}

export default UsePagination;