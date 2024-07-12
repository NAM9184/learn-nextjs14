import Movie from "../components/movie";
import { API_URL } from "../constants";
import styles from "../styles/home.module.css";
export const metadata = {
  title: "HOME",
};
async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));
  // 백엔드 페치 5초로 고정하면 사용자는 5초의 대기시간을 가지게 맞추었다.
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
