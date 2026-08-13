-- SP for deleting from road_trip_places table
DROP PROCEDURE IF EXISTS sp_delete_rt_places;

DELIMITER / / CREATE PROCEDURE sp_delete_rt_places (IN p_road_trip_place_id INT) BEGIN
DELETE FROM RoadTripPlaces
WHERE
    road_trip_place_id = p_road_trip_place_id;

END / / DELIMITER;