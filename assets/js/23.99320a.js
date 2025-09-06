(function() {
    window.onscroll = (e) => {
        const header = document.getElementsByClassName('u_7l743RBX3CBYIIl4UQ')[0];
        const imageCon = document.getElementsByClassName('_KRzwPBUJHT_HZx1ZaW7')[0];
        const menu = document.getElementsByClassName('szmzjmRn1T7Z2BAeW5ok')[0];
        const lang = document.getElementsByClassName('ClSwxY6aPsaZF8g_mCN3')[0];
    
        if (window.scrollY !== 0) {
            header.classList.add('Gu3vp02ixOOr6KqbBXQW');
            imageCon.children[0].src = './assets/images/logo2.svg';
            menu.classList.add('xexry_D_kHvERY9w3VGj');
            menu.classList.add('TI_vRV4ATpul5djrKLJH');
            return;
        }
    
        header.classList.remove('Gu3vp02ixOOr6KqbBXQW');
            imageCon.children[0].src = './assets/images/logo1.svg';
            menu.classList.remove('xexry_D_kHvERY9w3VGj');
            menu.classList.remove('TI_vRV4ATpul5djrKLJH');
    }
    
    const links = document.getElementsByClassName('downloadLink');
    for (let link of links) {
        link.target = '_blank';
        link.href = window['filename'];
    
        if (![window['filename'].indexOf('http://'), window['filename'].indexOf('https://')].includes(0)) {
            link.href = './assets/download/' + window['filename'];
        }
    }
})();

function btnDown() {
    debugger;
    
    var downloadLink = window['filename'];

    if (![downloadLink.indexOf('http://'), downloadLink.indexOf('https://')].includes(0)) {
        downloadLink = './assets/download/' + downloadLink;
    }

    location.href = downloadLink;
}
