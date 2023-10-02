let togglebtn = document.getElementById('toggle');
let listItems = document.getElementById('listItems');
listItems.style.display = "none";
let isListVisible = false;

togglebtn.addEventListener('click', () => {
    // Toggle the visibility
    isListVisible = !isListVisible;

    if (isListVisible) {
        listItems.style.display = "flex";
    } else {
        listItems.style.display = "none";
    }
});
closeAll = () => {
    if (aboutItemsVisisble) {
        document.getElementById('aboutItems').style.display = 'none'
        aboutItemsVisisble = false;
    }
    if (programmesItemVisible) {
        document.getElementById('programmesItems').style.display = 'none'
        programmesItemVisible = false;
    }
    if (carrierItemVisible) {
        document.getElementById('carriersItems').style.display = 'none'
        carrierItemVisible = false;
    }
}
let aboutItemsVisisble = false;
document.getElementById('about').addEventListener('click', () => {
    aboutItemsVisisble ? document.getElementById('aboutItems').style.display = 'none' : document.getElementById('aboutItems').style.display = 'flex';
    closeAll();
    aboutItemsVisisble = !aboutItemsVisisble;
})
let programmesItemVisible = false;
document.getElementById('programmes').addEventListener('click', () => {
    programmesItemVisible ? document.getElementById('programmesItems').style.display = 'none' : document.getElementById('programmesItems').style.display = 'flex';
    closeAll();
    programmesItemVisible = !programmesItemVisible;
})
let carrierItemVisible = false;
document.getElementById('carriers').addEventListener('click', () => {
    carrierItemVisible ? document.getElementById('carriersItems').style.display = 'none' : document.getElementById('carriersItems').style.display = 'flex';
    closeAll();
    carrierItemVisible = !carrierItemVisible;
})
AOS.init();