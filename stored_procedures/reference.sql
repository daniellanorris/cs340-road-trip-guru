SELECT
    road_trip_id,
    road_trip_name
FROM
    RoadTripRoutes
ORDER BY
    road_trip_id;

SELECT
    *
FROM
    RoadTripRoutes
WHERE
    road_trip_id = 4;

SELECT
    road_trip_id
FROM
    RoadTripRoutes
WHERE
    road_trip_id = 1;

DESCRIBE RoadTripRoutes;

DESCRIBE RoadTripPlaces;