// ┬  ┬┌─┐┌┬┐┌─┐
// │  │└─┐ │ └─┐
// ┴─┘┴└─┘ ┴ └─┘
// Functions for printing both lists

function getListsContainerElements(index, container) {
  return container[index];
}

function incrementIndex(index, container) {
  if (index + 1 < container.length) {
    return index + 1;
  }
}

function decrementIndex(index) {
  if (index - 1 >= 0) {
    return index - 1;
  }
}

const generateFavoritesContainer = (index, tagId, linkIndex, target) => {
  const titleElement = document.getElementById(`${tagId}_title`);
  const iconElement = document.getElementById(`${tagId}_icon`);
  titleElement.innerText = CONFIG[target].title;
  iconElement.setAttribute("icon-name", CONFIG[target].icon);

  const categoryElement = document.querySelector(
    `#${tagId}_links_container > div > #link_${linkIndex}_category`
  );
  const descriptionElement = document.querySelector(
    `#${tagId}_links_container > div > #link_${linkIndex}_description`
  );
  categoryElement.innerHTML = `${CONFIG[target].links[index].category}`;

  const categoryIcon = document.createElement("i");
  categoryIcon.setAttribute("icon-name", CONFIG[target].links[index].icon);
  categoryIcon.classList.add("category-icon");
  categoryElement.appendChild(categoryIcon);
  descriptionElement.innerText = CONFIG[target].links[index].description;

  descriptionElement.classList.add("line-clamp-1");

  let lists_1 = document.querySelector(`#${tagId}_links`);

  const links = CONFIG[target].links[index];

  let item = "";
  links.links.forEach((link) => {
    item += `
        <a
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          href="${link.link}"
          class="link-item"
        >${link.name}</a>
    `;
  });
  lists_1.innerHTML = item;
  const prevButton = document.querySelector(
    `#${tagId} > #actions > #prevButton`
  );
  const nextButton = document.querySelector(
    `#${tagId} > #actions > #nextButton`
  );
  prevButton.addEventListener("click", () => {
    const newIndex = decrementIndex(index);
    if (newIndex !== undefined) {
      generateFavoritesContainer(newIndex, tagId, linkIndex, target);
    }
  });
  nextButton.addEventListener("click", () => {    
    const newIndex = incrementIndex(index, CONFIG[target].links);
    if (newIndex !== undefined) {
      generateFavoritesContainer(newIndex, tagId, linkIndex, target);
    }
  });
};

const generateSecondListsContainer = (index) => {
  // for (const list of CONFIG.secondListsContainer) {
  //   let item = `
  //       <div class="card list list__${list.id}" id="list_${list.id}">
  //       <i class="listIcon" icon-name="${list.icon}"></i>
  //       <a
  //       target="${CONFIG.openInNewTab ? "_blank" : ""}"
  //       href="${list.links[0].link}"
  //       class="listItem"
  //       >${list.links[0].name}</a>
  //       <a
  //       target="${CONFIG.openInNewTab ? "_blank" : ""}"
  //       href="${list.links[1].link}"
  //       class="listItem"
  //       >${list.links[1].name}</a>
  //       <a
  //       target="${CONFIG.openInNewTab ? "_blank" : ""}"
  //       href="${list.links[2].link}"
  //       class="listItem"
  //       >${list.links[2].name}</a>
  //       <a
  //       target="${CONFIG.openInNewTab ? "_blank" : ""}"
  //       href="${list.links[3].link}"
  //       class="listItem"
  //       >${list.links[3].name}</a>
  //       </div>
  //     `;
  //   const position = "beforeend";
  //   lists_2.insertAdjacentHTML(position, item);
  // }

  let lists_2 = document.getElementById("list_2_links");
  let item = "";
  CONFIG.secondListsContainer[index].links.forEach((link) => {
    item += `
        <a
          target="${CONFIG.openInNewTab ? "_blank" : ""}"
          href="${link.link}"
          class="link-item"
        >${link.name}</a>
    `;
  });
  lists_2.innerHTML = item;
  const prevButton = document.querySelector(
    "#list_2_links + #actions > #prevButton"
  );
  const nextButton = document.querySelector(
    "#list_2_links + #actions > #nextButton"
  );
  prevButton.addEventListener("click", () => {
    const newIndex = decrementIndex(index);
    if (newIndex !== undefined) {
      generateSecondListsContainer(newIndex);
    }
  });
  nextButton.addEventListener("click", () => {
    const newIndex = incrementIndex(index, CONFIG.secondListsContainer);
    if (newIndex !== undefined) {
      generateSecondListsContainer(newIndex);
    }
  });
};

const generateLists = () => {
  generateFavoritesContainer(0, "list_1", 1, "favorites");
  generateFavoritesContainer(0, "list_2", 2, "repositories");
  generateFavoritesContainer(0, "list_3", 3, "programming");
};

generateLists();
