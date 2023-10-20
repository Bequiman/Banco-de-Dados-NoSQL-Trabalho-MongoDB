// Estatísticas do Banco de Dados antes da otimização;

db.user.getIndexes();

[
    {
        "v": 2,
        "key": {
            "_id": 1
        },
        "name": "_id_"
    }
]


db.user.find({first_name: "Luís"}).explain("executionStats");

{
    "explainVersion": "1",
    "queryPlanner": {
      "namespace": "to_do_list.user",
      "indexFilterSet": false,
      "parsedQuery": {
        "first_name": {
          "$eq": "Luís"
        }
      },
      "queryHash": "4DCBB49E",
      "planCacheKey": "4DCBB49E",
      "maxIndexedOrSolutionsReached": false,
      "maxIndexedAndSolutionsReached": false,
      "maxScansToExplodeReached": false,
      "winningPlan": {
        "stage": "COLLSCAN",
        "filter": {
          "first_name": {
            "$eq": "Luís"
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
      "totalDocsExamined": 5,
      "executionStages": {
        "stage": "COLLSCAN",
        "filter": {
          "first_name": {
            "$eq": "Luís"
          }
        },
        "nReturned": 1,
        "executionTimeMillisEstimate": 0,
        "works": 6,
        "advanced": 1,
        "needTime": 4,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "direction": "forward",
        "docsExamined": 5
      }
    },
    "command": {
      "find": "user",
      "filter": {
        "first_name": "Luís"
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

db.user.createIndex({"first_name": 1});

first_name_1

db.user.getIndexes();

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
        "first_name": 1
        },
        "name": "first_name_1"
    }
]


db.user.find({first_name: "Luís"}).explain("executionStats");


{
    "explainVersion": "1",
    "queryPlanner": {
      "namespace": "to_do_list.user",
      "indexFilterSet": false,
      "parsedQuery": {
        "first_name": {
          "$eq": "Luís"
        }
      },
      "queryHash": "4DCBB49E",
      "planCacheKey": "0B414B2E",
      "maxIndexedOrSolutionsReached": false,
      "maxIndexedAndSolutionsReached": false,
      "maxScansToExplodeReached": false,
      "winningPlan": {
        "stage": "FETCH",
        "inputStage": {
          "stage": "IXSCAN",
          "keyPattern": {
            "first_name": 1
          },
          "indexName": "first_name_1",
          "isMultiKey": false,
          "multiKeyPaths": {
            "first_name": []
          },
          "isUnique": false,
          "isSparse": false,
          "isPartial": false,
          "indexVersion": 2,
          "direction": "forward",
          "indexBounds": {
            "first_name": [
              "[\"Luís\", \"Luís\"]"
            ]
          }
        }
      },
      "rejectedPlans": []
    },
    "executionStats": {
      "executionSuccess": true,
      "nReturned": 1,
      "executionTimeMillis": 0,
      "totalKeysExamined": 1,
      "totalDocsExamined": 1,
      "executionStages": {
        "stage": "FETCH",
        "nReturned": 1,
        "executionTimeMillisEstimate": 0,
        "works": 2,
        "advanced": 1,
        "needTime": 0,
        "needYield": 0,
        "saveState": 0,
        "restoreState": 0,
        "isEOF": 1,
        "docsExamined": 1,
        "alreadyHasObj": 0,
        "inputStage": {
          "stage": "IXSCAN",
          "nReturned": 1,
          "executionTimeMillisEstimate": 0,
          "works": 2,
          "advanced": 1,
          "needTime": 0,
          "needYield": 0,
          "saveState": 0,
          "restoreState": 0,
          "isEOF": 1,
          "keyPattern": {
            "first_name": 1
          },
          "indexName": "first_name_1",
          "isMultiKey": false,
          "multiKeyPaths": {
            "first_name": []
          },
          "isUnique": false,
          "isSparse": false,
          "isPartial": false,
          "indexVersion": 2,
          "direction": "forward",
          "indexBounds": {
            "first_name": [
              "[\"Luís\", \"Luís\"]"
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
      "find": "user",
      "filter": {
        "first_name": "Luís"
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
