DROP PROCEDURE IF EXISTS sp_insert_attraction;

DELIMITER / / CREATE PROCEDURE sp_insert_attraction (
    IN p_place_id INT,
    IN p_attraction_name VARCHAR(255)
) BEGIN
INSERT INTO
    Attractions (place_id, attraction_name)
VALUES
    (p_place_id, p_attraction_name);

END / / DELIMITER;