const searchInput = document.getElementById('search-text');
const searchForm = document.querySelector('#search-form')
const resultsDiv = document.getElementById('search-img');
const containerDiv = document.getElementById('search-container');

const detailsDiv = document.getElementById('details-search'); // for details

searchForm.addEventListener('submit', handleSubmit)
    
    
async function handleSubmit(event) {
    event.preventDefault();
    const searchValue = searchInput.value;
    const searchQuery = searchValue.trim();
    resultsDiv.innerHTML = "";
    detailsDiv.innerHTML = ""; // new
    
    console.log(searchQuery);

    try {
        const results = await searchWikipedia(searchQuery);
        if (results.query.searchinfo.totalhits === 0) {
            alert('No results found. Try different keywords');
        }
        displayResults(results);
        containerDiv.style.display = 'flex';
        resultsDiv.style.display = 'block';
        console.log(results);
    } catch (err) {
        console.log(err);
        alert('Failed to search wikipedia');
    }
}

async function searchWikipedia(searchQuery) {
    const endPoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${searchQuery}`;
    const response = await fetch(endPoint);
    if (!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

function displayResults(results) {
    results.query.search.forEach(result => {
        const url = `https://en.wikipedia.org/?curid=${result.pageid}`;
        
        const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
        const title = document.createElement('h3');
        const spanTitle = document.createElement('span');
            spanTitle.innerHTML = '[url link]'
            spanTitle.classList.add('link-result');
        const titleLink = document.createElement('a');
            titleLink.href = url;
            titleLink.target = '_blank';
            titleLink.rel = 'noopener';
            titleLink.textContent = result.title;
            titleLink.appendChild(spanTitle);
        title.appendChild(titleLink);
        resultItem.appendChild(title);

        const snippet = document.createElement('span');
            snippet.classList.add('result-snippet');
            snippet.innerHTML = result.snippet;
            resultItem.appendChild(snippet);
            resultsDiv.appendChild(resultItem);
            
        resultItem.addEventListener('click', async () => {
            try {
                const pageData = await getPageData(result.pageid);
                displayDetails(pageData);
            } catch (err) {
                consolef.log(err);
                alert('Failed to retrieve page data');
            }
        });
    });
}

async function getPageData(pageId) {
    const endPoint = `https://en.wikipedia.org/w/api.php?action=query&prop=extracts|pageimages&format=json&exsentences=3&exlimit=1&explaintext=1&piprop=thumbnail&pithumbsize=300&pageids=${pageId}&origin=*`;
    const response = await fetch(endPoint);
    if(!response.ok) {
        throw Error(response.statusText);
    }
    const json = await response.json();
    return json;
}

function displayDetails(pageData) {
    const page = pageData.query.pages[Object.keys(pageData.query.pages)[0]];
    console.log(page);
    const imageUrl = page.thumbnail ? page.thumbnail.source : './img/logo_empty.png';
    const title = page.title;
    const description = page.extract;
    const details = `
    <img src="${imageUrl}" alt="${title} id="details-img">
    <div id="details-txt">
    <h3>${title}</h3>
    <p>${description}</p>
    </div>
    `;
detailsDiv.innerHTML = details;

}

