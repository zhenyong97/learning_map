# sql-Having

定义: WHERE 关键字无法与聚合函数一起使用,HAVING 子句可以让我们筛选分组后的各组数据。

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);
```

在下面的Customer表中，根据Country国家**分类**统计出每个国家的用户并且条件是，该国家的用户大于5个。

![](C:\Users\YONG\Desktop\笔记\Database\SQL语法\img\customer_tab3.png)

```sql
SELECT COUNT(CustomerID), Country
FROM Customers
GROUP BY Country
HAVING COUNT(CustomerID) > 5;
```


