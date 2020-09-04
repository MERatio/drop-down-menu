const dropDownMenu = () => {
  const navItem = document.createElement('li');
  navItem.classList.add('nav-item', 'nav-item-drop-down');
  navItem.textContent = 'Drop-down ▼';

  const menuList = document.createElement('ul');
  menuList.classList.add('menu-list', 'd-none');
  navItem.appendChild(menuList);

  for (let i = 1; i < 6; i++) {
    menuList.innerHTML += `
      <li>
        <a href="#" class="menu-link">Menu Link ${i}</a>
      </li>`;
  }

  return navItem;
};

const navList = document.querySelector('.nav-list');
navList.appendChild(dropDownMenu());

const navItemDrodown = document.querySelector('.nav-item-drop-down');
const menuList = document.querySelector('.menu-list');

const dropDownToggle = () => {
  menuList.classList.toggle('d-none');
};

navItemDrodown.addEventListener('click', dropDownToggle);
