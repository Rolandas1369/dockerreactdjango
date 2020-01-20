from django.urls import path, include
from todo import views
from rest_framework.routers import DefaultRouter

# Create a router and register our viewsets with it.
router = DefaultRouter(trailing_slash=False)
router.register('todos', views.TodoItemViewSet)

# The API URLs are now determined automatically by the router.
urlpatterns = [
    path('api/', include(router.urls)),
]