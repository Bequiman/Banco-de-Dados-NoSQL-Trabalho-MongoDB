// 1) Modificar o email do um user

db.user.updateOne(
    { _id: ObjectId("65317828369449a262e225da")},
    {$set: { email: "joao.silva@iftm.com" }}
);

{
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
}


// 2) Modificar description de uma task


db.task.updateOne(
    { _id: ObjectId("65317fb3d647412681130247") },
    { $set: { description: "Nova descrição da tarefa." } }
);

{
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
}

// 3) Modificar deadline_date da task;


db.task.updateOne(
    { _id: ObjectId("65317fb3d647412681130247") },
    { $set: { deadline_date: new ISODate("2023-10-21T17:00:00Z") } }
);

{
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
}
  

// 4) Modificar o status de “In Progress” para “Complete”;

db.task.updateOne(
    { _id: ObjectId("65317fb3d647412681130248"), status: "In-Progress" },
    { $set: { status: "Complete" } }
);


{
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
}


// 5) Modificar user responsável pela task;


db.task.updateOne(
    { _id: ObjectId("65317fb3d647412681130247") },
    { $set: { userID: ObjectId("65317828369449a262e225db") } }
);

{
    "acknowledged": true,
    "insertedId": null,
    "matchedCount": 1,
    "modifiedCount": 1,
    "upsertedCount": 0
}
 
