from django.db import models

class Todo(models.Model):
    todo_name = models.CharField(max_length=300)
    completed = models.BooleanField(default=False)
