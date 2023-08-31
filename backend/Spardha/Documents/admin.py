from django.contrib import admin
from .models import Document

# Register your models here.
class DocumentAdmin(admin.ModelAdmin):
    list_display = ['user_id', 'document', 'is_verified', 'verified_by', 'verification_time']

admin.site.register(Document, DocumentAdmin)
