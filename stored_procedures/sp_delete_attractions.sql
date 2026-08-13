DROP PROCEDURE IF EXISTS sp_delete_attraction;

DELIMITER / / CREATE PROCEDURE sp_delete_attraction (IN p_attraction_id INT) BEGIN
DELETE FROM Attractions
WHERE
    attraction_id = p_attraction_id;

END / / DELIMITER;