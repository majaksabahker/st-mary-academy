from django.urls import path
from .views import (
    contact_create,
    gallery_images_list,
    gallery_videos_list,
    news_events_list,
)

urlpatterns = [
    path('contact/', contact_create),
    path('gallery/images/', gallery_images_list),
    path('gallery/videos/', gallery_videos_list),
    path('news-events/', news_events_list),
]