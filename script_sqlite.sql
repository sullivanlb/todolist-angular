/*
Schéma relationnel :
--------------------
Task (idTask(1), titleTask NN, descriptionTask, contextTask, durationTask, dateTask NN, urlTask)
*/

-----------------------------
-- Destruction de la table --
-----------------------------

DROP TABLE Task;

-----------------------------
--- Création de la table ----
-----------------------------

CREATE TABLE Task (
        idTask INTEGER PRIMARY KEY autoincrement,    
        titleTask TEXT(100) CONSTRAINT nn_titleTask NOT NULL,
        descriptionTask TEXT(1000),
        contextTask TEXT(100),
        durationTask TEXT(5),
        dateTask TEXT(20) CONSTRAINT nn_dateTask NOT NULL,
        urlTask TEXT(1000)
);

/*
cat script_sqlite.sql | sqlite3 database.db
*/
             

