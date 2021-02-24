export interface IGiphyGif {
    type: string
    id: string
    url: string
    user: {
        avatar_url: string
        username: string
        display_name: string
        profile_url: string
    }
}

export interface IGiphyListState {
    isLoading : boolean
    giphyList: IGiphyGif[]
}