from django.contrib import admin
from django.http import HttpResponse, JsonResponse
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

def api_root(request):
    return JsonResponse(
        {
            "message": "SMAK backend is running.",
            "endpoints": {
                "admin": "/admin/",
                "contact_api": "/api/contact/",
                "gallery_images_api": "/api/gallery/images/",
                "gallery_videos_api": "/api/gallery/videos/",
            },
        }
    )

def favicon(request):
    return HttpResponse(status=204)

urlpatterns = [
    path('', api_root),
    path('favicon.ico', favicon),
    path('admin/', admin.site.urls),
    path('api/', include('core.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)