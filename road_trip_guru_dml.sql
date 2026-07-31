-- Road Trip Guru Data Manipulation Queries
-- Variables beginning with @ represent values supplied by the backend.


-- Display all road trippers
SELECT road_tripper_id, username, email, created_at
FROM RoadTrippers
ORDER BY road_tripper_id;


-- Display all road trip routes with the related road tripper
SELECT RoadTripRoutes.road_trip_id,
       RoadTripRoutes.road_tripper_id,
       RoadTrippers.username,
       RoadTripRoutes.road_trip_name,
       RoadTripRoutes.distance,
       RoadTripRoutes.start_date,
       RoadTripRoutes.end_date
FROM RoadTripRoutes
JOIN RoadTrippers
  ON RoadTripRoutes.road_tripper_id = RoadTrippers.road_tripper_id
ORDER BY RoadTripRoutes.road_trip_id;


-- Display all trip budgets with the related road trip route
SELECT TripBudgets.trip_budget_id,
       TripBudgets.road_trip_id,
       RoadTripRoutes.road_trip_name,
       TripBudgets.total_budget,
       TripBudgets.daily_budget
FROM TripBudgets
JOIN RoadTripRoutes
  ON TripBudgets.road_trip_id = RoadTripRoutes.road_trip_id
ORDER BY TripBudgets.trip_budget_id;


-- Display all places
SELECT place_id, place_name, place_state, place_city
FROM Places
ORDER BY place_id;


-- Display all road trip and place relationships
SELECT RoadTripPlaces.road_trip_place_id,
       RoadTripPlaces.road_trip_id,
       RoadTripRoutes.road_trip_name,
       RoadTripPlaces.place_id,
       Places.place_name,
       RoadTripPlaces.stop_order
FROM RoadTripPlaces
JOIN RoadTripRoutes
  ON RoadTripPlaces.road_trip_id = RoadTripRoutes.road_trip_id
JOIN Places
  ON RoadTripPlaces.place_id = Places.place_id
ORDER BY RoadTripPlaces.road_trip_id, RoadTripPlaces.stop_order;


-- Display all attractions with the related place
SELECT Attractions.attraction_id,
       Attractions.place_id,
       Places.place_name,
       Attractions.attraction_name
FROM Attractions
JOIN Places
  ON Attractions.place_id = Places.place_id
ORDER BY Attractions.attraction_id;


-- Add a place to a road trip route
INSERT INTO RoadTripPlaces (road_trip_id, place_id, stop_order)
VALUES (@roadTripIdInput, @placeIdInput, @stopOrderInput);


-- Update a road trip and place relationship
UPDATE RoadTripPlaces
SET road_trip_id = @roadTripIdInput,
    place_id = @placeIdInput,
    stop_order = @stopOrderInput
WHERE road_trip_place_id = @roadTripPlaceIdInput;


-- Remove a place from a road trip route
DELETE FROM RoadTripPlaces
WHERE road_trip_place_id = @roadTripPlaceIdInput;


-- Road trippers for a foreign key dropdown
SELECT road_tripper_id, username
FROM RoadTrippers
ORDER BY username;


-- Road trip routes for foreign key dropdowns
SELECT road_trip_id, road_trip_name
FROM RoadTripRoutes
ORDER BY road_trip_name;


-- Places for foreign key dropdowns
SELECT place_id, place_name
FROM Places
ORDER BY place_name;