
// 1) Quantidade de task que estejam com status "In-Progress";

db.task.find({"status": /in-progress/i}).size();

11

// 2)Todas as tarefas de um usuário.

db.task.aggregate([
    {
        $match: {
            "userID": ObjectId("65317828369449a262e225db")
        }
    },
    {
        $lookup: {
            from: "task",
            localField: "taskID",
            foreignField: "_id",
            as: "relatedTasks"
        }
    },
    {
        $project: {
            _id: 1,
            title: 1,
            description: 1,
            start_date: 1,
            deadline_date: 1,
            priority: 1,
            status: 1,
            projectID: 1,
            userID: 1,
            relatedTasks: {
                $cond: {
                    if: { $eq: ["$taskID", null] },
                    then: null,
                    else: "$relatedTasks"
                }
            }
        }
    }
]);

[
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
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "65317fb3d647412681130248"
        },
        "title": "Task 2",
        "description": "This is the second task.",
        "start_date": {
            "$date": "2023-10-20T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-21T16:00:00Z"
        },
        "priority": 2,
        "status": "Complete",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "65318001958fd22722926786"
        },
        "title": "Task 7",
        "description": "This is another new task.",
        "start_date": {
            "$date": "2023-10-25T08:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-26T14:00:00Z"
        },
        "priority": 3,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "6531803f762c4f60b655006c"
        },
        "title": "Task 12",
        "description": "This is yet another new task.",
        "start_date": {
            "$date": "2023-10-30T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-31T16:00:00Z"
        },
        "priority": 2,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "653180d7134598de412af846"
        },
        "title": "Task 17",
        "description": "This is a new task in progress.",
        "start_date": {
            "$date": "2023-11-04T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-05T16:00:00Z"
        },
        "priority": 2,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "6531810e8e27a8066204219b"
        },
        "title": "Task 22",
        "description": "This is another new task in progress.",
        "start_date": {
            "$date": "2023-11-09T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-10T16:00:00Z"
        },
        "priority": 2,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": null
    },
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e4"
        },
        "title": "Task 27",
        "description": "This is another new task in progress.",
        "start_date": {
            "$date": "2023-11-14T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-15T16:00:00Z"
        },
        "priority": 2,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "relatedTasks": [
            {
                "_id": {
                    "$oid": "65317fb3d647412681130248"
                },
                "title": "Task 2",
                "description": "This is the second task.",
                "start_date": {
                    "$date": "2023-10-20T10:00:00Z"
                },
                "deadline_date": {
                    "$date": "2023-10-21T16:00:00Z"
                },
                "priority": 2,
                "status": "Complete",
                "projectID": {
                    "$oid": "65317854571ca980bdefbbb3"
                },
                "userID": {
                    "$oid": "65317828369449a262e225db"
                },
                "taskID": null
            }
        ]
    }
]


// 3) Realizando pesquisa pelo _id da task,  que retornando os dados da task, name do project e name do user (concatenação first_name e last_name do user)

db.task.aggregate([
    {
        $match: {
            "_id": ObjectId("65317fb3d647412681130247")
        }
    },
    {
        $lookup: {
            from: "project",
            localField: "projectID",
            foreignField: "_id",
            as: "project"
        }
    },
    {
        $lookup: {
            from: "user",
            localField: "userID",
            foreignField: "_id",
            as: "user"
        }
    },
    {
        $unwind: "$project"
    },
    {
        $unwind: "$user"
    },
    {
        $project: {
            "_id": 1,
            "user_name": { $concat: ["$user.first_name", " ", "$user.last_name"] },
            "project_name": "$project.name",
            "project_start_date": "$project.start_date",
            "project_end_date": "$project.end_date",
            "task_title": "$title",
            "task_description": "$description",
            "task_start_date": "$start_date",
            "task_deadline_date": "$deadline_date",
            "task_priority": "$priority",
            "task_status": "$status"
        }
    }
]);

[
    {
        "_id": {
            "$oid": "65317fb3d647412681130247"
        },
        "user_name": "Maria Pereira",
        "project_name": "Projeto 1",
        "project_start_date": {
            "$date": "2023-10-01T00:00:00Z"
        },
        "project_end_date": {
            "$date": "2023-10-31T23:59:59Z"
        },
        "task_title": "Task 1",
        "task_description": "Nova descrição da tarefa.",
        "task_start_date": {
            "$date": "2023-10-19T09:00:00Z"
        },
        "task_deadline_date": {
            "$date": "2023-10-21T17:00:00Z"
        },
        "task_priority": 3,
        "task_status": "To-do"
    }
]


