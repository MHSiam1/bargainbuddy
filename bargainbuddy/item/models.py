from django.contrib.auth.models import User
from django.db import models
from datetime import datetime, timedelta

class Category(models.Model):
    name = models.CharField(max_length=255)
    
    class Meta:
        ordering = ('name',)
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

class Item(models.Model):
    class ApprovalStatus(models.TextChoices):
        PENDING = 'Pending', 'Pending'
        APPROVED = 'Approved', 'Approved'
        DELETED = 'Deleted', 'Deleted'

    category = models.ForeignKey(Category, related_name='items', on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    cupon_code = models.CharField(max_length=255)
    image = models.ImageField(upload_to='items-images/', blank=True, null=True)
    Published_On = models.DateTimeField(auto_now_add=True)
    Validity = models.DateTimeField()
    created_by = models.ForeignKey(User, related_name='items', on_delete=models.CASCADE)
    approval_status = models.CharField(
        max_length=10,
        choices=ApprovalStatus.choices,
        default=ApprovalStatus.PENDING
    )

    def __str__(self):
        return self.name
