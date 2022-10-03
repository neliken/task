-- list databases \l
-- show databases \d
-- connect to a db \c db_name
-- quit \q
-- \d or \d table_name
-- \conninfo



CREATE TABLE transaction(
    Transaction_id SERIAL NOT NULL, 
    Transaction_date DATE,
    Debit_amount NUMERIC(6,2),
    Credit_amount NUMERIC(6,2),
    Sender VARCHAR(100),
    Receiver VARCHAR(100)
);

