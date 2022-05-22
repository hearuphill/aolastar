function doit(id, viewer, isLocal = false) {
    let img = document.createElement("img");
    if (isLocal) img.src = `./${id}/petmovie${id}.png`;
    else
        img.src = `http://aola.100bt.com/h5/peticon/newbreath/petmovie${id}/petmovie${id}~202112241640285894.png`;
    img.alt = id;
    img.title = id;
    img.onerror = (e) => img.remove();
    img.onload = () => {
        img.onclick = () => {
            if (confirm(`View ${id}?`)) {
                if (typeof viewer === "function") window.open(viewer(id));
                else if (typeof viewer === "string") window.open(viewer);
                else window.open(`./player.html#${id}`);
            }
        };
    };
    document.body.append(img);
}
