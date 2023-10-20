// Estatísticas do Banco de Dados antes da otimização;

db.task.getIndexes();

[
    {
      "v": 2,
      "key": {
        "_id": 1
      },
      "name": "_id_"
    }
  ]

db.task.find({title: "Task 1"}).explain("executionStats");

{
    "explainVersion": "1",
    "queryPlanner": {
      "namespace": "to_do_list.task",
      "indexFilterSet": false,
      "parsedQuery": {
        "title": {
          "$eq": "Task 1"
        }
      },
      "queryHash": "244E9C29",
      "planCacheKey": "244E9C29",
      "maxIndexedOrSolutionsReached": false,
      "maxIndexedAndSolutionsReached": false,
      "maxScansToExplodeReached": false,
      "winningPlan": {
        "stage": "COLLSCAN",
        "filter": {
          "title": {
            "$eq": "Task 1"
          }
        },
        "direction": "forward"
      },
      "rejectedPlans": []
    },
    "executionStats": {
      "executionSuccess": true,
      "nReturned": 1,
      "executionTimeMillis": 0,
      "totalKeysExamined": 0,
      "totalDocsExamined": 30,
      "executionStages": {
        "stage": "COLLSCAN",
        "filter": {
          "title": {
            "$eq": "Task 1"
          }
        },
        "nReturned": 1,
        "executionTimeMillisEstimate": 1,
        "works": 31,
        "advanced": 1,
        "needTime": 29,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "direction": "forward",
        "docsExamined": 30
      }
    },
    "command": {
      "find": "task",
      "filter": {
        "title": "Task 1"
      },
      "$db": "to_do_list"
    },
    "serverInfo": {
      "host": "DESKTOP-2IPFI5N",
      "port": 27017,
      "version": "6.0.8",
      "gitVersion": "3d84c0dd4e5d99be0d69003652313e7eaf4cdd74"
    },
    "serverParameters": {
      "internalQueryFacetBufferSizeBytes": 104857600,
      "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
      "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600,
      "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
      "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600,
      "internalQueryProhibitBlockingMergeOnMongoS": 0,
      "internalQueryMaxAddToSetBytes": 104857600,
      "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600
    },
    "ok": 1
}


//Estatísticas do Banco de Dados depois da otimização.

db.task.createIndex({"title": 1});

title_1

db.task.getIndexes();

[
    {
        "v": 2,
        "key": {
            "_id": 1
        },
        "name": "_id_"
    },
    {
        "v": 2,
        "key": {
            "title": 1
        },
        "name": "title_1"
    }
]

db.task.find({title: "Task 1"}).explain("executionStats");

{
    "explainVersion": "1",
    "queryPlanner": {
      "namespace": "to_do_list.task",
      "indexFilterSet": false,
      "parsedQuery": {
        "title": {
          "$eq": "Task 1"
        }
      },
      "queryHash": "244E9C29",
      "planCacheKey": "D716F3F7",
      "maxIndexedOrSolutionsReached": false,
      "maxIndexedAndSolutionsReached": false,
      "maxScansToExplodeReached": false,
      "winningPlan": {
        "stage": "FETCH",
        "inputStage": {
          "stage": "IXSCAN",
          "keyPattern": {
            "title": 1
          },
          "indexName": "title_1",
          "isMultiKey": false,
          "multiKeyPaths": {
            "title": []
          },
          "isUnique": false,
          "isSparse": false,
          "isPartial": false,
          "indexVersion": 2,
          "direction": "forward",
          "indexBounds": {
            "title": [
              "[\"Task 1\", \"Task 1\"]"
            ]
          }
        }
      },
      "rejectedPlans": []
    },
    "executionStats": {
      "executionSuccess": true,
      "nReturned": 1,
      "executionTimeMillis": 17,
      "totalKeysExamined": 1,
      "totalDocsExamined": 1,
      "executionStages": {
        "stage": "FETCH",
        "nReturned": 1,
        "executionTimeMillisEstimate": 17,
        "works": 2,
        "advanced": 1,
        "needTime": 0,
        "needYield": 0,
        "saveState": 1,
        "restoreState": 1,
        "isEOF": 1,
        "docsExamined": 1,
        "alreadyHasObj": 0,
        "inputStage": {
          "stage": "IXSCAN",
          "nReturned": 1,
          "executionTimeMillisEstimate": 17,
          "works": 2,
          "advanced": 1,
          "needTime": 0,
          "needYield": 0,
          "saveState": 1,
          "restoreState": 1,
          "isEOF": 1,
          "keyPattern": {
            "title": 1
          },
          "indexName": "title_1",
          "isMultiKey": false,
          "multiKeyPaths": {
            "title": []
          },
          "isUnique": false,
          "isSparse": false,
          "isPartial": false,
          "indexVersion": 2,
          "direction": "forward",
          "indexBounds": {
            "title": [
              "[\"Task 1\", \"Task 1\"]"
            ]
          },
          "keysExamined": 1,
          "seeks": 1,
          "dupsTested": 0,
          "dupsDropped": 0
        }
      }
    },
    "command": {
      "find": "task",
      "filter": {
        "title": "Task 1"
      },
      "$db": "to_do_list"
    },
    "serverInfo": {
      "host": "DESKTOP-2IPFI5N",
      "port": 27017,
      "version": "6.0.8",
      "gitVersion": "3d84c0dd4e5d99be0d69003652313e7eaf4cdd74"
    },
    "serverParameters": {
      "internalQueryFacetBufferSizeBytes": 104857600,
      "internalQueryFacetMaxOutputDocSizeBytes": 104857600,
      "internalLookupStageIntermediateDocumentMaxSizeBytes": 104857600,
      "internalDocumentSourceGroupMaxMemoryBytes": 104857600,
      "internalQueryMaxBlockingSortMemoryUsageBytes": 104857600,
      "internalQueryProhibitBlockingMergeOnMongoS": 0,
      "internalQueryMaxAddToSetBytes": 104857600,
      "internalDocumentSourceSetWindowFieldsMaxMemoryBytes": 104857600
    },
    "ok": 1
}

// Não houve diferença de desempenho antes e depois da indexação devido ao tamanho pequeno da base de dados.
