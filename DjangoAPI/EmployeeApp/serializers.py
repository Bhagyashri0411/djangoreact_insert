from rest_framework import serializers
from EmployeeApp.models import User

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =('DepartmentId', 'DepartmentName')
