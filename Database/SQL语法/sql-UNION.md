# SQL-UNION

定义: UNION运算符用于合并两个或多个SELECT语句的结果集

* UNION中的每个SELECT语句必须具有相同的列数

* 这些列还必须具有相似的数据类型

* 每个SELECT语句中的列也必须具有相同的顺序



```sql
SELECT column_name(s) FROM table1
UNION
SELECT column_name(s) FROM table2;
```

----------------

TIP: UNION操作符默认对结果**去重**，要提取全部需要加多**ALL**关键字

```sql
SELECT column_name(s) FROM table1
UNION ALL
SELECT column_name(s) FROM table2;
```




