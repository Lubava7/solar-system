class PopUp {
  constructor(path, title, price, description, learn_more) {
    this.el = document.createElement('div');
    this.el.classList.add('modal');

    // this.src = `/solar-system/images/${path}`;
    // this.src = `${path}`;
    this.src = `${path}`;

    this.title = title;
    this.price = price;
    this.description = description;
    this.learn_more = learn_more;

    console.log(' this.src', this.src);
    console.log(' path', path);

    this.el.innerHTML = `
    <div class="photo-container">
      <div class="img" style="background-image:url(${this.src});"></div>
    </div>
    <div class="desc-container">
    <p>${title}</p>
    <p>${this.price}</p>
    <a href="${learn_more}" target="_blank">learn more</a>
    <p>${this.description}</p>
    </div>
    `;
    document.querySelector('.dialog').addEventListener('click', function (e) {
      console.log('iamcalled');
      if (e.target.classList.contains('dialog')) {
        const dialog = document.querySelector('.dialog');
        // если объект содержит такой класс,то выполнять код ниже
        dialog.style.opacity = 0;
        dialog.style.bottom = '-200%';
        dialog.style.zIndex = 0;
        //ниже проверяем, есть ли у диалога модалка и уже потом
        //удаляем первый элемент , так как у нас FIFO - первый пришел - первый ушел, соответсвенно, когда убираем модалку - удаляем первого и единстенного ребенка внутри, чтобы не было списка при открытии нового окошка
        const modal = document.querySelector('.modal');
        if (dialog.contains(modal)) {
          dialog.removeChild(modal);
        }
      }
    });
  }

  showFunc() {
    this.render();
  }
  render() {
    document.querySelector('.dialog').style.opacity = 1;
    document.querySelector('.dialog').style.bottom = 0;
    document.querySelector('.dialog').style.zIndex = 3;
    document.querySelector('.dialog').appendChild(this.el);
  }
}
