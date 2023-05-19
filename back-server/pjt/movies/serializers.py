from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import Movie


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('username', )


class MovieListSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    genres = serializers.SlugRelatedField(
        many=True,
        read_only=True,
        slug_field='name'
    )

    class Meta:
        model = Movie
        fields = '__all__'


class MovieSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Movie
        fields = '__all__'
