-- sp for adding road trip places, takes place_id, road_trip_id, and stop_order as params
DROP PROCEDURE IF EXISTS sp_create_rt_places;

DELIMITER / / CREATE PROCEDURE sp_create_rt_places (
    IN p_place_id INT,
    IN p_road_trip_id INT,
    IN p_stop_order INT
) BEGIN
INSERT INTO
    RoadTripPlaces (place_id, road_trip_id, stop_order)
VALUES
    (p_place_id, p_road_trip_id, p_stop_order);

END / / DELIMITER;