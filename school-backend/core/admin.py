from django.contrib import admin
from .models import ContactMessage, GalleryImage, GalleryVideo, NewsEvent

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ("name", "email", "phone", "student_class", "subject", "created_at")
    search_fields = ("name", "email", "phone", "student_class", "subject", "message")
    list_filter = ("created_at", "student_class")
    ordering = ("-created_at",)


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ("title", "display_order", "is_published", "created_at")
    list_filter = ("is_published", "created_at")
    search_fields = ("title", "caption")
    ordering = ("display_order", "-created_at")


@admin.register(GalleryVideo)
class GalleryVideoAdmin(admin.ModelAdmin):
    list_display = ("title", "display_order", "category", "platform", "is_published", "created_at")
    list_filter = ("category", "platform", "is_published", "created_at")
    search_fields = ("title", "duration", "youtube_id", "tiktok_id")
    ordering = ("display_order", "-created_at")


@admin.register(NewsEvent)
class NewsEventAdmin(admin.ModelAdmin):
    list_display = ("section", "title", "date_text", "is_published", "display_order", "created_at")
    list_filter = ("section", "is_published", "created_at")
    search_fields = ("title", "date_text", "description")
    ordering = ("section", "display_order", "-created_at")