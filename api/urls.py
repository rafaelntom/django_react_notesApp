from django.urls import path
from . import views

urlpatterns = [
    path("", views.getRoutes.as_view(), name="routes"),
    path("notes/", views.getNotes.as_view(), name="notes"),
    path("notes/<note_id>/", views.getSingleNote.as_view(), name="note"),
]
