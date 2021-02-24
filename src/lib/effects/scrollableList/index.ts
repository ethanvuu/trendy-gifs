import { useEffect } from "react";

export const useScrollableListEffect = ( isLoading, loadMoreItems) => {
    const shouldLoadMore = () => {
        const scrollTop = (document.documentElement
            && document.documentElement.scrollTop)
            || document.body.scrollTop;
        const scrollHeight = (document.documentElement
            && document.documentElement.scrollHeight)
            || document.body.scrollHeight;
        return !isLoading() && scrollTop + window.innerHeight + 50 >= scrollHeight
    }
    const onWindowSrollEvent = () => shouldLoadMore() && loadMoreItems();

    useEffect(() => {
        window.addEventListener("scroll", onWindowSrollEvent);
        return () => {
            window.removeEventListener("scroll", onWindowSrollEvent);
        };
    });
};

