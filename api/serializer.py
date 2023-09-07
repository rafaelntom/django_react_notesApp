from rest_framework import serializers
from . import models


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Note
        fields = "__all__"
        read_only_fields = ["id", "created"]
