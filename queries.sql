-- Get the number of submissions for each day for the last 7 days
-- Returns: date, count
SELECT date_trunc('day', created_at) AS date, count(*) AS count
FROM submissions
WHERE created_at > now() - interval '7 days'
GROUP BY date
ORDER BY date DESC;


-- Get the times of the day of the submissions over the lasy 7 days (in UTC)
-- Returns: hour, count
SELECT date_part('hour', created_at) AS hour, count(*) AS count
FROM submissions
WHERE created_at > now() - interval '7 days'
GROUP BY hour
ORDER BY hour ASC;
