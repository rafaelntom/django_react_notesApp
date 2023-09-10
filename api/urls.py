from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes.as_view(), name="routes"),
    path("notes/", views.getNotes.as_view(), name="notes"),
    path("notes/<note_id>/", views.getSingleNote.as_view(), name="note"),
    path("notes/<note_id>/update/", views.updateNote.as_view(), name="update-note"),
    path("notes/<note_id>/delete/", views.deleteNote.as_view(), name="delete-note"),
]
