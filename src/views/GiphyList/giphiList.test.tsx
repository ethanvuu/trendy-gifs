import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { GiphyList } from './index';
import { GIF_LIST } from './mock';

let container;

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("List should renders blocks correctly", () => {

    const totalBlocks = 20;
    const addGifsListDispatchTimes = 1;

    const mockProps = {
        isLoading: false,
        giphyList: [...GIF_LIST['data']],
        loadTrendGifs: jest.fn()
    }

    act(() => {
        render(<GiphyList {...mockProps} />, container);
    });

    expect(mockProps.loadTrendGifs).toBeCalledTimes(addGifsListDispatchTimes);
    expect(container.querySelectorAll('[data-giphy-item]').length).toBe(totalBlocks);
});


it("Should renders more block when scroll to bottom", () => {

    const addGifsListDispatchTimes = 3;
    const totalBlocks = 60;
    let id = '1';

    const mockProps: any = {
        isLoading: false,
        giphyList: [...GIF_LIST['data']],
    }

    const loadTrendGifs = jest.fn().mockImplementation(_ => {
        mockProps.giphyList
            .push(...GIF_LIST['data'].map(gif => {
                id += 1;
                return { ...gif, id: gif.id + id }
            }));
    })

    act(() => {
        render(<GiphyList loadTrendGifs={loadTrendGifs} {...mockProps} />, container);
    });

    act(() => {
        window.dispatchEvent(new Event('scroll'));
    })

    act(() => {
        window.dispatchEvent(new Event('scroll'));
    })

    expect(loadTrendGifs).toBeCalledTimes(addGifsListDispatchTimes);
    expect(container.querySelectorAll('[data-giphy-item]').length).toBe(totalBlocks);
});