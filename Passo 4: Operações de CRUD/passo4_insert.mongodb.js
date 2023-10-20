db.user.insertMany([
  {
      "first_name": "João",
      "last_name": "Silva",
      "email": "joao.silva@example.com",
      "cell_phone": "+1 555-123-4567"
  },
  {
      "first_name": "Maria",
      "last_name": "Pereira",
      "email": "maria.pereira@example.com",
      "cell_phone": "+1 555-987-6543"
  },
  {
      "first_name": "Pedro",
      "last_name": "Santos",
      "email": "pedro.santos@example.com",
      "cell_phone": "+1 555-789-1234"
  },
  {
      "first_name": "Ana",
      "last_name": "Rocha",
      "email": "ana.rocha@example.com",
      "cell_phone": "+1 555-234-5678"
  },
  {
      "first_name": "Luís",
      "last_name": "Ferreira",
      "email": "luis.ferreira@example.com",
      "cell_phone": "+1 555-345-6789"
  }
]);


db.project.insertMany([
  {
      "name": "Projeto 1",
      "start_date": ISODate("2023-10-01T00:00:00Z"),
      "end_date": ISODate("2023-10-31T23:59:59Z")
  },
  {
      "name": "Projeto 2",
      "start_date": ISODate("2023-11-05T00:00:00Z"),
      "end_date": ISODate("2023-11-30T23:59:59Z")
  },
  {
      "name": "Projeto 3",
      "start_date": ISODate("2023-12-01T00:00:00Z"),
      "end_date": ISODate("2023-12-31T23:59:59Z")
  },
  {
      "name": "Projeto 4",
      "start_date": ISODate("2024-01-01T00:00:00Z"),
      "end_date": ISODate("2024-01-31T23:59:59Z")
  },
  {
      "name": "Projeto 5",
      "start_date": ISODate("2024-02-01T00:00:00Z"),
      "end_date": ISODate("2024-02-28T23:59:59Z")
  }
]);


db.task.insertMany([
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
  },
  {
      "title": "Task 2",
      "description": "This is the second task.",
      "start_date": ISODate("2023-10-20T10:00:00Z"),
      "deadline_date": ISODate("2023-10-21T16:00:00Z"),
      "priority": 2,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb3"),
      "userID": ObjectId("65317828369449a262e225db"),
      "taskID": null
  },
  {
      "title": "Task 3",
      "description": "This is the third task.",
      "start_date": ISODate("2023-10-21T08:00:00Z"),
      "deadline_date": ISODate("2023-10-22T14:00:00Z"),
      "priority": 1,
      "status": "Complete",
      "projectID": ObjectId("65317854571ca980bdefbbb4"),
      "userID": ObjectId("65317828369449a262e225dc"),
      "taskID": null
  },
  {
      "title": "Task 4",
      "description": "This is the fourth task.",
      "start_date": ISODate("2023-10-22T09:00:00Z"),
      "deadline_date": ISODate("2023-10-23T18:00:00Z"),
      "priority": 4,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb5"),
      "userID": ObjectId("65317828369449a262e225dd"),
      "taskID": null
  },
  {
      "title": "Task 5",
      "description": "This is the fifth task.",
      "start_date": ISODate("2023-10-23T11:00:00Z"),
      "deadline_date": ISODate("2023-10-24T15:00:00Z"),
      "priority": 5,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": null
  }
]);



