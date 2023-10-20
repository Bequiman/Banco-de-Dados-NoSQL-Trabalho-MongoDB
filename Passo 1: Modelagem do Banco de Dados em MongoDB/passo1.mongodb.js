collection user

{
    "_id": {
      "$oid": "65317828369449a262e225da"
    },
    "first_name": "João",
    "last_name": "Silva",
    "email": "joao.silva@iftm.com",
    "cell_phone": "+1 555-123-4567"
}

collection project

{
    "_id": {
      "$oid": "65317854571ca980bdefbbb2"
    },
    "name": "Projeto 1",
    "start_date": {
      "$date": "2023-10-01T00:00:00Z"
    },
    "end_date": {
      "$date": "2023-10-31T23:59:59Z"
    }
}

collection task

{
    "_id": {
      "$oid": "65317fb3d647412681130247"
    },
    "title": "Task 1",
    "description": "Nova descrição da tarefa.",
    "start_date": {
      "$date": "2023-10-19T09:00:00Z"
    },
    "deadline_date": {
      "$date": "2023-10-21T17:00:00Z"
    },
    "priority": 3,
    "status": "To-do",
    "projectID": {
      "$oid": "65317854571ca980bdefbbb2"
    },
    "userID": {
      "$oid": "65317828369449a262e225db"
    },
    "taskID": null
}