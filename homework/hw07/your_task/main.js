const baseURL = 'https://www.apitutor.org/spotify/simple/v1/search';

function search (ev) {
    const term = document.querySelector('#search').value;
    console.log('search for:', term);
    // issue three Spotify queries at once...
    getTracks(term);
    getAlbums(term);
    getArtist(term);
    if (ev) {
        ev.preventDefault();
    }
}

/* Function to get tracks from Spotify search based on 'term' */
async function getTracks (term) {

    document.querySelector('#tracks').innerHTML = "";

    const url = `${baseURL}?type=track&q=${term}`;
    const data = await fetch(url).then(response => response.json());

    if(data.length < 1) {
        document.querySelector('#tracks').innerHTML += `<p> No results. </p>`;
        return;
    }

    for(let i = 0; i < 5; i++) {
        const track = data[i];
        const template = `
            <section class="track-item preview" aria-label="Index for song: ${track.name}" tabindex="${i + 1}" onclick="playSong('${track.id}')">
                <img src="${track.album.image_url}" alt="${track.name}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2> ${track.name} </h2>
                    <p> ${track.artist.name} </p>
                </div>
            </section>`;

        document.querySelector('#tracks').innerHTML += template;
    }

}

/* Function to get albums from Spotify search based on 'term' */
async function getAlbums (term) {

    document.querySelector('#albums').innerHTML = "";

    const url = `${baseURL}?type=album&q=${term}`;
    const data = await fetch(url).then(response => response.json());

    if(data.length < 1) {
        document.querySelector('#albums').innerHTML += `<p> No results. </p>`;
        return;
    }

    data.forEach(function(currentValue) {
        const album = currentValue;
        const template =`
            <section aria-label="Index for album: ${album.name}" class="album-card" id="${album.id}">
                <div>
                    <img src="${album.image_url}" alt="${album.name}">
                    <h2> ${album.name} </h2>
                    <div class="footer">
                        <a href="https://open.spotify.com/album/${album.id}" target="_blank">
                            view on spotify
                        </a>
                    </div>
                </div>
            </section>`;

        document.querySelector('#albums').innerHTML += template;
    });

}

/* Function to get artists from Spotify based on the search 'term' */
async function getArtist (term) {

    const url = `${baseURL}?type=artist&q=${term}`;
    const data = await fetch(url).then(response => response.json());

    if(data.length < 1) {
        document.querySelector('#artist').innerHTML += `<p> No results. </p>`;
        return;
    }

    const artist = data[0];
    const template = `
        <section aria-label="Index for artist: ${artist.name}" class="artist-card" id="${artist.id}">
            <div>
                <img src="${artist.image_url}" alt="${artist.name}">
                <h2>${artist.name}</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/artist/${artist.id}" target="_blank">
                    view on spotify
                    </a>
                </div>
            </div>
        </section>    
        <section class="now-playing"> </section>
    `;

    document.querySelector('#artist').innerHTML = template;

};


document.querySelector('#search').onkeyup = function (ev) {
    // Number 13 is the "Enter" key on the keyboard
    console.log(ev.keyCode);
    if (ev.keyCode === 13) {
        ev.preventDefault();
        search();
    }
}

/* Function to change the 'Top Artist' section to the currently playing song (based on given ID) */
function playSong(id) {

    const template = `
        <section class="now-playing" id="${id}">
            <div>
                <iframe style="border-radius:12px" 
                src="https://open.spotify.com/embed/track/${id}?utm_source=generator" 
                width="100%" 
                height="352" 
                frameBorder="0" 
                allowfullscreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"></iframe>
            </div>
        </section>    
    `;

    document.querySelector('#artist-section h1').innerHTML = "Now playing";
    document.querySelector('#artist').innerHTML = template;

}