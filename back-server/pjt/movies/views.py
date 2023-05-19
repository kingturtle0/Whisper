from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.response import Response
from .serializers import MovieListSerializer, MovieSerializer
from rest_framework.decorators import api_view
from .models import Movie


@api_view(['GET'])
def movie_list(request):
    if request.method == 'GET':
        movies = get_list_or_404(Movie)
        serializer = MovieListSerializer(movies, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def movie_detail(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)