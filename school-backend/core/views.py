from django.conf import settings
from django.core.mail import send_mail
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import ContactMessage, GalleryImage, GalleryVideo, NewsEvent
from .serializers import (
    ContactSerializer,
    GalleryImageSerializer,
    GalleryVideoSerializer,
    NewsEventSerializer,
)

@api_view(['POST'])
def contact_create(request):
    serializer = ContactSerializer(data=request.data)
    if serializer.is_valid():
        contact_message = serializer.save()

        admin_email = getattr(settings, "ADMIN_NOTIFICATION_EMAIL", "")
        if admin_email:
            email_subject = f"New Website Inquiry: {contact_message.subject}"
            email_body = (
                f"Name: {contact_message.name}\n"
                f"Phone: {contact_message.phone}\n"
                f"Email: {contact_message.email}\n"
                f"Student Class: {contact_message.student_class}\n"
                f"Subject: {contact_message.subject}\n\n"
                f"Message:\n{contact_message.message}\n"
            )
            send_mail(
                subject=email_subject,
                message=email_body,
                from_email=getattr(settings, "DEFAULT_FROM_EMAIL", None),
                recipient_list=[admin_email],
                fail_silently=True,
            )

        return Response({"message": "Message sent successfully"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def gallery_images_list(request):
    queryset = GalleryImage.objects.filter(is_published=True)
    serializer = GalleryImageSerializer(queryset, many=True, context={"request": request})
    return Response(serializer.data)


@api_view(['GET'])
def gallery_videos_list(request):
    queryset = GalleryVideo.objects.filter(is_published=True)
    serializer = GalleryVideoSerializer(queryset, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def news_events_list(request):
    queryset = NewsEvent.objects.filter(is_published=True).order_by(
        "section",
        "display_order",
        "-created_at",
    )
    serializer = NewsEventSerializer(queryset, many=True)
    return Response(serializer.data)