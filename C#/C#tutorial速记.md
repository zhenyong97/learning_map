# C#速记

C#中的打印, 在终端中输出`Console.WriteLine()`,速记下的demo都使用这个输出变量

## 字符串相关

* 声明字符串变量需要在变量名加`string`关键字

```csharp
//声明string字符串变量
string firstFriend = "Maria";
Console.WriteLine($"My friend is {firstFriend} ");
```

* 一些关于字符串的方法与属性

```csharp
// 全部转大写, 全部转小写
string name = "mike"
Console.WriteLine($"to upper {name.ToUpper()}");
Console.WriteLine($"to lower {name.ToLower()}");
// 格式化当前字符串，以一定格式删除两旁得字符串(默认为空格，类似于python的strip)
string greeting = "      Hello World!       ";
Console.WriteLine($"[{greeting}]");

string trimmedGreeting = greeting.TrimStart(); // 切左边

Console.WriteLine($"[{trimmedGreeting}]");

trimmedGreeting = greeting.TrimEnd();  // 切右边

Console.WriteLine($"[{trimmedGreeting}]");

trimmedGreeting = greeting.Trim();  // 两边都切

Console.WriteLine($"[{trimmedGreeting}]");
// 替换部分字符串，并返回 string.Replace()
string sayHello = "Hello World!";
Console.WriteLine(sayHello);
sayHello = sayHello.Replace("Hello", "Greetings");
Console.WriteLine(sayHello);

// 返回字符的长度 Length(属性 property)
string comment = "This is the tutorial of C#"
Console.WriteLine($"The variable of {comment} has {comment} letters")

// 查询某个子字符串是存在与当前字符串中(方法 method 返回bool) string.Contains()
string songLyrics = "You say goodbye, and I say hello";
Console.WriteLine(songLyrics.Contains("goodbye"));  // True

Console.WriteLine(songLyrics.Contains("greetings"));  // False

// 查询某个字符串是以xxx开头|结未(method 返回bool) string.StartsWith()|EndWith
string songLyrics = "You say goodbye, and I say hello";
Console.WriteLine(songLyrics.StartsWith("You"));
Console.WriteLine(songLyrics.StartsWith("goodbye"));

Console.WriteLine(songLyrics.EndsWith("hello"));
Console.WriteLine(songLyrics.EndsWith("goodbye"));
```

## 数字类型相关

* tutorial介绍了以下的常用类型 `int` , `doubule` , `decimal`，同样的他们是作为关键字的存在，要声明一个这样类型的变量，需要给上他们对应的关键字

* 遵循四则运算的运算符默认的优先级，可用()另外给标注提高优先运算

> Tips:
> 
> 不管int，doubule，decimal类型的都有一个值的范围,声明变量的值或者通过运算出来的值只能在这个范围内，否则回溢出(出现报错，或者值异常)
> 
> ```csharp
> int max = int.MaxValue; // MaxValue 返回当前int类型所能表示的最大值
> ```

> int min = int.MinValue;
> Console.WriteLine($"The range of integers is {min} to {max}");
> 
> double max = double.MaxValue;
> .....
> 
> ```
> 
> ```

* 引入计算圆周的pi

> pi变量默认存放在Systm下的Math中，引用如下`Math.PI
> 
> ```csharp
> double radius = 2.50;
> double area = Math.PI * radius * radius;
> ```

> Console.WriteLine($"r: {radius} \n area: {area}");
> 
> ```
> 
> ```

## 逻辑判断语句

* `if else`判断语句

```csharp
int a = 5;
int b = 3;
if (a + b > 10)
    Console.WriteLine("The answer is greater than 10");
else
    Console.WriteLine("The answer is not greater than 10");

// 表达式中嵌套多个判断， 与 逻辑与 或逻辑 ，分别使用 && 跟 || 标识

int a = 5;
int b = 3;
int c = 4;
if ((a + b + c > 10) || (a == b))
{
    Console.WriteLine("The answer is greater than 10");
    Console.WriteLine("Or the first number is equal to the second");
}
else
{
    Console.WriteLine("The answer is not greater than 10");
    Console.WriteLine("And the first number is not equal to the second");
}
```

* loop循环语句表达 `while` 跟 `do..while`

```csharp
int counter = 0;
while (counter < 10)
{
  Console.WriteLine($"Hello World! The counter is {counter}");
  counter++;
}

//两种最终表达的都是同一个意思
int counter = 0;
do
{
  Console.WriteLine($"Hello World! The counter is {counter}");
  counter++;
} while (counter < 10);
```

* for循环表达式

```csharp
for(int counter = 0; counter < 10; counter++)
{
  Console.WriteLine($"Hello World! The counter is {counter}");
}

// 计算在21范围里面能够整除3集合的和
int sum = 0;
for (int number = 1; number < 21; number++)
{
  if (number % 3 == 0)
  {
    sum = sum + number;
  }
}
Console.WriteLine($"The sum is {sum}");
```

> Tips
> 
> 第一部分是**for**初始值设定项：`int counter = 0;`声明这`counter`是循环变量，并将其初始值设置为`0`。
> 
> 中间部分是**for条件**：`counter < 10`声明该 `for`循环继续执行，只要counter的值小于10。
> 
> 最后一部分是**for迭代器**：`counter++`指定在执行`for`语句后的块之后如何修改循环变量。在此，它指定`counter`每次执行该块时应将其递增1。

## 列表集合

```csharp
var names = new List<string> {"<names>", "Ana", "Felipe"};
foreach (var name in names){
    Console.WriteLine($"Hello {name.ToUpper()}!");
}
Console.WriteLine();
names.Add("Maria");
names.Add("Bill");
names.Remove("Ana");
foreach (var name in names)
{
  Console.WriteLine($"Hello {name.ToUpper()}!");
}
////////////////////
Console.WriteLine($"My name is {names[0]}.");
Console.WriteLine($"I've added {names[2]} and {names[3]} to the list.");

Console.WriteLine($"The list has {names.Count} people in it");
// List.Count (返回列表中元素的数量)
//////
var index = names.IndexOf("Felipe");
// List.IndexOf(key) 返回当前值所在列表中的的索引，若不存在这返回-1
if (index != -1)
  Console.WriteLine($"The name {names[index]} is at index {index}");

var notFound = names.IndexOf("Not Found");
  Console.WriteLine($"When an item is not found, IndexOf returns {notFound}");
```
