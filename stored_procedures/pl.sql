-- Road Trip Guru RESET stored procedure
-- Recreates database tables and reloads sample data
DROP PROCEDURE IF EXISTS sp_reset_road_trip_guru;

DELIMITER / / CREATE PROCEDURE sp_reset_road_trip_guru () BEGIN
SET
    FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS RoadTripPlaces;

DROP TABLE IF EXISTS Attractions;

DROP TABLE IF EXISTS TripBudgets;

DROP TABLE IF EXISTS RoadTripRoutes;

DROP TABLE IF EXISTS Places;

DROP TABLE IF EXISTS RoadTrippers;

CREATE TABLE
    IF NOT EXISTS RoadTrippers (
        road_tripper_id INT NOT NULL AUTO_INCREMENT,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at DATETIME NOT NULL,
        PRIMARY KEY (road_tripper_id),
        UNIQUE INDEX email_UNIQUE (email ASC),
        UNIQUE INDEX username_UNIQUE (username ASC)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS RoadTripRoutes (
        road_trip_id INT NOT NULL AUTO_INCREMENT,
        road_tripper_id INT NOT NULL,
        road_trip_name VARCHAR(255) NOT NULL,
        distance INT NOT NULL,
        start_date DATETIME NULL DEFAULT NULL,
        end_date DATETIME NULL DEFAULT NULL,
        PRIMARY KEY (road_trip_id),
        INDEX road_tripper_id_idx (road_tripper_id ASC),
        CONSTRAINT fk_route_roadtripper FOREIGN KEY (road_tripper_id) REFERENCES RoadTrippers (road_tripper_id) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS TripBudgets (
        trip_budget_id INT NOT NULL AUTO_INCREMENT,
        total_budget DECIMAL(10, 2) NULL DEFAULT NULL,
        daily_budget DECIMAL(10, 2) NULL DEFAULT NULL,
        road_trip_id INT NOT NULL,
        PRIMARY KEY (trip_budget_id),
        UNIQUE INDEX road_trip_id_UNIQUE (road_trip_id ASC),
        CONSTRAINT fk_route_budget FOREIGN KEY (road_trip_id) REFERENCES RoadTripRoutes (road_trip_id) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS Places (
        place_id INT NOT NULL AUTO_INCREMENT,
        place_name VARCHAR(255) NOT NULL,
        place_state VARCHAR(255) NOT NULL,
        place_city VARCHAR(255) NOT NULL,
        PRIMARY KEY (place_id)
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS RoadTripPlaces (
        road_trip_place_id INT NOT NULL AUTO_INCREMENT,
        road_trip_id INT NOT NULL,
        place_id INT NOT NULL,
        stop_order INT NOT NULL,
        PRIMARY KEY (road_trip_place_id),
        INDEX road_trip_id_idx (road_trip_id ASC),
        INDEX place_id_idx (place_id ASC),
        CONSTRAINT fk_rtplace_trip FOREIGN KEY (road_trip_id) REFERENCES RoadTripRoutes (road_trip_id) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT fk_rtplace_place FOREIGN KEY (place_id) REFERENCES Places (place_id) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

CREATE TABLE
    IF NOT EXISTS Attractions (
        attraction_id INT NOT NULL AUTO_INCREMENT,
        place_id INT NOT NULL,
        attraction_name VARCHAR(255) NOT NULL,
        PRIMARY KEY (attraction_id),
        INDEX place_id_idx (place_id ASC),
        CONSTRAINT fk_attraction_place FOREIGN KEY (place_id) REFERENCES Places (place_id) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- Insert sample data
INSERT INTO
    RoadTrippers (username, email, created_at)
VALUES
    (
        'dani_travels',
        'dani@example.com',
        '2026-07-01 10:15:00'
    ),
    (
        'roadrunner22',
        'roadrunner22@example.com',
        '2026-07-02 14:30:00'
    ),
    (
        'wanderlust',
        'wanderlust@example.com',
        '2026-07-03 09:45:00'
    ),
    (
        'mountainlover',
        'mountainlover@example.com',
        '2026-07-04 16:20:00'
    ),
    (
        'coast2coast',
        'coast2coast@example.com',
        '2026-07-05 08:10:00'
    );

INSERT INTO
    RoadTripRoutes (
        road_tripper_id,
        road_trip_name,
        distance,
        start_date,
        end_date
    )
VALUES
    (
        1,
        'Pacific Northwest Adventure',
        1200,
        '2026-08-01',
        '2026-08-07'
    ),
    (
        2,
        'California Coast',
        850,
        '2026-09-10',
        '2026-09-15'
    ),
    (
        3,
        'Southwest National Parks',
        1600,
        '2026-10-01',
        '2026-10-10'
    ),
    (
        4,
        'Rocky Mountain Escape',
        950,
        NULL,
        '2026-07-25'
    ),
    (4, 'New England Fall Colors', 700, NULL, NULL),
    (2, 'Cross Country Move', 2000, NULL, NULL);

INSERT INTO
    TripBudgets (total_budget, daily_budget, road_trip_id)
VALUES
    (1500.00, 214.29, 1),
    (1200.00, 200.00, 2),
    (2500.00, 250.00, 3),
    (1000.00, 166.67, 4),
    (1400.00, 200.00, 5),
    (NULL, NULL, 6);

INSERT INTO
    Places (place_name, place_state, place_city)
VALUES
    (
        'Crater Lake National Park',
        'Oregon',
        'Crater Lake'
    ),
    (
        'Golden Gate Bridge',
        'California',
        'San Francisco'
    ),
    (
        'Grand Canyon National Park',
        'Arizona',
        'Grand Canyon Village'
    ),
    (
        'Rocky Mountain National Park',
        'Colorado',
        'Estes Park'
    ),
    ('Acadia National Park', 'Maine', 'Bar Harbor'),
    ('Mount Hood', 'Oregon', 'Government Camp'),
    (
        'Yosemite National Park',
        'California',
        'Yosemite Valley'
    );

INSERT INTO
    RoadTripPlaces (road_trip_id, place_id, stop_order)
VALUES
    (1, 6, 1),
    (1, 1, 2),
    (2, 2, 1),
    (2, 7, 2),
    (2, 1, 3),
    (3, 3, 1),
    (4, 4, 1),
    (5, 5, 1),
    (6, 2, 1);

INSERT INTO
    Attractions (place_id, attraction_name)
VALUES
    (1, 'Rim Drive'),
    (1, 'Wizard Island'),
    (2, 'Golden Gate Overlook'),
    (2, 'Battery Spencer'),
    (3, 'South Rim'),
    (3, 'Bright Angel Trail'),
    (4, 'Trail Ridge Road'),
    (4, 'Bear Lake'),
    (5, 'Cadillac Mountain'),
    (6, 'Timberline Lodge'),
    (7, 'Half Dome');

SET
    FOREIGN_KEY_CHECKS = 1;

END / / DELIMITER;

--- For inserting roadtripper (CREATE)
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