export type GetTrackDetailsOutputData = {
    id: string,
    attributes: {
        title: string
        lyrics: string | null
    }
}

type GetTrackDetailsOutput = {
    data: GetTrackDetailsOutputData
}

export const getTrack = (trackId: string) => {
    const promise: Promise<GetTrackDetailsOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks/' + trackId, {
        headers: {
            // 'api-key': 'bea50ce4-03ca-4031-afae-d7ad9d28f60a'
        }
    }).then(res => res.json())

    return promise
}

type AttachmentDto = {
    url: string
}

type TrackListItemOutputAttributes = {
    title: string
    attachments: Array<AttachmentDto>
}

export type TrackListItemOutput = {
    id: string,
    attributes: TrackListItemOutputAttributes
}

type GetTrackListOutput = {
    data: Array<TrackListItemOutput>
}

export const getTracks = () => {
    const promise: Promise<GetTrackListOutput> = fetch('https://musicfun.it-incubator.app/api/1.0/playlists/tracks', {
        headers: {
            // 'api-key': 'bea50ce4-03ca-4031-afae-d7ad9d28f60a'
        }
    }).then(res => res.json())

    return promise
}