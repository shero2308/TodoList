from django.urls import path
from .views import todo_get , todo_create , todo_update , todo_delete

urlpatterns = [
    path('todo/',todo_get),
    path('create/', todo_create),
    path('update/<int:pk>',todo_update),
    path('delete/<int:pk>',todo_delete)
]