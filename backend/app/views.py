from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from .models import Todo
from .serializer import TodoSerializer

@api_view(['GET'])
def todo_get(request):
    todo = Todo.objects.all()[::-1]
    serializer = TodoSerializer(todo , many=True)
    return Response(serializer.data)

@api_view(['POST'])
def todo_create(request):
    data = request.data 
    todo = Todo.objects.create(todo_name=data['todo_name'])
    serializer = TodoSerializer(todo , many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def todo_update(request , pk):
    data = request.data
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response('Todo does not exist')
    
    serializer = TodoSerializer(todo, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response('Todo is Updated')
    
    return Response(serializer.errors)


@api_view(['DELETE'])
def todo_delete(response , pk):
    try:
        todo = Todo.objects.get(pk=pk)
    except Todo.DoesNotExist:
        return Response('Todo does not exist')
    todo.delete()

    return Response('Todo is Deleted')


