import './App.css';
import MovieList from './components/MovieList';

function App() {
  const movies = [
    {
        id: '0',
        title: 'Gladiator',
        year: '2000',
        rating: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        synopsis: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        reviews: [],
    },
    {
        id: '1',
        title: 'The Lord of the Rings: The Two Towers',
        year: '2002',
        rating: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg',
        synopsis: 'While Frodo and Sam edge closer to Mordor with the help of the shifty Gollum, the divided fellowship makes a stand against Sauron\'s new ally, Saruman, and his hordes of Isengard.',
        reviews: [],
    },
    {
        id: '2',
        title: 'Shrek 2',
        year: '2004',
        rating: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BMDJhMGRjN2QtNDUxYy00NGM3LThjNGQtMmZiZTRhNjM4YzUxL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
        synopsis: 'Shrek and Fiona travel to the Kingdom of Far Far Away, where Fiona\'s parents are King and Queen, to celebrate their marriage. When they arrive, they find they are not as welcome as they thought they would be.',
        reviews: [],
    },
    {
        id: '3',
        title: 'Pirates of the Caribbean: Dead Man\'s Chest',
        year: '2006',
        rating: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BMTcwODc1MTMxM15BMl5BanBnXkFtZTYwMDg1NzY3._V1_SX300.jpg',
        synopsis: 'Jack Sparrow races to recover the heart of Davy Jones to avoid enslaving his soul to Jones\' service, as other friends and foes seek the heart for their own agenda as well.',
        reviews: [],
    },
    {
        id: '4',
        title: 'The Dark Knight',
        year: '2008',
        rating: 0,
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg',
        synopsis: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        reviews: [],
    }
];
  return (
    <div id="mainContainer" className="container">
      <h1>Movie Review App</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