// 4)Todas as tarefas com o prazo de entrega vencido.

db.task.find({
    "deadline_date": { $lt: new Date() },
    "status": { $in: ["To-do", "In-Progress"] }
});

[
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
    },
    {
        "_id": {
            "$oid": "65317fb3d64741268113024a"
        },
        "title": "Task 4",
        "description": "This is the fourth task.",
        "start_date": {
            "$date": "2023-10-22T09:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-23T18:00:00Z"
        },
        "priority": 4,
        "status": "To-do",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb5"
        },
        "userID": {
            "$oid": "65317828369449a262e225dd"
        },
        "taskID": null
    },
    {
        "_id": {
            "$oid": "65317fb3d64741268113024b"
        },
        "title": "Task 5",
        "description": "This is the fifth task.",
        "start_date": {
            "$date": "2023-10-23T11:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-24T15:00:00Z"
        },
        "priority": 5,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb6"
        },
        "userID": {
            "$oid": "65317828369449a262e225de"
        },
        "taskID": null
    },
    {
        "_id": {
            "$oid": "65318001958fd22722926785"
        },
        "title": "Task 6",
        "description": "This is a new task.",
        "start_date": {
            "$date": "2023-10-24T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-25T17:00:00Z"
        },
        "priority": 2,
        "status": "To-do",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb2"
        },
        "userID": {
            "$oid": "65317828369449a262e225da"
        },
        "taskID": null
    },
    {
        "_id": {
            "$oid": "65318001958fd22722926786"
        },
        "title": "Task 7",
        "description": "This is another new task.",
        "start_date": {
            "$date": "2023-10-25T08:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-10-26T14:00:00Z"
        },
        "priority": 3,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "taskID": null
    }
]


// 5) Quantidade de task que não tem relacionamento com outras task.

db.task.find({ "taskID": null }).count();

0


// 6) Quantidade de task com priority 5.

db.task.find({"priority": 5}).count();

6


// 7) Quais são task que possuem realaciomanto com outras task.

// db.task.aggregate([
//     {
//         $match: {
//             taskID: { $ne: null }
//         }
//     }
// ]);

db.task.aggregate([
    {
        $match: {
            taskID: { $ne: null }
        }
    },
    {
        $lookup: {
            from: "task",
            localField: "taskID",
            foreignField: "_id",
            as: "relatedTasks"
        }
    }
]);

