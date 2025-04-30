class MovieModel {
    constructor() {
        this.movies = this._loadMovies();
    }

    _loadMovies() {
        try {
            const storedMovies = localStorage.getItem('movies');
            if (storedMovies) {
                const parsed = JSON.parse(storedMovies);
                const defaultMovies = this.getDefaultMovies();
                const mergedMovies = [...defaultMovies];

                parsed.forEach(storedMovie => {
                    if (!mergedMovies.some(m => m.id === storedMovie.id)) {
                        mergedMovies.push(storedMovie);
                    }
                });

                return mergedMovies;
            }
            return this.getDefaultMovies();
        } catch (error) {
            console.error('Error loading movies:', error);
            return this.getDefaultMovies();
        }
    }

    _validateMovies(movies) {
        if (!Array.isArray(movies)) return false;

        return movies.every(movie =>
            movie &&
            typeof movie.id === 'number' &&
            typeof movie.title === 'string' &&
            typeof movie.genre === 'string' &&
            typeof movie.year === 'number' &&
            typeof movie.poster === 'string' &&
            typeof movie.synopsis === 'string' &&
            (movie.trailer === null || typeof movie.trailer === 'string')
        );
    }

    getDefaultMovies() {
        return [
            {
                id: 1,
                title: "The Dark Knight",
                genre: "action",
                year: 2008,
                poster: "https://image.tmdb.org/t/p/original/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
                synopsis: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
                trailer: "https://www.youtube.com/embed/EXeTwQWrcwY"
            },
            {
                id: 2,
                title: "Inception",
                genre: "sci-fi",
                year: 2010,
                poster: "https://image.tmdb.org/t/p/original/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
                synopsis: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
                trailer: "https://www.youtube.com/embed/YoHD9XEInc0"
            },
            {
                id: 3,
                title: "Pulp Fiction",
                genre: "drama",
                year: 1994,
                poster: "https://image.tmdb.org/t/p/original/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
                synopsis: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
                trailer: "https://www.youtube.com/embed/s7EdQ4FqbhY"
            },
            {
                id: 4,
                title: "The Shawshank Redemption",
                genre: "drama",
                year: 1994,
                poster: "https://image.tmdb.org/t/p/original/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
                synopsis: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
                trailer: "https://www.youtube.com/embed/6hB3S9bIaco"
            },
            {
                id: 5,
                title: "The Godfather",
                genre: "drama",
                year: 1972,
                poster: "https://image.tmdb.org/t/p/original/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
                synopsis: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
                trailer: "https://www.youtube.com/embed/sY1S34973zA"
            },
            {
                id: 6,
                title: "Superbad",
                genre: "comedy",
                year: 2007,
                poster: "https://image.tmdb.org/t/p/original/ek8e8txUyUwd2BNqj6lFEerJfbq.jpg",
                synopsis: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
                trailer: "https://www.youtube.com/embed/MNpoTxeydiY"
            },
            {
                id: 7,
                title: "Deadpool",
                genre: "action",
                year: 2016,
                poster: "https://image.tmdb.org/t/p/original/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
                synopsis: "A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.",
                trailer: "https://www.youtube.com/embed/ONHBaC-pfsk"
            },
            {
                id: 8,
                title: "Interstellar",
                genre: "sci-fi",
                year: 2014,
                poster: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
                synopsis: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
                trailer: "https://www.youtube.com/embed/zSWdZVtXT7E"
            },
            {
                id: 9,
                title: "The Hangover",
                genre: "comedy",
                year: 2009,
                poster: "https://image.tmdb.org/t/p/original/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
                synopsis: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
                trailer: "https://www.youtube.com/embed/tcdUhdOlz9M"
            },
            {
                id: 10,
                title: "The Matrix",
                genre: "sci-fi",
                year: 1999,
                poster: "https://image.tmdb.org/t/p/original/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
                synopsis: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
                trailer: "https://www.youtube.com/embed/vKQi3bBA1y8"
            },
            {
                id: 11,
                title: "Tenet",
                genre: "sci-fi",
                year: 2020,
                poster: "https://image.tmdb.org/t/p/original/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
                synopsis: "Armed with only one word - Tenet - and fighting for the survival of the entire world, the Protagonist journeys through a twilight world of international espionage on a mission that will unfold in something beyond real time.",
                trailer: "https://www.youtube.com/embed/LdOM0x0XDMo"
            },
            {
                id: 12,
                title: "Soul",
                genre: "animation",
                year: 2020,
                poster: "https://image.tmdb.org/t/p/original/hm58Jw4Lw8OIeECIq5qyPYhAeRJ.jpg",
                synopsis: "Joe Gardner is a middle school teacher with a love for jazz music. After a successful gig at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar.",
                trailer: "https://www.youtube.com/embed/xOsLIiBStEs"
            },
            {
                id: 13,
                title: "Dune",
                genre: "sci-fi",
                year: 2021,
                poster: "https://image.tmdb.org/t/p/original/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
                synopsis: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people.",
                trailer: "https://www.youtube.com/embed/8g18jFHCLXk"
            },
            {
                id: 14,
                title: "No Time to Die",
                genre: "action",
                year: 2021,
                poster: "https://image.tmdb.org/t/p/original/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
                synopsis: "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help.",
                trailer: "https://www.youtube.com/embed/N_gD9-Oa0fg"
            },
            {
                id: 15,
                title: "The Batman",
                genre: "action",
                year: 2022,
                poster: "https://image.tmdb.org/t/p/original/74xTEgt7R36Fpooo50r9T25onhq.jpg",
                synopsis: "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
                trailer: "https://www.youtube.com/embed/mqqft2x_Aa4"
            },
            {
                id: 16,
                title: "Everything Everywhere All at Once",
                genre: "sci-fi",
                year: 2022,
                poster: "https://image.tmdb.org/t/p/original/rKvCys0fMIIi1X9rmJBxTPLAtoU.jpg",
                synopsis: "An aging Chinese immigrant is swept up in an insane adventure, where she alone can save the world by exploring other universes connecting with the lives she could have led.",
                trailer: "https://www.youtube.com/embed/wxN1T1uxQ2g"
            },
            {
                id: 17,
                title: "Top Gun: Maverick",
                genre: "action",
                year: 2022,
                poster: "https://image.tmdb.org/t/p/original/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
                synopsis: "After more than thirty years of service as one of the Navy's top aviators, Pete Mitchell is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him.",
                trailer: "https://www.youtube.com/embed/giXco2jaZ_4"
            },
            {
                id: 18,
                title: "Avatar: The Way of Water",
                genre: "sci-fi",
                year: 2022,
                poster: "https://image.tmdb.org/t/p/original/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
                synopsis: "Jake Sully lives with his newfound family formed on the planet of Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
                trailer: "https://www.youtube.com/embed/d9MyW72ELq0"
            },
            {
                id: 19,
                title: "Oppenheimer",
                genre: "drama",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                synopsis: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
                trailer: "https://www.youtube.com/embed/uYPbbksJxIg"
            },
            {
                id: 20,
                title: "Barbie",
                genre: "comedy",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
                synopsis: "Barbie suffers a crisis that leads her to question her world and her existence, so she sets off for the human world to find true happiness.",
                trailer: "https://www.youtube.com/embed/pBk4NYhWNMM"
            },
            {
                id: 21,
                title: "John Wick: Chapter 4",
                genre: "action",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
                synopsis: "John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe.",
                trailer: "https://www.youtube.com/embed/qEVUtrk8_B4"
            },
            {
                id: 22,
                title: "Spider-Man: Across the Spider-Verse",
                genre: "animation",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
                synopsis: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence.",
                trailer: "https://www.youtube.com/embed/cqGjhVJWtEg"
            },
            {
                id: 23,
                title: "Killers of the Flower Moon",
                genre: "drama",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
                synopsis: "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.",
                trailer: "https://www.youtube.com/embed/EG0si5bSd6I"
            },
            {
                id: 24,
                title: "Poor Things",
                genre: "comedy",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
                synopsis: "The incredible tale of the fantastical evolution of Bella Baxter, a young woman brought back to life by the brilliant and unorthodox scientist Dr. Godwin Baxter.",
                trailer: "https://www.youtube.com/embed/RlbR5N6veqw"
            },
            {
                id: 25,
                title: "The Holdovers",
                genre: "comedy",
                year: 2023,
                poster: "https://image.tmdb.org/t/p/original/VHSzNBTwxV8vh7wylo7O9CLdac.jpg",
                synopsis: "A cranky history teacher at a prep school is forced to remain on campus over the holidays with a troubled student who has no place to go.",
                trailer: "https://www.youtube.com/embed/xtP5VwP0Br4"
            },
            {
                id: 26,
                title: "Dune: Part Two",
                genre: "sci-fi",
                year: 2024,
                poster: "https://image.tmdb.org/t/p/original/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg",
                synopsis: "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family.",
                trailer: "https://www.youtube.com/embed/Warq9I2e0Y4"
            },
        ];
    }

    getAllMovies() {
        return [...this.movies]; 
    }

    getFeaturedMovies() {
        return this.movies.slice(12, 24);
    }

    getMoviesByGenre(genre) {
        return this.movies.filter(movie =>
            movie.genre.toLowerCase() === genre.toLowerCase()
        );
    }

    searchMovies(query) {
        const lowerQuery = query.toLowerCase().trim();
        return this.movies.filter(movie =>
            movie.title.toLowerCase().includes(lowerQuery) ||
            movie.synopsis.toLowerCase().includes(lowerQuery)
        );
    }

    getMovieById(id) {
        return this.movies.find(movie => movie.id === id);
    }

    addMovie(movieData) {
        const newId = this.movies.length > 0
            ? Math.max(...this.movies.map(m => m.id)) + 1
            : 1;

        const newMovie = {
            id: newId,
            title: movieData.title || 'Untitled',
            genre: movieData.genre || 'unknown',
            year: parseInt(movieData.year) || new Date().getFullYear(),
            poster: movieData.poster || '',
            synopsis: movieData.synopsis || '',
            trailer: movieData.trailer || null
        };

        this.movies.push(newMovie);
        this._saveMovies();
        return newMovie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id !== id);
        this._saveMovies();
    }

    _saveMovies() {
        try {
            localStorage.setItem('movies', JSON.stringify(this.movies));
        } catch (error) {
            console.error('Error saving movies:', error);
        }
    }
}


