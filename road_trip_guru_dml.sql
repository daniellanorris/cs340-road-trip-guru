-- Road Trip Guru Data Manipulation Queries
-- Variables beginning with @ represent values supplied by the backend.


-- =====================================================
-- RoadTrippers
-- =====================================================

-- Display all road trippers
SELECT *
FROM RoadTrippers
ORDER BY road_tripper_id;


-- Create a road tripper
INSERT INTO RoadTrippers
(username, email, created_at)
VALUES
(@usernameInput, @emailInput, CURRENT_TIMESTAMP);


-- Update a road tripper
UPDATE RoadTrippers
SET
username = @usernameInput,
email = @emailInput
WHERE road_tripper_id = @roadTripperIdInput;


-- Delete a road tripper
DELETE FROM RoadTrippers
WHERE road_tripper_id = @roadTripperIdInput;



-- =====================================================
-- RoadTripRoutes
-- =====================================================

-- Display all road trip routes
SELECT *
FROM RoadTripRoutes
ORDER BY road_trip_id;


-- Create a road trip route
INSERT INTO RoadTripRoutes
(road_tripper_id, road_trip_name, distance, start_date, end_date)
VALUES
(@roadTripperIdInput,
 @roadTripNameInput,
 @distanceInput,
 @startDateInput,
 @endDateInput);


-- Update a road trip route
UPDATE RoadTripRoutes
SET
road_tripper_id = @roadTripperIdInput,
road_trip_name = @roadTripNameInput,
distance = @distanceInput,
start_date = @startDateInput,
end_date = @endDateInput
WHERE road_trip_id = @roadTripIdInput;


-- Delete a road trip route
DELETE FROM RoadTripRoutes
WHERE road_trip_id = @roadTripIdInput;



-- =====================================================
-- TripBudgets
-- =====================================================

-- Display all trip budgets
SELECT *
FROM TripBudgets
ORDER BY trip_budget_id;


-- Create a trip budget
INSERT INTO TripBudgets
(total_budget, daily_budget, road_trip_id)
VALUES
(@totalBudgetInput,
 @dailyBudgetInput,
 @roadTripIdInput);


-- Update a trip budget
UPDATE TripBudgets
SET
total_budget = @totalBudgetInput,
daily_budget = @dailyBudgetInput,
road_trip_id = @roadTripIdInput
WHERE trip_budget_id = @tripBudgetIdInput;


-- Delete a trip budget
DELETE FROM TripBudgets
WHERE trip_budget_id = @tripBudgetIdInput;



-- =====================================================
-- Places
-- =====================================================

-- Display all places
SELECT *
FROM Places
ORDER BY place_id;


-- Create a place
INSERT INTO Places
(place_name, place_state, place_city)
VALUES
(@placeNameInput,
 @placeStateInput,
 @placeCityInput);


-- Update a place
UPDATE Places
SET
place_name = @placeNameInput,
place_state = @placeStateInput,
place_city = @placeCityInput
WHERE place_id = @placeIdInput;


-- Delete a place
DELETE FROM Places
WHERE place_id = @placeIdInput;



-- =====================================================
-- RoadTripPlaces
-- =====================================================

-- Display all road trip place relationships
SELECT *
FROM RoadTripPlaces
ORDER BY road_trip_place_id;


-- Add a place to a road trip
INSERT INTO RoadTripPlaces
(road_trip_id, place_id, stop_order)
VALUES
(@roadTripIdInput,
 @placeIdInput,
 @stopOrderInput);


-- Update a road trip place relationship
UPDATE RoadTripPlaces
SET
road_trip_id = @roadTripIdInput,
place_id = @placeIdInput,
stop_order = @stopOrderInput
WHERE road_trip_place_id = @roadTripPlaceIdInput;


-- Remove a place from a road trip
DELETE FROM RoadTripPlaces
WHERE road_trip_place_id = @roadTripPlaceIdInput;



-- =====================================================
-- Attractions
-- =====================================================

-- Display all attractions
SELECT *
FROM Attractions
ORDER BY attraction_id;


-- Create an attraction
INSERT INTO Attractions
(place_id, attraction_name)
VALUES
(@placeIdInput,
 @attractionNameInput);


-- Update an attraction
UPDATE Attractions
SET
place_id = @placeIdInput,
attraction_name = @attractionNameInput
WHERE attraction_id = @attractionIdInput;


-- Delete an attraction
DELETE FROM Attractions
WHERE attraction_id = @attractionIdInput;