[
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e3"
        },
        "title": "Task 26",
        "description": "This is a new task marked as To-do.",
        "start_date": {
            "$date": "2023-11-13T09:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-14T17:00:00Z"
        },
        "priority": 3,
        "status": "To-do",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb2"
        },
        "userID": {
            "$oid": "65317828369449a262e225da"
        },
        "taskID": {
            "$oid": "65317fb3d647412681130247"
        },
        "relatedTasks": [
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
        ]
    },
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e4"
        },
        "title": "Task 27",
        "description": "This is another new task in progress.",
        "start_date": {
            "$date": "2023-11-14T10:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-15T16:00:00Z"
        },
        "priority": 2,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "userID": {
            "$oid": "65317828369449a262e225db"
        },
        "taskID": {
            "$oid": "65317fb3d647412681130248"
        },
        "relatedTasks": [
            {
                "_id": {
                    "$oid": "65317fb3d647412681130248"
                },
                "title": "Task 2",
                "description": "This is the second task.",
                "start_date": {
                    "$date": "2023-10-20T10:00:00Z"
                },
                "deadline_date": {
                    "$date": "2023-10-21T16:00:00Z"
                },
                "priority": 2,
                "status": "Complete",
                "projectID": {
                    "$oid": "65317854571ca980bdefbbb3"
                },
                "userID": {
                    "$oid": "65317828369449a262e225db"
                },
                "taskID": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e5"
        },
        "title": "Task 28",
        "description": "This is a third new task marked as Complete.",
        "start_date": {
            "$date": "2023-11-15T08:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-16T14:00:00Z"
        },
        "priority": 1,
        "status": "Complete",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb4"
        },
        "userID": {
            "$oid": "65317828369449a262e225dc"
        },
        "taskID": {
            "$oid": "65317fb3d647412681130249"
        },
        "relatedTasks": [
            {
                "_id": {
                    "$oid": "65317fb3d647412681130249"
                },
                "title": "Task 3",
                "description": "This is the third task.",
                "start_date": {
                    "$date": "2023-10-21T08:00:00Z"
                },
                "deadline_date": {
                    "$date": "2023-10-22T14:00:00Z"
                },
                "priority": 1,
                "status": "Complete",
                "projectID": {
                    "$oid": "65317854571ca980bdefbbb4"
                },
                "userID": {
                    "$oid": "65317828369449a262e225dc"
                },
                "taskID": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e6"
        },
        "title": "Task 29",
        "description": "This is a new task to do with a different project.",
        "start_date": {
            "$date": "2023-11-16T09:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-17T18:00:00Z"
        },
        "priority": 4,
        "status": "To-do",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb5"
        },
        "userID": {
            "$oid": "65317828369449a262e225dd"
        },
        "taskID": {
            "$oid": "65317fb3d64741268113024a"
        },
        "relatedTasks": [
            {
                "_id": {
                    "$oid": "65317fb3d64741268113024a"
                },
                "title": "Task 4",
                "description": "This is the fourth task.",
                "start_date": {
                    "$date": "2023-10-22T09:00:00Z"
                },
                "deadline_date": {
                    "$date": "2023-10-23T18:00:00Z"
                },
                "priority": 4,
                "status": "To-do",
                "projectID": {
                    "$oid": "65317854571ca980bdefbbb5"
                },
                "userID": {
                    "$oid": "65317828369449a262e225dd"
                },
                "taskID": null
            }
        ]
    },
    {
        "_id": {
            "$oid": "6531839e799bab7254de84e7"
        },
        "title": "Task 30",
        "description": "This is an in-progress task with a different user.",
        "start_date": {
            "$date": "2023-11-17T12:00:00Z"
        },
        "deadline_date": {
            "$date": "2023-11-18T16:00:00Z"
        },
        "priority": 5,
        "status": "In-Progress",
        "projectID": {
            "$oid": "65317854571ca980bdefbbb6"
        },
        "userID": {
            "$oid": "65317828369449a262e225de"
        },
        "taskID": {
            "$oid": "65317fb3d64741268113024b"
        },
        "relatedTasks": [
            {
                "_id": {
                    "$oid": "65317fb3d64741268113024b"
                },
                "title": "Task 5",
                "description": "This is the fifth task.",
                "start_date": {
                    "$date": "2023-10-23T11:00:00Z"
                },
                "deadline_date": {
                    "$date": "2023-10-24T15:00:00Z"
                },
                "priority": 5,
                "status": "In-Progress",
                "projectID": {
                    "$oid": "65317854571ca980bdefbbb6"
                },
                "userID": {
                    "$oid": "65317828369449a262e225de"
                },
                "taskID": null
            }
        ]
    }
]


// 8) Quais são projetos que tem data de inicio superior 60 dias.

db.project.find({
    "start_date": {
        $gte: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)
    }
});

[
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb5"
        },
        "name": "Projeto 4",
        "start_date": {
            "$date": "2024-01-01T00:00:00Z"
        },
        "end_date": {
            "$date": "2024-01-31T23:59:59Z"
        }
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb6"
        },
        "name": "Projeto 5",
        "start_date": {
            "$date": "2024-02-01T00:00:00Z"
        },
        "end_date": {
            "$date": "2024-02-28T23:59:59Z"
        }
    }
]


// 9) Quantos dias tem entre start_date e end_date dos project

// db.project.aggregate([
//     {
//         $project: {
//             name: 1,
//             daysDifference: {
//                 $divide: [
//                     { $subtract: ["$end_date", "$start_date"] },
//                     24 * 60 * 60 * 1000 // Converter milissegundos para dias
//                 ]
//             }
//         }
//     }
// ]);

db.project.aggregate([
    {
        $project: {
            name: 1,
            daysDifference: {
                $ceil: {
                    $divide: [
                        { $subtract: ["$end_date", "$start_date"] },
                        24 * 60 * 60 * 1000 // Converter milissegundos para dias
                    ]
                }
            }
        }
    }
]);


[
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb2"
        },
        "name": "Projeto 1",
        "daysDifference": 31
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "name": "Projeto 2",
        "daysDifference": 26
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb4"
        },
        "name": "Projeto 3",
        "daysDifference": 31
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb5"
        },
        "name": "Projeto 4",
        "daysDifference": 31
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb6"
        },
        "name": "Projeto 5",
        "daysDifference": 28
    }
]


// 10) Quantidade de task que vão ser encerradas por mês.

