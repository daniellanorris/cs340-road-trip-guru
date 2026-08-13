DROP PROCEDURE IF EXISTS sp_edit_rt_places;

DELIMITER / / CREATE PROCEDURE sp_edit_rt_places (
    IN p_road_trip_place_id INT,
    IN p_road_trip_id INT,
    IN p_place_id INT,
    IN p_stop_order INT
) BEGIN
UPDATE RoadTripPlaces
SET
    road_trip_id = p_road_trip_id,
    place_id = p_place_id,
    stop_order = p_stop_order
WHERE
    road_trip_place_id = p_road_trip_place_id;

END / / DELIMITER;