import React from "react";
import useFetch from './useFetch'
import SongList from "./SongList";

export default function NewRelease({ token }) {
    const route = '/browse/new-releases'
    const songDataArray = [];
    const { loading, data } = useFetch(route, token);
    if (data) {
        console.log("🚀 ~ file: NewRelease.js ~ line 8 ~ NewRelease ~ data", data.albums.items);
        data.albums.items.forEach(function (item) {

            const album = item.external_urls.spotify;
            const image = item.images[1].url;
            const title = item.name;

            // console.log("🚀 ~ file: RecentlyPlayed.js ~ line 14 ~ data.itmes.map ~ album", title)
            // console.log("🚀 ~ file: RecentlyPlayed.js ~ line 14 ~ data.itmes.map ~ album", image)
            // console.log("🚀 ~ file: RecentlyPlayed.js ~ line 14 ~ data.itmes.map ~ album", album)

            const songDataObject = {
                album,
                image,
                title
            }
            songDataArray.push(songDataObject);
        });
    }

    if (loading) return <div>Loading...</div>

    console.log("🚀 ~ file: NewRelease.js ~ line 30 ~ NewRelease ~ songDataArray", songDataArray)
    return (
        <SongList loading={loading} data={songDataArray} heading='New Releases' />

    )
}