db.task.aggregate([
    {
        $project: {
            yearMonth: {
                $dateToString: {
                    format: "%Y-%m",
                    date: "$deadline_date"
                }
            }
        }
    },
    {
        $group: {
            _id: "$yearMonth",
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
]);

[
    {
        "_id": "2023-10",
        "count": 12
    },
    {
        "_id": "2023-11",
        "count": 18
    }
]



// 11) Quantidade de task que são iniciadas por mês.

db.task.aggregate([
    {
        $project: {
            yearMonth: {
                $dateToString: {
                    format: "%Y-%m",
                    date: "$start_date"
                }
            }
        }
    },
    {
        $group: {
            _id: "$yearMonth",
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
])

[
    {
        "_id": "2023-10",
        "count": 13
    },
    {
        "_id": "2023-11",
        "count": 17
    }
]


// 12) Quantidade de project que vão ser encerradas por mês.

db.project.aggregate([
    {
        $project: {
            yearMonth: {
                $dateToString: {
                    format: "%Y-%m",
                    date: "$end_date"
                }
            }
        }
    },
    {
        $group: {
            _id: "$yearMonth",
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
]);


[
    {
        "_id": "2023-10",
        "count": 1
    },
    {
        "_id": "2023-11",
        "count": 1
    },
    {
        "_id": "2023-12",
        "count": 1
    },
    {
        "_id": "2024-01",
        "count": 1
    },
    {
        "_id": "2024-02",
        "count": 1
    }
]


// db.project.aggregate([
//     {
//         $match: {
//             end_date: {
//                 $gte: new Date() // Filtra projetos com data de término no mês atual ou no futuro
//             }
//         }
//     },
//     {
//         $project: {
//             yearMonth: {
//                 $dateToString: {
//                     format: "%Y-%m",
//                     date: "$end_date"
//                 }
//             }
//         }
//     },
//     {
//         $group: {
//             _id: "$yearMonth",
//             count: { $sum: 1 }
//         }
//     },
//     {
//         $sort: {
//             _id: 1
//         }
//     }
// ])


// 14) Quantidade de project que são iniciadas por mês.

db.project.aggregate([
    {
        $project: {
            yearMonth: {
                $dateToString: {
                    format: "%Y-%m",
                    date: "$start_date"
                }
            }
        }
    },
    {
        $group: {
            _id: "$yearMonth",
            count: { $sum: 1 }
        }
    },
    {
        $sort: {
            _id: 1
        }
    }
]);

[
    {
        "_id": "2023-10",
        "count": 1
    },
    {
        "_id": "2023-11",
        "count": 1
    },
    {
        "_id": "2023-12",
        "count": 1
    },
    {
        "_id": "2024-01",
        "count": 1
    },
    {
        "_id": "2024-02",
        "count": 1
    }
]


// 14) Quantidade de task por project

db.task.aggregate([
    {
        $group: {
            _id: "$projectID",
            taskCount: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "project",
            localField: "_id",
            foreignField: "_id",
            as: "project"
        }
    },
    {
        $unwind: "$project"
    },
    {
        $project: {
            "Project Name": "$project.name",
            "Task Count": "$taskCount"
        }
    }
]);

[
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb6"
        },
        "Project Name": "Projeto 5",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb4"
        },
        "Project Name": "Projeto 3",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb3"
        },
        "Project Name": "Projeto 2",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb2"
        },
        "Project Name": "Projeto 1",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317854571ca980bdefbbb5"
        },
        "Project Name": "Projeto 4",
        "Task Count": 6
    }
]


// 15) Quantidade de user por task

db.task.aggregate([
    {
        $group: {
            _id: "$userID",
            userCount: { $sum: 1 }
        }
    },
    {
        $lookup: {
            from: "user",
            localField: "_id",
            foreignField: "_id",
            as: "user"
        }
    },
    {
        $unwind: "$user"
    },
    {
        $project: {
            "User Name": { $concat: ["$user.first_name", " ", "$user.last_name"] },
            "Task Count": "$userCount"
        }
    }
]);


[
    {
        "_id": {
            "$oid": "65317828369449a262e225db"
        },
        "User Name": "Maria Pereira",
        "Task Count": 7
    },
    {
        "_id": {
            "$oid": "65317828369449a262e225da"
        },
        "User Name": "João Silva",
        "Task Count": 5
    },
    {
        "_id": {
            "$oid": "65317828369449a262e225de"
        },
        "User Name": "Luís Ferreira",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317828369449a262e225dd"
        },
        "User Name": "Ana Rocha",
        "Task Count": 6
    },
    {
        "_id": {
            "$oid": "65317828369449a262e225dc"
        },
        "User Name": "Pedro Santos",
        "Task Count": 6
    }
]