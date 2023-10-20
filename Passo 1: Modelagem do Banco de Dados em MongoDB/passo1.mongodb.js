collection user

{
  "first_name": "João",
  "last_name": "Silva",
  "email": "joao.silva@example.com",
  "cell_phone": "+1 555-123-4567"
}

collection project

{
  "name": "Projeto 1",
  "start_date": ISODate("2023-10-01T00:00:00Z"),
  "end_date": ISODate("2023-10-31T23:59:59Z")
}

collection task

{
  "title": "Task 1",
  "description": "This is the first task.",
  "start_date": ISODate("2023-10-19T09:00:00Z"),
  "deadline_date": ISODate("2023-10-20T17:00:00Z"),
  "priority": 3,
  "status": "To-do",
  "projectID": ObjectId("65317854571ca980bdefbbb2"),
  "userID": ObjectId("65317828369449a262e225da"),
  "taskID": null
}


{
  "title": "Task 26",
  "description": "This is a new task marked as To-do.",
  "start_date": ISODate("2023-11-13T09:00:00Z"),
  "deadline_date": ISODate("2023-11-14T17:00:00Z"),
  "priority": 3,
  "status": "To-do",
  "projectID": ObjectId("65317854571ca980bdefbbb2"),
  "userID": ObjectId("65317828369449a262e225da"),
  "taskID": ObjectId("65317fb3d647412681130247")
}