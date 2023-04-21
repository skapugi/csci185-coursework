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

async function getTracks (term) {

    document.querySelector('#tracks').innerHTML = "";

    const url = `${baseURL}?type=track&q=${term}`;
    const data = await fetch(url).then(response => response.json());

    for(let i = 0; i < 5; i++) {
        const track = data[i];
        const template = `
            <section class="track-item preview">
                <img src="${track.album.image_url}">
                <i class="fas play-track fa-play" aria-hidden="true"></i>
                <div class="label">
                    <h2> ${track.name} </h2>
                    <p> ${track.artist.name} </p>
                </div>
            </section>`;

        document.querySelector('#tracks').innerHTML += template;

    }

}

async function getAlbums (term) {

    document.querySelector('#albums').innerHTML = "";

    const url = `${baseURL}?type=album&q=${term}`;
    const data = await fetch(url).then(response => response.json());
    console.log(data);

    data.forEach(function(currentValue) {
        const album = currentValue;
        const template =`
            <section class="album-card" id="${album.id}">
                <div>
                    <img src="${album.image_url}">
                    <h2> ${album.name} </h2>
                    <div class="footer">
                        <a href="https://open.spotify.com/album/2lATw9ZAVp7ILQcOKPCPqp" target="_blank">
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

    //const url = baseURL + "?type=artist&q=" + term;
    const url = `${baseURL}?type=artist&q=${term}`;
    const data = await fetch(url).then(response => response.json());

    const artist = data[0];
    const template = `
        <section class="artist-card" id="3Nrfpe0tUJi4K4DXYWgMUX">
            <div>
                <img src="${artist.image_url}">
                <h2>${artist.name}</h2>
                <div class="footer">
                    <a href="https://open.spotify.com/artist/3Nrfpe0tUJi4K4DXYWgMUX" target="_blank">
                    view on spotify
                    </a>
                </div>
            </div>
        </section>    
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