db.task.insertMany([
  {
    "title": "Task 6",
    "description": "This is a new task.",
    "start_date": ISODate("2023-10-24T10:00:00Z"),
    "deadline_date": ISODate("2023-10-25T17:00:00Z"),
    "priority": 2,
    "status": "To-do",
    "projectID": ObjectId("65317854571ca980bdefbbb2"),
    "userID": ObjectId("65317828369449a262e225da"),
    "taskID": null
  },
  {
    "title": "Task 7",
    "description": "This is another new task.",
    "start_date": ISODate("2023-10-25T08:00:00Z"),
    "deadline_date": ISODate("2023-10-26T14:00:00Z"),
    "priority": 3,
    "status": "In-Progress",
    "projectID": ObjectId("65317854571ca980bdefbbb3"),
    "userID": ObjectId("65317828369449a262e225db"),
    "taskID": null
  },
  {
    "title": "Task 8",
    "description": "This is a third new task.",
    "start_date": ISODate("2023-10-26T09:00:00Z"),
    "deadline_date": ISODate("2023-10-27T18:00:00Z"),
    "priority": 1,
    "status": "Complete",
    "projectID": ObjectId("65317854571ca980bdefbbb4"),
    "userID": ObjectId("65317828369449a262e225dc"),
    "taskID": null
  },
  {
    "title": "Task 9",
    "description": "This is a new task to do.",
    "start_date": ISODate("2023-10-27T11:00:00Z"),
    "deadline_date": ISODate("2023-10-28T15:00:00Z"),
    "priority": 4,
    "status": "To-do",
    "projectID": ObjectId("65317854571ca980bdefbbb5"),
    "userID": ObjectId("65317828369449a262e225dd"),
    "taskID": null
  },
  {
    "title": "Task 10",
    "description": "This is an in-progress task.",
    "start_date": ISODate("2023-10-28T12:00:00Z"),
    "deadline_date": ISODate("2023-10-29T16:00:00Z"),
    "priority": 5,
    "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": null
  }
]);


db.task.insertMany([
  {
      "title": "Task 11",
      "description": "This is a brand new task.",
      "start_date": ISODate("2023-10-29T09:00:00Z"),
      "deadline_date": ISODate("2023-10-30T17:00:00Z"),
      "priority": 3,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb2"),
      "userID": ObjectId("65317828369449a262e225da"),
      "taskID": null
  },
  {
      "title": "Task 12",
      "description": "This is yet another new task.",
      "start_date": ISODate("2023-10-30T10:00:00Z"),
      "deadline_date": ISODate("2023-10-31T16:00:00Z"),
      "priority": 2,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb3"),
      "userID": ObjectId("65317828369449a262e225db"),
      "taskID": null
  },
  {
      "title": "Task 13",
      "description": "This is a third brand new task.",
      "start_date": ISODate("2023-10-31T08:00:00Z"),
      "deadline_date": ISODate("2023-11-01T14:00:00Z"),
      "priority": 1,
      "status": "Complete",
      "projectID": ObjectId("65317854571ca980bdefbbb4"),
      "userID": ObjectId("65317828369449a262e225dc"),
      "taskID": null
  },
  {
      "title": "Task 14",
      "description": "This is a new task with a deadline.",
      "start_date": ISODate("2023-11-01T09:00:00Z"),
      "deadline_date": ISODate("2023-11-02T18:00:00Z"),
      "priority": 4,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb5"),
      "userID": ObjectId("65317828369449a262e225dd"),
      "taskID": null
  },
  {
      "title": "Task 15",
      "description": "This is an in-progress task with a new start date.",
      "start_date": ISODate("2023-11-02T12:00:00Z"),
      "deadline_date": ISODate("2023-11-03T16:00:00Z"),
      "priority": 5,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": null
  }
]);


db.task.insertMany([
  {
      "title": "Task 16",
      "description": "This is another new task with status To-do.",
      "start_date": ISODate("2023-11-03T09:00:00Z"),
      "deadline_date": ISODate("2023-11-04T17:00:00Z"),
      "priority": 3,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb2"),
      "userID": ObjectId("65317828369449a262e225da"),
      "taskID": null
  },
  {
      "title": "Task 17",
      "description": "This is a new task in progress.",
      "start_date": ISODate("2023-11-04T10:00:00Z"),
      "deadline_date": ISODate("2023-11-05T16:00:00Z"),
      "priority": 2,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb3"),
      "userID": ObjectId("65317828369449a262e225db"),
      "taskID": null
  },
  {
      "title": "Task 18",
      "description": "This is a third new task marked as Complete.",
      "start_date": ISODate("2023-11-05T08:00:00Z"),
      "deadline_date": ISODate("2023-11-06T14:00:00Z"),
      "priority": 1,
      "status": "Complete",
      "projectID": ObjectId("65317854571ca980bdefbbb4"),
      "userID": ObjectId("65317828369449a262e225dc"),
      "taskID": null
  },
  {
      "title": "Task 19",
      "description": "This is a new to-do task with a different project.",
      "start_date": ISODate("2023-11-06T09:00:00Z"),
      "deadline_date": ISODate("2023-11-07T18:00:00Z"),
      "priority": 4,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb5"),
      "userID": ObjectId("65317828369449a262e225dd"),
      "taskID": null
  },
  {
      "title": "Task 20",
      "description": "This is an in-progress task with a different user.",
      "start_date": ISODate("2023-11-07T12:00:00Z"),
      "deadline_date": ISODate("2023-11-08T16:00:00Z"),
      "priority": 5,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": null
  }
]);


