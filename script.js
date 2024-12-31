// apply dragElement to each plant image
for(let i = 1; i < 15; i++) {
    dragElement(document.getElementById(`plant${i}`));
    console.log(`plant${i}`);
}

function dragElement(terrariumEl) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    terrariumEl.onpointerdown = pointerDrag;
    function pointerDrag(e) {
        e.preventDefault();
        console.log(e);
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onpointermove = elementDrag;
        document.onpointerup = stopElementDrag;
    }
    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log(pos1,pos2,pos3,pos4);
        terrariumEl.style.top = terrariumEl.offsetTop - pos2 + 'px';
        terrariumEl.style.left = terrariumEl.offsetLeft - pos1 + 'px';
    }
    function stopElementDrag() {
        document.onpointerup = null;
        document.onpointermove = null;
    }
}