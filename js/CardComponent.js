class Card {
  constructor(path, descName, hybrid, price, descPopUp, learn_more) {
    this.el = document.createElement("div"); //контейнер для данных карточки - корневой дом элемент
    this.el.classList.add("card-container"); //присваиваем класс контейнеру

    this.el.onclick = this.showModal.bind(this); //чтобы связать контекст с модалкой

    this.src = `../images/${path}`; //задаем значения параметров состояния
    this.descName = descName; //не вносим эти изменения в сам this.el чтобы не засорять его,а только в сам this, для гибкости использования
    this.hybrid = hybrid;
    this.price = price;
    this.descPopUp = descPopUp;
    this.learn_more = learn_more;
    this.el.innerHTML = `
    <div id="${this.descName.toLowerCase()}" class="img-container" style="background-image:url(${
      this.src
    });"></div>
    <div class="text-container">
    <h5> ${this.descName} </h5>
    <p class="hybrid"> ${this.hybrid} </p>
    <p> ${this.price} </p>
  </div>
  `;
    this.popup = new PopUp(
      this.src,
      this.descName,
      this.price,
      this.descPopUp,
      this.learn_more
    );
    this.render();
  }
  showModal() {
    this.popup.showFunc();
  }
  render() {
    document.querySelector(".inner-table").appendChild(this.el); // вкладываем карточку в боди в нужный див
    // console.log(this, "данные моей карточки");
  }
}
new Card(
  "sun.jpg",
  "Sun",
  "0 MOONS",
  "OUR SUN",
  "The Sun is a 4.5 billion-year-old yellow dwarf star – a hot glowing ball of hydrogen and helium – at the center of our solar system. It's about 93 million miles (150 million kilometers) from Earth and it's our solar system's only star. Without the Sun's energy, life as we know it could not exist on our home planet.",
  "https://solarsystem.nasa.gov/planets/jupiter/overview"
);
new Card(
  "mercury.jpg",
  "Mercury",
  "0 MOONS",
  "FIRST PLANET FROM OUR SUN",
  "Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.",
  "https://solarsystem.nasa.gov/planets/mercury/overview/"
);
new Card(
  "venus.jpg",
  "Venus",
  "0 MOONS",
  "SECOND PLANET FROM OUR SUN",
  "Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.",
  "https://solarsystem.nasa.gov/planets/venus/overview/"
);
new Card(
  "earth.jpg",
  "Earth",
  "1 MOON",
  "THIRD PLANET FROM OUR SUN",
  "Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.",
  "https://solarsystem.nasa.gov/planets/jupiter/overview/"
);
new Card(
  "mars.jpg",
  "Mars",
  "2 MOONS",
  "FOURTH PLANET FROM OUR SUN",
  "Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.",
  "https://solarsystem.nasa.gov/planets/mars/overview/"
);
new Card(
  "jupiter.jpg",
  "Jupiter",
  "79 MOONS",
  "FIFTH PLANET FROM OUR SUN",
  "Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.",
  "https://solarsystem.nasa.gov/planets/jupiter/overview/"
);
new Card(
  "saturn.jpg",
  "Saturn",
  "62 MOONS",
  "SIXTH PLANET FROM OUR SUN",
  "Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's.",
  "https://solarsystem.nasa.gov/planets/saturn/overview/"
);
new Card(
  "uranus.jpg",
  "Uranus",
  "27 MOONS",
  "SEVENTH PLANET FROM OUR SUN",
  "Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.",
  "https://solarsystem.nasa.gov/planets/uranus/overview/"
);
new Card(
  "neptune.jpg",
  "Neptune",
  "14 MOONS",
  "EIGHTH PLANET FROM OUR SUN",
  "Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations, rather than by telescope.",
  "https://solarsystem.nasa.gov/planets/neptune/overview/"
);
new Card(
  "moon.jpg",
  "Earth's Moon",
  "0 MOONS",
  "EARTH'S MOON",
  "Earth's Moon is the only place beyond Earth where humans have set foot, so far. The Moon makes our planet more livable by moderating how much it wobbles on its axis.",
  "https://solarsystem.nasa.gov/moons/earths-moon/overview/"
);
new Card(
  "pluto.jpg",
  "Pluto - dwarf-planet",
  "5 MOONS",
  "Unfortunately, not a Planet anymore",
  "Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the largest member of the Kuiper Belt and the best known of a new class of worlds called dwarf planets.",
  "https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/"
);
// https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/

// new Card("gelato-41.jpg", "Gelato 41", "THC 25% HYBRID", "830฿");
// new Card("cereal-milk.jpg", "Cereal Milk", "THC 22% HYBRID", "620฿");
// new Card("alpine-star.jpg", "Alpine star", "THC 25% INDICA", "780฿");
// new Card("apple-fritter.jpg", "Apple Fritter", "THC 32% HYBRID", "780฿");
// new Card("dosi-punch.jpg", "Dosi Punch", "THC 23% INDICA", "780฿");
// new Card("mimosa.jpg", "Mimosa", "THC 23% INDICA", "780฿");

// new Card("brownie.jpg", "Brownie", "THC 400mg", "450฿");
// new Card("brownie-1.jpg", "Brownie", "THC 200mg", "350฿");
// new Card("brownies.jpg", "Brownie", "THC FREE", "300฿");
