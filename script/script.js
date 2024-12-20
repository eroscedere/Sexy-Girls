import { DOM } from "./DOM.js";
import { girls } from "./girls.js";

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

let menuON = false;
let sectionGirl = false;

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const createIcon = (tag) => {
  const element = document.createElement(tag);
  return element;
};

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

DOM.btnMenu.forEach((e) => {
  e.addEventListener("click", () => {
    menuON = !menuON;

    DOM.menu.style.width = menuON ? "220px" : "0px";
    DOM.menu.style.padding = menuON ? "20px 20px" : " 20px 0px";
  });
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

DOM.buttonGirlPerfilPhotos.addEventListener("click", () => {
  DOM.buttonGirlPerfilPhotos.style.borderColor = "#e43362";
  DOM.buttonGirlPerfilPhotos.style.backgroundColor = "#e43362";

  DOM.buttonGirlPerfilVideos.style.borderColor = "#424242";
  DOM.buttonGirlPerfilVideos.style.background = "none";

  DOM.girlPhotos.style.display = "flex";
  DOM.girlVideos.style.display = "none";
});

DOM.buttonGirlPerfilPhotos.style.borderColor = "#e43362";
DOM.buttonGirlPerfilPhotos.style.backgroundColor = "#e43362";

DOM.buttonGirlPerfilVideos.addEventListener("click", () => {
  DOM.buttonGirlPerfilVideos.style.borderColor = "#e43362";
  DOM.buttonGirlPerfilVideos.style.backgroundColor = "#e43362";

  DOM.buttonGirlPerfilPhotos.style.borderColor = "#424242";
  DOM.buttonGirlPerfilPhotos.style.background = "none";

  DOM.girlVideos.style.display = "flex";
  DOM.girlPhotos.style.display = "none";
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

DOM.buttonHome.addEventListener("click", () => {
  hiddenSection();

  DOM.section[0].style.display = "flex";
});

const hiddenSection = () => {
  DOM.section.forEach((e) => {
    e.style.display = "none";
  });
};

hiddenSection();

DOM.section[0].style.display = "flex";

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

girls.sort((a, b) => a.name.localeCompare(b.name));

girls.map((e, i) => {
  // Cria os elementos necessários
  const div = createIcon("div");
  const img = createIcon("img");
  const span = createIcon("span");

  // Atribui propriedades aos elementos
  img.addEventListener("click", () => {
    hiddenSection();
    showGirlPerfil(i);
    showGirlPhotos(i);
  });

  img.src = e.perfil;
  span.innerText = e.name;

  // Adiciona os elementos à página
  DOM.sectionGirls.appendChild(div);
  div.appendChild(img);
  div.appendChild(span);
});

/*-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~-~*/

const showGirlPerfil = (i) => {
  DOM.sectionGirlPerfil.style.display = "flex";

  DOM.girlBanner.style.backgroundImage = `url("${girls[i].banner}")`;
  DOM.girlImg.src = girls[i].perfil;
  DOM.girlName.textContent = girls[i].name;

  DOM.girlTags.innerHTML = "";

  girls[i].tags.forEach((e, i) => {
    const span = createIcon("span");
    span.textContent = e;

    DOM.girlTags.appendChild(span);
  });
  DOM.girlAmount.textContent = girls[i].fotos.length;
};

const showGirlPhotos = (i) => {
  DOM.girlPhotos.innerHTML = "";

  girls[i].fotos.forEach((e) => {
    const div = createIcon("div");

    div.style.backgroundImage = `url("${e}")`;

    div.addEventListener("click", () => {
      DOM.containerGirlsViewPhoto.style.display = "flex";

      DOM.girlsViewPhoto.src = e;
    });

    DOM.girlPhotos.appendChild(div);
  });
};

DOM.buttonCloseGirlsPhoto.addEventListener("click", () => {
  DOM.containerGirlsViewPhoto.style.display = "none";
});
