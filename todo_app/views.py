from django.shortcuts import render


def todo_list(request):
    context = {
        "user_name": "John Doe",
        "todos": [
            {"title": "Buy groceries", "completed": False},
            {"title": "Clean the house", "completed": True},
        ]
    }

    return render(request, "todo.html", context)