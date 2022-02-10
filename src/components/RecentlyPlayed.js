import React from "react";
import useFetch from './useFetch'
import SongList from "./SongList";
export default function RecentlyPlayed({ token }) {
    // const [songData, setSongData] = useState([]);
    const songDataArray = [];
    const route = '/me/player/recently-played'
    const { loading, data } = useFetch(route, token);
    if (loading) return <div>Loading...</div>

    if (data && data.items) {
        data.items.forEach(function (item) {


            const album = item.track.album.external_urls.spotify;
            const image = item.track.album.images[1].url;
            const title = item.track.album.name;

            const songDataObject = {
                album,
                image,
                title
            }
            songDataArray.push(songDataObject);
        });
    }

    console.log("🚀 ~ file: RecentlyPlayed.js ~ line 28 ~ RecentlyPlayed ~ songDataArray", songDataArray)
    return (
        <SongList loading={loading} data={songDataArray} heading='Recently Played' />
    )
}
