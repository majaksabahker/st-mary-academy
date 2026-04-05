from django.db import models


class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=30, blank=True, default="")
    email = models.EmailField()
    student_class = models.CharField(max_length=50, blank=True, default="")
    subject = models.CharField(max_length=200)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class GalleryImage(models.Model):
    title = models.CharField(max_length=150)
    caption = models.CharField(max_length=255, blank=True, default="")
    image = models.ImageField(upload_to="gallery/images/")
    is_published = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("display_order", "-created_at")

    def __str__(self):
        return self.title


class GalleryVideo(models.Model):
    CATEGORY_CHOICES = (
        ("Events", "Events"),
        ("Sports", "Sports"),
        ("Academics", "Academics"),
    )
    PLATFORM_CHOICES = (
        ("youtube", "YouTube"),
        ("tiktok", "TikTok"),
    )

    title = models.CharField(max_length=180)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default="Events")
    duration = models.CharField(max_length=20, blank=True, default="")
    platform = models.CharField(max_length=20, choices=PLATFORM_CHOICES, default="youtube")
    youtube_id = models.CharField(max_length=100, blank=True, default="")
    tiktok_id = models.CharField(max_length=100, blank=True, default="")
    thumbnail_url = models.URLField(blank=True, default="")
    is_published = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("display_order", "-created_at")

    def __str__(self):
        return self.title


class NewsEvent(models.Model):
    SECTION_CHOICES = (
        ("Latest", "Latest News"),
        ("Events", "Past & Upcoming Events"),
        ("Calendar", "Academic Calendar"),
    )

    section = models.CharField(max_length=20, choices=SECTION_CHOICES, default="Latest")
    title = models.CharField(max_length=200)
    date_text = models.CharField(max_length=100, blank=True, default="")
    description = models.TextField()
    is_published = models.BooleanField(default=True)
    display_order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ("section", "display_order", "-created_at")

    def __str__(self):
        return self.title