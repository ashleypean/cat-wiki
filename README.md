# CatWiki

This app was created as a solution entry for [DevChallenges](http://devchallenges.io/) using React for the frontend and Node and ExpressJS for the backend. 

## What does this project do?
This project functions as a pseudo-wikipedia for looking up information on different cat breeds.

1. Once the user enters the page, they will be prompted to select a cat breed by typing into the search bar (w/ filtered dropdown)

  ![Dropdown Search Bar](assets/dropdown-search.png)

2. The user can then click on a cat breed or manually type the search entry to learn more information about them
  ![Search Results](assets/search-results.png)

3. The user can view a list of the Top 10 cat breeds and a brief snippet about them. 
  ![Top 10 Cat Breeds](assets/top10.png)

## Other Small Features 

1. Query Error handling 

Bad queries or invalid URLs get handled and redirected to a 404 Not Found page

![Bad Search for a cat breed that doesn't exist"https://cat-wikis.herokuapp.com/breeds/search/Bengalkj;askdf"](assets/bad-query.png)

2. Loading Page 

While the data is being fetched from the server and transferred to the front-end, the user will be blocked from seeing the webpage and will instead see an animation. 
![Loading Page](assets/loading.gif)