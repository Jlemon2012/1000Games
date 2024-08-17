// Define the API endpoint
const apiUrl = 'https://www.acclaimedvideogames.com/api/games/?start=1970&end=2024&genre_option=L&limit=1000&offset=0';

// Fetch data from the API
fetch(apiUrl)
  .then(response => {
    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    // Attempt to parse the response as JSON
    return response.json();
  })
  .then(data => {
    // Check if the data has the expected structure
    if (!data || !data.results) {
      throw new Error('Unexpected data format');
    }

    // Log the entire data object
    console.log('Fetched data:', data);

    // Access the 'results' array
    const games = data.results;

    // Iterate over the games and log information about each game
    games.forEach(game => {
      console.log(`Game: ${game.name}`);
      console.log(`Description: ${game.description}`);
      console.log(`Year of Release: ${game.year_of_release}`);
      console.log(`Developers: ${game.developers.map(dev => dev.name).join(', ')}`);
      console.log(`Genres: ${game.genres.map(genre => genre.name).join(', ')}`);
      console.log(`Platforms: ${game.platforms.map(platform => platform.name).join(', ')}`);
      console.log('---');
    });
  })
  .catch(error => {
    // Log the exact error
    console.error('Error fetching data:', error);
  });