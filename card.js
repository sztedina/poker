class Card extends HTMLElement{
    //  <!-- ♥, ♦, ♣, ♠. -->
    constructor(){
        super();
        const shadow=this.attachShadow({mode:'open'});

        let card = document.createElement('div'); //<div></div>
        card.classList.add('card'); //<div class="card"></div>
        //card.className='card';

        let sign = document.createElement('div');
        //sign.className='sign';
        let jelek = ['♥','♦','♣','♠'];
        sign.classList.add('sign');
        sign.innerHTML=jelek[Number(this.dataset.sign)];
        console.log(Boolean(this.getAttribute("blue")));
        if ((this.dataset.sign==0) || ((this.dataset.sign==1) && !(this.getAttribute("blue")=="") ) )
            card.classList.add('red');

        let number= document.createElement('div');
        number.classList.add('number');
        
        //number.innerHTML=this.dataset.ertek;
        //number.innerHTML=this.getAttribute('data-ertek');
        
        let ertek= this.dataset.ertek;
        let tisztek= ['J','Q','K'];
        if (ertek==1) ertek='A';
        else {
            if (ertek>10) ertek=tisztek[ertek-11];
        };
        number.innerHTML=ertek;

        let value= document.createElement('div');
        value.className='value';

        value.appendChild(number);
        value.appendChild(sign);

        card.appendChild(value);
        card.appendChild(sign.cloneNode(true));
        card.appendChild(value.cloneNode(true));

        let linkElem= document.createElement('link');
        linkElem.setAttribute('rel','stylesheet');
        linkElem.setAttribute('href','card.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(card);
    }

};
customElements.define('my-card',Card);