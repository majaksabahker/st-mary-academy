from rest_framework import serializers
from .models import ContactMessage, GalleryImage, GalleryVideo, NewsEvent

class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'


class GalleryImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = GalleryImage
        fields = ("id", "title", "caption", "image_url", "display_order")

    def get_image_url(self, obj):
        request = self.context.get("request")
        if request:
            return request.build_absolute_uri(obj.image.url)
        return obj.image.url


class GalleryVideoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryVideo
        fields = (
            "id",
            "title",
            "category",
            "duration",
            "platform",
            "youtube_id",
            "tiktok_id",
            "thumbnail_url",
            "display_order",
        )


class NewsEventSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsEvent
        fields = (
            "id",
            "section",
            "title",
            "date_text",
            "description",
            "is_published",
            "display_order",
        )