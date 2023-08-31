from rest_framework import generics, permissions, status
from .models import Document
from .serializers import AllDocumentSerializer, DocumentUpdateSerializer
from rest_framework.response import Response
from drf_yasg.utils import swagger_auto_schema
from django.utils import timezone

class AllDocumentView(generics.GenericAPIView):
    serializer_class = AllDocumentSerializer

    def get(self, request):
        documents = Document.objects.all()
        serializer = AllDocumentSerializer(documents, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    @swagger_auto_schema(
        responses={
            201: """{
                    "success": "Document has been created successfully"
                }"""
        }
    )
    def post(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        document=serializer.save()
        return Response({"success": "Document has been created successfully"}, status=status.HTTP_201_CREATED)

class DocumentView(generics.GenericAPIView):
    serializer_class = DocumentUpdateSerializer

    @swagger_auto_schema(
        responses={
            204: """{
                    "success": "Document's verification status has been updated successfully"
                }""",
            404: """{
                "error": "The Document does not exist"
                }"""
        }
    )
    def patch(self, request, id):
        try:
            document_to_verify = Document.objects.get(id=id)
            document_to_verify.verification_time = timezone.now()
            serializer = self.get_serializer(document_to_verify, data=request.data,partial=True)
            serializer.is_valid(raise_exception=True)
            document=serializer.save()
            return Response({"success": "Document's verification status has been updated successfully"}, status=status.HTTP_204_NO_CONTENT)
        except:
            return Response({"error": "The Document does not exist"}, status=status.HTTP_404_NOT_FOUND)
