import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setLoading(false);

    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <>
      <h1>Detail</h1>
      <div>
        {loading ? ( // 로딩 중 표시
          <p>Loading...</p>
        ) : (
          // 로딩이 끝난 후 데이터 표시
          <div>
            <h2 style={{ fontSize: "bold" }}>{movie.title}</h2>
            <img
              src={movie.medium_cover_image}
              alt={movie.title}
              style={{ width: "320px" }}
            />
            <p style={{ fontSize: "30px" }}>개봉년도: {movie.year}년</p>
            <p style={{ fontSize: "30px" }}>평점: {movie.rating}점</p>
            <p style={{ fontSize: "30px" }}>줄거리: {movie.description_full}</p>
          </div>
        )}
      </div>
    </>
  );
}
export default Detail;
