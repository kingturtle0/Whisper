from django.shortcuts import get_list_or_404, get_object_or_404
from rest_framework.response import Response
from .serializers import MovieListSerializer, MovieSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
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

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def like(request, movie_pk):
    movie = get_object_or_404(Movie, pk=movie_pk)
    user = request.user

    if request.method == 'GET':
        if movie.like_users.filter(pk=user.pk).exists():
            is_liked = True
        else:
            is_liked = False
        context = {
            'is_liked': is_liked,
            'like_count': movie.like_users.count()
        }
        return Response(context)
    elif request.method == 'POST':
        if movie.like_users.filter(pk=user.pk).exists():
            movie.like_users.remove(user)
            is_liked = False
        else:
            movie.like_users.add(user)
            is_liked = True

        context = {
            'is_liked': is_liked,
            'like_count': movie.like_users.count(),
        }
        return Response(context)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def liked_movies(request):
    user = request.user
    liked_movies = user.like_movies.all()

    serializer = MovieSerializer(liked_movies, many=True)
    return Response(serializer.data)