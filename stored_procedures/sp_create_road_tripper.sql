DROP PROCEDURE IF EXISTS sp_insert_roadtripper;

DELIMITER / / CREATE PROCEDURE sp_insert_roadtripper (
    IN p_username VARCHAR(50),
    IN p_email VARCHAR(100)
) BEGIN
INSERT INTO
    RoadTrippers (username, email)
VALUES
    (p_username, p_email);

END / / DELIMITER;