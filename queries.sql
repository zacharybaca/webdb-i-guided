SELECT * 
FROM customers

SELECT CustomerID, CustomerName, Country, City 
FROM Customers
WHERE Country = 'Germany'

SELECT CustomerID, CustomerName, Country, City
FROM customers
Order By Country desc, City

SELECT * 
FROM products
Order By price desc
Limit 5
Offset 10

INSERT INTO products (productName, supplierId, categoryId, unit, price)
VALUES ('cake', 7, 1, 'one', 20.99)

SELECT * FROM products
WHERE productName like '%cake%'

UPDATE products
SET price = 24.99, unit = 'whole cake'
WHERE productId = 79

DELETE FROM products
WHERE productId = 80