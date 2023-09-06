from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Note
from .serializer import NoteSerializer
from django.shortcuts import get_object_or_404


class getRoutes(APIView):
    def get(self, request):
        routes = [
            {
                "Endpoint": "/notes/",
                "method": "GET",
                "body": None,
                "description": "Returns an array of notes",
            },
            {
                "Endpoint": "/notes/id",
                "method": "GET",
                "body": None,
                "description": "Returns a single note object",
            },
            {
                "Endpoint": "/notes/create/",
                "method": "POST",
                "body": {"body": ""},
                "description": "Creates new note with data sent in post request",
            },
            {
                "Endpoint": "/notes/id/update/",
                "method": "PUT",
                "body": {"body": ""},
                "description": "Creates an existing note with data sent in post request",
            },
            {
                "Endpoint": "/notes/id/delete/",
                "method": "DELETE",
                "body": None,
                "description": "Deletes and exiting note",
            },
        ]
        return Response(routes)


class getNotes(APIView):
    def get(self, request):
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)


class getSingleNote(APIView):
    def get(self, request, note_id):
        note = get_object_or_404(Note, pk=note_id)
        serializer = NoteSerializer(note)
        return Response(serializer.data)