db.task.insertMany([
  {
      "title": "Task 21",
      "description": "This is a new task marked as To-do.",
      "start_date": ISODate("2023-11-08T09:00:00Z"),
      "deadline_date": ISODate("2023-11-09T17:00:00Z"),
      "priority": 3,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb2"),
      "userID": ObjectId("65317828369449a262e225da"),
      "taskID": null
  },
  {
      "title": "Task 22",
      "description": "This is another new task in progress.",
      "start_date": ISODate("2023-11-09T10:00:00Z"),
      "deadline_date": ISODate("2023-11-10T16:00:00Z"),
      "priority": 2,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb3"),
      "userID": ObjectId("65317828369449a262e225db"),
      "taskID": null
  },
  {
      "title": "Task 23",
      "description": "This is a third new task marked as Complete.",
      "start_date": ISODate("2023-11-10T08:00:00Z"),
      "deadline_date": ISODate("2023-11-11T14:00:00Z"),
      "priority": 1,
      "status": "Complete",
      "projectID": ObjectId("65317854571ca980bdefbbb4"),
      "userID": ObjectId("65317828369449a262e225dc"),
      "taskID": null
  },
  {
      "title": "Task 24",
      "description": "This is a new task to do with a different project.",
      "start_date": ISODate("2023-11-11T09:00:00Z"),
      "deadline_date": ISODate("2023-11-12T18:00:00Z"),
      "priority": 4,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb5"),
      "userID": ObjectId("65317828369449a262e225dd"),
      "taskID": null
  },
  {
      "title": "Task 205",
      "description": "This is an in-progress task with a different user.",
      "start_date": ISODate("2023-11-12T12:00:00Z"),
      "deadline_date": ISODate("2023-11-13T16:00:00Z"),
      "priority": 5,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": null
  }
]);


db.task.insertMany([
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
  },
  {
      "title": "Task 27",
      "description": "This is another new task in progress.",
      "start_date": ISODate("2023-11-14T10:00:00Z"),
      "deadline_date": ISODate("2023-11-15T16:00:00Z"),
      "priority": 2,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb3"),
      "userID": ObjectId("65317828369449a262e225db"),
      "taskID": ObjectId("65317fb3d647412681130248")
  },
  {
      "title": "Task 28",
      "description": "This is a third new task marked as Complete.",
      "start_date": ISODate("2023-11-15T08:00:00Z"),
      "deadline_date": ISODate("2023-11-16T14:00:00Z"),
      "priority": 1,
      "status": "Complete",
      "projectID": ObjectId("65317854571ca980bdefbbb4"),
      "userID": ObjectId("65317828369449a262e225dc"),
      "taskID": ObjectId("65317fb3d647412681130249")
  },
  {
      "title": "Task 29",
      "description": "This is a new task to do with a different project.",
      "start_date": ISODate("2023-11-16T09:00:00Z"),
      "deadline_date": ISODate("2023-11-17T18:00:00Z"),
      "priority": 4,
      "status": "To-do",
      "projectID": ObjectId("65317854571ca980bdefbbb5"),
      "userID": ObjectId("65317828369449a262e225dd"),
      "taskID": ObjectId("65317fb3d64741268113024a")
  },
  {
      "title": "Task 30",
      "description": "This is an in-progress task with a different user.",
      "start_date": ISODate("2023-11-17T12:00:00Z"),
      "deadline_date": ISODate("2023-11-18T16:00:00Z"),
      "priority": 5,
      "status": "In-Progress",
      "projectID": ObjectId("65317854571ca980bdefbbb6"),
      "userID": ObjectId("65317828369449a262e225de"),
      "taskID": ObjectId("65317fb3d64741268113024b")
  }
]);
