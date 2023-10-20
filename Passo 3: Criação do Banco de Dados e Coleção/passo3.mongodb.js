use("to_do_list");

db.createCollection("project", {
    validator: {
        $jsonSchema: {
            required: ["name", "start_date", "end_date"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "must be an ObjectId and is required",
                },
                name: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 24,
                },
                start_date: {
                    bsonType: "date",
                    description: "must be a date and is required",
                },
                end_date: {
                    bsonType: "date",
                    description: "must be a date and is required",
                },
            },
        },
    },
});


db.createCollection("user", {
    validator: {
        $jsonSchema: {
            required: ["first_name", "last_name", "email", "cell_phone"],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "must be an ObjectId and is required",
                },
                first_name: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 24,
                },
                last_name: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 24,
                },
                email: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 48,
                },
                cell_phone: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 24,
                }
            },
        },
    }
});


db.createCollection("task", {
    validator: {
        $jsonSchema: {
            required: [
                "title",
                "description",
                "start_date",
                "deadline_date",
                "priority",
                "status",
                "projectID",
                "userID",
                "taskID"                
            ],
            additionalProperties: false,
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "must be an ObjectId and is required",
                },
                title: {
                    bsonType: "string",
                    description: "must be a string and is required",                   
                },
                description: {
                    bsonType: "string",
                    description: "must be a string and is required",       
                },
                start_date: {
                    bsonType: "date",
                    description: "must be a date and is required",
                },
                deadline_date: {
                    bsonType: "date",
                    description: "must be a date and is required",
                },
                priority: {
                    bsonType: "int",
                    description: "must be an integer and is required",
                    minimum: 1,
                    maximum: 5
                },
                status: {
                    bsonType: "string",
                    description: "must be a string and is required",
                    maxLength: 24,
                },
                projectID: {
                    bsonType: "objectId",
                    description: "Reference to the Project collection",
                },
                userID: {
                    bsonType: "objectId",
                    description: "Reference to the User collection",
                },
                taskID: {
                    bsonType: ["objectId", "null"],
                    description: "Reference to the Taks collection",
                }                
            },
        },
    },
});
