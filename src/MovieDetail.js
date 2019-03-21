/* eslint-disable comma-dangle */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Overdrive from 'react-overdrive';
import { Poster } from './movie';

const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';
const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280';

class MovieDetail extends PureComponent {
  state = {
    movie: {},
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${
          this.props.match.params.id
        }movie?api_key=48c01894d7887ea8ffef8f22cfac1d98&language=en-US&region`
      );
      const movie = await res.json();
      this.setState({
        movie,
      });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    const { movie } = this.state;

    return (
      <MovieWrapper backdrop={`${BACKDROP_PATH}${movie.backdrop_path}`}>
        <MovieInfo>
          <Overdrive id={movie.id}>
            <Poster
              src={`${POSTER_PATH}${movie.poster_path}`}
              alt={movie.title}
            />
          </Overdrive>
          <div>
            <h1>{movie.title}</h1>
            <h3>{movie.release_date}</h3>
            <p>{movie.overview}</p>
          </div>
        </MovieInfo>
      </MovieWrapper>
    );
  }
}

export default MovieDetail;

const MovieWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 25px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
