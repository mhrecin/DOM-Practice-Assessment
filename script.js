const description = document.getElementById('description');
const link = document.getElementById('link');
const listArea = document.getElementById('list-area');

function submitClicked() {
    const descriptionValue = description.value;
    const linkValue = link.value;
    const listItem = document.createElement('a');  
    listItem.innerText = descriptionValue;
    listItem.setAttribute('href', linkValue);
    listArea.append(listItem); 
    listItem.style.display = 'block';
    description.value = null;
    link.value = null;
  }
