document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('startBtn');
  startBtn.addEventListener('click', setUsername);

  const nameForm = document.getElementById('nameForm');
  nameForm.addEventListener('click', event => {
    event.preventDefault();
  });

  function setUsername() {
    const firstNameInput = document.getElementById('firstName');
    const valueName = firstNameInput.value;

    document.getElementById('username').innerText = `Hello, ${valueName}!`;
    // startBtn.style.display = 'none';
    // firstNameInput.style.display = 'none';
  }

  const productForm = document.getElementById('productForm');
  productForm.addEventListener('click', event => {
    event.preventDefault();
  });

  //create categories list
  const listBox = document.getElementById('listBox');
  const categoriesList = document.createElement('ul');
  listBox.appendChild(categoriesList);

  const addProductBtn = document.getElementById('addBtn');
  addProductBtn.addEventListener('click', addCategory);

  const arrWithUniqueCategoryName = [];

  function addCategory() {
    const productCategoryValue = document.getElementById('categoryName').value;
    const productNameValue = document.getElementById('productName').value;

    //stworzenie tablicy z nazwami kategorii i dodanie do dom
    if (arrWithUniqueCategoryName.indexOf(productCategoryValue) === -1) {
      arrWithUniqueCategoryName.push(productCategoryValue);
      const categoryElement = document.createElement('li');
      categoriesList.appendChild(categoryElement);
      categoryElement.innerText = productCategoryValue;
    //   categoryElement.classList.add(`${productCategoryValue}`)

      //dodawanie produktu
      const productsElement = document.createElement('ul');
      productsElement.classList.add(`${productCategoryValue}`);
      categoryElement.appendChild(productsElement);
      const productElement = document.createElement('li');
      productsElement.appendChild(productElement);
      //dodawanie value do li
      productElement.innerText = productNameValue;
    } else if (arrWithUniqueCategoryName.includes(productCategoryValue)) {
      const prodEl = document.querySelector(`.${productCategoryValue}`);
      const productElement = document.createElement('li');
      console.log(prodEl)
      prodEl.appendChild(productElement);
      productElement.innerText = productNameValue;
      console.log('taka sama kategoria')
    }
    console.log(arrWithUniqueCategoryName);
  }

  function addCategoryAndProduct() {}
});