class MovieView {
    constructor() {

        this.modal = document.getElementById('movie-modal') || this._createModal();
        this.movieGrid = document.getElementById('movie-grid');
        this.featuredCarousel = document.getElementById('featured-carousel');
        this.genreGrid = document.querySelector('.genre-grid');
        this.searchBtn = document.getElementById('search-btn');
        this.searchInput = document.getElementById('search-input');
        this.movieForm = document.getElementById('movie-form');
        this.movieList = document.getElementById('movie-list');


        this._initModal();
    }

    _createModal() {
        console.log('Creating modal element');
        const modal = document.createElement('div');
        modal.id = 'movie-modal';
        modal.className = 'modal';
        modal.style.display = 'none';
        modal.innerHTML = `
            <div class="modal-content">
                <button class="modal-close">&times;</button>
                <div class="modal-body"></div>
            </div>
        `;
        document.body.appendChild(modal);
        return modal;
    }

    _initModal() {
        if (!this.modal) return;
        const closeButton = this.modal.querySelector('.modal-close');
        if (closeButton) {
            closeButton.addEventListener('click', (e) => {
                e.stopPropagation();
                this.closeModal();
            });
        }

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'flex') {
                this.closeModal();
            }
        });
    }

    renderFeaturedMovies(movies, containerId) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.error(`Container #${containerId} not found`);
            return false;
        }

        container.innerHTML = movies.map(movie => `
            <div class="movie-card" data-id="${movie.id}">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <h3>${movie.title} (${movie.year})</h3>
                </div>
            </div>
        `).join('');

        return true;
    }

    renderMovieGrid(movies, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return false;

        container.innerHTML = movies.map(movie => `
            <div class="movie-card" data-id="${movie.id}">
                <img src="${movie.poster}" alt="${movie.title}" loading="lazy">
                <div class="movie-overlay">
                    <h3>${movie.title} (${movie.year})</h3>
                    <p>${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                </div>
            </div>
        `).join('');

        return true;
    }

    renderMovieList(movies, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return false;

        container.innerHTML = movies.map(movie => `
            <div class="movie-item">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-info">
                    <h3>${movie.title} (${movie.year})</h3>
                    <p><strong>Genre:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                    <button class="delete-btn" data-id="${movie.id}">Delete</button>
                </div>
            </div>
        `).join('');

        return true;
    }

    showMovieDetails(movie) {
        if (!this.modal) {
            this.modal = this._createModal();
            this._initModal();
        }

        if (!this.modal.querySelector('.modal-body')) {
            this.modal.innerHTML = `
                <div class="modal-content">
                    <button class="modal-close">&times;</button>
                    <div class="modal-body"></div>
                </div>
            `;
            this._initModal();
        }

        const modalBody = this.modal.querySelector('.modal-body');
        if (!modalBody) return false;

        modalBody.innerHTML = `
            <img class="modal-poster" src="${movie.poster}" alt="${movie.title}">
            <div class="modal-info">
                <h2>${movie.title} (${movie.year})</h2>
                <p><strong>Genre:</strong> ${movie.genre.charAt(0).toUpperCase() + movie.genre.slice(1)}</p>
                <p class="synopsis">${movie.synopsis}</p>
                ${movie.trailer ? `
                <div class="trailer-container">
                    <iframe src="${this._formatTrailerUrl(movie.trailer)}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                </div>
                ` : '<p>No trailer available</p>'}
            </div>
        `;

        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        return true;
    }

    _formatTrailerUrl(url) {
        if (!url) return '';
        if (url.includes('youtube.com/watch?v=')) {
            return url.replace('watch?v=', 'embed/') + '?autoplay=1';
        }
        if (url.includes('youtu.be/')) {
            return url.replace('youtu.be/', 'youtube.com/embed/') + '?autoplay=1';
        }
        return url;
    }

    closeModal() {
        if (this.modal) {
            this.modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    bindFeaturedCarouselClick(handler) {
        if (!this.featuredCarousel) {
            console.warn('Featured carousel not found');
            return;
        }
        this.featuredCarousel.addEventListener('click', (e) => {
            const card = e.target.closest('.movie-card');
            if (card) handler(parseInt(card.dataset.id));
        });
    }

    bindMovieGridClick(handler) {
        if (!this.movieGrid) return;
        this.movieGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.movie-card');
            if (card) handler(parseInt(card.dataset.id));
        });
    }

    bindGenreClick(handler) {
        if (!this.genreGrid) return;
        this.genreGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.genre-card');
            if (card) handler(card.dataset.genre);
        });
    }

    bindSearch(handler) {
        if (!this.searchBtn || !this.searchInput) return;

        const executeSearch = () => {
            const query = this.searchInput.value.trim();
            if (query) handler(query);
        };

        this.searchBtn.addEventListener('click', executeSearch);
        this.searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') executeSearch();
        });
    }

    bindAddMovie(handler) {
        if (!this.movieForm) return;

        this.movieForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const formData = new FormData(this.movieForm);
            const movieData = {
                title: formData.get('title'),
                genre: formData.get('genre'),
                year: parseInt(formData.get('year')),
                poster: formData.get('poster'),
                synopsis: formData.get('synopsis'),
                trailer: formData.get('trailer')
            };

            handler(movieData);
            this.movieForm.reset();
        });
    }

    bindDeleteMovie(handler) {
        if (!this.movieList) return;

        this.movieList.addEventListener('click', (e) => {
            if (e.target.classList.contains('delete-btn')) {
                if (confirm('Are you sure you want to delete this movie?')) {
                    handler(parseInt(e.target.dataset.id));
                }
            }
        });
    }
}

