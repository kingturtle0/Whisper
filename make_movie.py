import requests
import json

def get_movies(api_key):
    movies = []
    for i in range(1, 101):
        url = f"https://api.themoviedb.org/3/discover/movie?api_key={api_key}&include_adult=false&include_video=false&language=ko-KR&page={i}&sort_by=revenue.desc"
        # 전체 영화(36000페이지 중에서 1~50페이지만)
        # 성인 영화 제외, 한국어 번역, 수익 내림차순(다 우리가 아는 영화들만 나옴)
        response = requests.get(url)
        data = response.json()
        results = data.get('results', [])
        for result in results:
            if result.get('original_language') != 'zh' and result.get('overview') != '':
                movie = {
                    "model": "movies.movie",
                    "fields": {
                        'movie_id': result.get('id'),
                        'genres': result.get('genre_ids'),
                        'title': result.get('title'),
                        'overview': result.get('overview'),
                        'poster_path': result.get('poster_path'),
                        'release_date': result.get('release_date'),
                        'vote_average': result.get('vote_average'),
                    }
                }
                movies.append(movie)
    return movies

def save_movies_to_json(movies, file_path):
    with open(file_path, 'w') as file:
        json.dump(movies, file)

if __name__ == '__main__':
    api_key = '5db44a1f1708b49ae75a1bb65957bfac'
    movies = get_movies(api_key)
    print(len(movies))
    save_movies_to_json(movies, 'movies.json')
