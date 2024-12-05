from django.db import models

class Todo(models.Model):
    todo_name = models.CharField(max_length=300)
    todo_completed = models.BooleanField(default=False)