class MovieController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this._initialize();
    }

    _initialize() {
        try {
            this._setupPage();
            this._bindEventHandlers();
            console.log('Controller initialized successfully');
        } catch (error) {
            console.error('Initialization failed:', error);
            this._showErrorUI('Failed to initialize application');
        }
    }

    _setupPage() {
        const path = window.location.pathname.split('/').pop() || 'index.html';

        switch (path) {
            case 'index.html':
            case '':
                this._setupHomePage();
                break;
            case 'browse.html':
                this._setupBrowsePage();
                break;
            case 'manage.html':
                this._setupManagePage();
                break;
        }
    }

    _setupHomePage() {
        const featuredMovies = this.model.getFeaturedMovies();
        this.view.renderFeaturedMovies(featuredMovies, 'featured-carousel');
        this._animateFeaturedCarousel();
    }

    _setupBrowsePage() {
        const allMovies = this.model.getAllMovies();
        this.view.renderMovieGrid(allMovies, 'movie-grid');
    }

    _setupManagePage() {
        const allMovies = this.model.getAllMovies();
        this.view.renderMovieList(allMovies, 'movie-list');
    }

    _animateFeaturedCarousel() {
        const carousel = document.getElementById('featured-carousel');
        if (carousel) {
            let scrollAmount = 0;
            const scrollStep = 200;
            const scrollInterval = setInterval(() => {
                carousel.scrollLeft += scrollStep;
                scrollAmount += scrollStep;

                if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
                    clearInterval(scrollInterval);
                }
            }, 3000);
        }
    }

    _bindEventHandlers() {
        if (this.view.featuredCarousel) {
            this.view.bindFeaturedCarouselClick(this._handleMovieClick.bind(this));
        }

        if (this.view.movieGrid) {
            this.view.bindMovieGridClick(this._handleMovieClick.bind(this));
        }

    
        if (this.view.genreGrid) {
            this.view.bindGenreClick(this._handleGenreClick.bind(this));
        }


        if (this.view.searchBtn && this.view.searchInput) {
            this.view.bindSearch(this._handleSearch.bind(this));
        }

        if (this.view.movieForm) {
            this.view.bindAddMovie(this._handleAddMovie.bind(this));
        }

        if (this.view.movieList) {
            this.view.bindDeleteMovie(this._handleDeleteMovie.bind(this));
        }
    }

    _handleMovieClick(movieId) {
        try {
            const movie = this.model.getMovieById(movieId);
            if (movie) {
                this.view.showMovieDetails(movie);
            } else {
                this._showErrorUI('Movie not found');
            }
        } catch (error) {
            console.error('Error showing movie details:', error);
            this._showErrorUI('Failed to load movie details');
        }
    }

    _handleGenreClick(genre) {
        try {
            const movies = this.model.getMoviesByGenre(genre);
            this.view.renderMovieGrid(movies, 'movie-grid');
        } catch (error) {
            console.error('Error filtering by genre:', error);
            this._showErrorUI('Failed to filter movies');
        }
    }

    _handleSearch(query) {
        try {
            const results = this.model.searchMovies(query);
            if (results.length > 0) {
                this.view.renderMovieGrid(results, 'movie-grid');
            } else {
                this._showErrorUI('No movies found matching your search');
            }
        } catch (error) {
            console.error('Error searching movies:', error);
            this._showErrorUI('Search failed');
        }
    }

    _handleAddMovie(movieData) {
        try {
            const newMovie = this.model.addMovie(movieData);
            this._updateMovieDisplays();
            this._showSuccessUI(`"${newMovie.title}" added successfully!`);
        } catch (error) {
            console.error('Error adding movie:', error);
            this._showErrorUI('Failed to add movie');
        }
    }

    _handleDeleteMovie(movieId) {
        try {
            const movie = this.model.getMovieById(movieId);
            this.model.deleteMovie(movieId);
            this._updateMovieDisplays();
            this._showSuccessUI(`"${movie.title}" deleted successfully`);
        } catch (error) {
            console.error('Error deleting movie:', error);
            this._showErrorUI('Failed to delete movie');
        }
    }

    _updateMovieDisplays() {
        const allMovies = this.model.getAllMovies();
        const featuredMovies = this.model.getFeaturedMovies();

        if (document.getElementById('featured-carousel')) {
            this.view.renderFeaturedMovies(featuredMovies, 'featured-carousel');
        }
        if (document.getElementById('movie-grid')) {
            this.view.renderMovieGrid(allMovies, 'movie-grid');
        }
        if (document.getElementById('movie-list')) {
            this.view.renderMovieList(allMovies, 'movie-list');
        }
    }

    _showErrorUI(message) {
        const existingAlert = document.querySelector('.alert.error');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert error';
        alertDiv.textContent = message;
        document.body.prepend(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 5000);
    }

    _showSuccessUI(message) {
        const existingAlert = document.querySelector('.alert.success');
        if (existingAlert) existingAlert.remove();

        const alertDiv = document.createElement('div');
        alertDiv.className = 'alert success';
        alertDiv.textContent = message;
        document.body.prepend(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('MOVIEFLIX initializing...');

    try {
        const isMovieFlixPage = document.querySelector(
            'body.index-page, body.browse-page, body.manage-page'
        );

        if (!isMovieFlixPage) {
            console.warn('Not a MOVIEFLIX page, skipping initialization');
            return;
        }

        if (typeof MovieModel === 'undefined' ||
            typeof MovieView === 'undefined' ||
            typeof MovieController === 'undefined') {
            throw new Error('Required classes not loaded. Check script order.');
        }

        const model = new MovieModel();
        const view = new MovieView();

        if (!view.modal) {
            console.warn('Modal initialization warning - using fallback');
        }

        new MovieController(model, view);
        console.log('MOVIEFLIX initialized successfully');

    } catch (error) {
        console.error('MOVIEFLIX initialization failed:', error);

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.innerHTML = `
            <h2>Application Error</h2>
            <p>We're having trouble loading MOVIEFLIX. Please try again later.</p>
            <p>${error.message}</p>
        `;
        document.body.prepend(errorDiv);
    }
});