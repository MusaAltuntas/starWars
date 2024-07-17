  const buton = document.getElementById('buton');
  const veriSeti = {
    "characters": [
      {
          "id": 1,
          "name": "Luke Skywalker",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
          "homeworld": "tatooine"
        },
        {
          "id": 2,
          "name": "C-3PO",
          "pic": "https://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2022/06/06121920/C-3PO-startled.jpg",
          "homeworld": "tatooine"
        },
        {
          "id": 3,
          "name": "R2-D2",
          "pic": "https://lumiere-a.akamaihd.net/v1/images/r2-d2-main_f315b094.jpeg?region=353%2C0%2C716%2C536",
          "homeworld": "naboo"
        },
        {
          "id": 4,
          "name": "Darth Vader",
          "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
          "homeworld": "tatooine"
        },
        {
          "id": 5,
          "name": "Leia Organa",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
          "homeworld": "alderaan"
        },
        {
          "id": 6,
          "name": "Owen Lars",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
          "homeworld": "tatooine"
        },
        {
          "id": 7,
          "name": "Beru Whitesun lars",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
          "homeworld": "tatooine"
        },
        {
          "id": 8,
          "name": "R5-D4",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
          "homeworld": "tatooine"
        },
        {
          "id": 9,
          "name": "Biggs Darklighter",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
          "homeworld": "tatooine"
        },
        {
          "id": 10,
          "name": "Obi-Wan Kenobi",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
          "homeworld": "stewjon"
        },
        {
          "id": 11,
          "name": "Anakin Skywalker",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
          "homeworld": "tatooine"
        },
        {
          "id": 12,
          "name": "Wilhuff Tarkin",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
          "homeworld": "eriadu"
        },
        {
          "id": 13,
          "name": "Chewbacca",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
          "homeworld": "kashyyyk"
        },
        {
          "id": 14,
          "name": "Han Solo",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
          "homeworld": "corellia"
        },
        {
          "id": 15,
          "name": "Greedo",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
          "homeworld": "Rodia"
        },
        {
          "id": 16,
          "name": "Jabba Desilijic",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
          "homeworld": "tatooine"
        },
        {
          "id": 18,
          "name": "Wedge Antilles",
          "pic": "https://upload.wikimedia.org/wikipedia/en/4/41/Wedge_Antilles-Denis_Lawson-Star_Wars_%281977%29.jpg",
          "homeworld": "corellia"
        },
        {
          "id": 19,
          "name": "Jek Tono Porkins",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
          "homeworld": "bestine"
        },
        {
          "id": 20,
          "name": "Yoda",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png"
        },
        {
          "id": 21,
          "name": "Palpatine",
          "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
          "homeworld": "naboo"
        }
    ]
  };

  buton.addEventListener('click', function() {
    const karakterListesi = document.getElementById('karakter-listesi');
    const filtreler = document.getElementById('filtreler');

    if (!buton.classList.contains('gizleButonu')) {
        buton.textContent = "Karakterleri Gizle";
        buton.classList.add('gizleButonu');

        veriSeti.characters.forEach(karakter => {
            const karakterKarti = document.createElement('div');
            karakterKarti.classList.add('karakter-karti');
            karakterKarti.id = "karakter-" + karakter.id;

            const karakterAdi = document.createElement('h2');
            karakterAdi.textContent = karakter.name;

            const karakterResim = document.createElement('img');
            karakterResim.classList.add('karakter-resim');
            karakterResim.src = karakter.pic;
            const karakterAnavatani = document.createElement('h3');
            karakterAnavatani.textContent = karakter.homeworld || "Diğer";

            karakterKarti.appendChild(karakterResim);
            karakterKarti.appendChild(karakterAdi);
            karakterKarti.appendChild(karakterAnavatani);

            karakterListesi.appendChild(karakterKarti);
        });

        const tumuContainer = document.createElement('div');
        tumuContainer.classList.add('radio-container');
        const tumuRadioInput = document.createElement('input');
        tumuRadioInput.type = 'radio';
        tumuRadioInput.value = "Tümü";
        tumuRadioInput.classList.add("radio-container");
        tumuRadioInput.addEventListener('click', function() {
            const secilenHomeworld = this.value;
            filtreleKarakterler(secilenHomeworld);
        });
        const tumuLabel = document.createElement('label');
        tumuLabel.textContent = "Tümü";
        tumuLabel.addEventListener('click', function() {
            tumuRadioInput.checked = true;
            const secilenHomeworld = tumuRadioInput.value;
            filtreleKarakterler(secilenHomeworld);
        });
        tumuContainer.appendChild(tumuRadioInput);
        tumuContainer.appendChild(tumuLabel); 
        filtreler.insertBefore(tumuContainer, filtreler.firstChild);

        const homeworlds = [...new Set(veriSeti.characters.map(item => item.homeworld || "Diğer"))];
        homeworlds.forEach(homeworld => {
          const container = document.createElement('div');
          container.classList.add('radio-container');
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.value = homeworld;
          radioInput.classList.add("radio-container");
          radioInput.addEventListener('click', function() {
              const secilenHomeworld = this.value;
              filtreleKarakterler(secilenHomeworld);
          });
      
          const label = document.createElement('label');
          label.textContent = homeworld.toLowerCase();
      
          container.appendChild(radioInput);
          container.appendChild(label); 
      
          filtreler.appendChild(container);
          document.body.style.backgroundImage = "url(pictures/b.jpg)"

          label.addEventListener('click', function() {
            const clickedRadioInput = this.previousElementSibling;
            if (!clickedRadioInput.checked) {
                const allRadioInputs = document.querySelectorAll('input[type="radio"]');
                allRadioInputs.forEach(input => {
                    input.checked = false;
                });
                clickedRadioInput.checked = true;
                const secilenHomeworld = clickedRadioInput.value;
                filtreleKarakterler(secilenHomeworld);
            }
        });
      });

    } else {
        filtreler.innerHTML = "";
        karakterListesi.innerHTML = "";
        buton.textContent = "Karakterleri Göster";
        buton.classList.remove('gizleButonu');
        document.body.style.backgroundImage = "url(pictures/a.jpg)"
    }

    function filtreleKarakterler(homeworld) {
        veriSeti.characters.forEach(karakter => {
            if (!karakter.homeworld) {
                karakter.homeworld = "Diğer"
            }
            const karakterKarti = document.getElementById('karakter-' + karakter.id);

            if (homeworld === "Tümü") {
                karakterKarti.style.display = 'inline-block';
            } else {
                if (karakter.homeworld.toLowerCase() === homeworld.toLowerCase()) {
                    karakterKarti.style.display = 'inline-block';
                } else {
                    karakterKarti.style.display = 'none';
                }
            }
        });
    }

    const radioInputs = document.querySelectorAll('.radioInput');
    radioInputs.forEach(input => {
        input.addEventListener('click', function() {
            radioInputs.forEach(otherInput => {
                if (otherInput !== input) {
                    otherInput.checked = false;
                }
            });
        });
    });
});


    

    

    
    
