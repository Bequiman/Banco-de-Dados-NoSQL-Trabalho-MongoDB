// 1) Quantidade de task que estejam com status "In-Progress";

db.task.find({"status": /in-progress/i}).size();



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
            "project_start_date":"$project.start_date",
            "project_end_date":"$project.end_date",
            "task_title": "$title",
            "task_description": "$description",
            "task_start_date":"$start_date",
            "task_deadline_date":"$deadline_date",
            "task_priority":"$priority",
            "task_status":"$status"
        }
    }
]);


// 4)Todas as tarefas com o prazo de entrega vencido.

db.task.find({
    "deadline_date": { $lt: new Date() },
    "status": { $in: ["To-do", "In-Progress"] }
});


// 5) Quantidade de task que não tem relacionamento com outras task.

db.task.find({ "taskID": null }).count();


// 6) Quantidade de task com priority 5.

db.task.find({"priority": 5}).count();


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



// 8) Quais são projetos que tem data de inicio superior 60 dias.

db.project.find({
    "start_date": {
        $gte: new Date(new Date().getTime() + 60 * 24 * 60 * 60 * 1000)
    }
});


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
])


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
]);


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



// 13) Quantidade de project que são iniciadas por mês.

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