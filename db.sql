-- Table Definition ----------------------------------------------

CREATE TABLE subjects (
    id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name text,
    sex text,
    diagnosis text,
    date text,
    status text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX subjects_pkey ON subjects(id int4_ops);
