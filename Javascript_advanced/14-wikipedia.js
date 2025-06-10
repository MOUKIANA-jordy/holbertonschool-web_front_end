// 14-wikipedia.js

function createElement(data) {
  const p = document.createElement('p');
  p.textContent = data;
  document.body.appendChild(p);
}

function queryWikipedia(callback) {
  const xhr = new XMLHttpRequest();
  const url = 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  xhr.open('GET', url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      const pages = response.query.pages;
      const pageId = Object.keys(pages)[0];
      const extract = pages[pageId].extract;
      callback(extract);
    }
  };

  xhr.send();
}

// Appel de queryWikipedia avec createElement comme callback
queryWikipedia(createElement);
