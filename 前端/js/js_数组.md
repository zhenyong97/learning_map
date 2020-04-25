# JS数组

js创建数组的方式如下

```javascript
let daysofWeek = new Array(); // 初始化一个数组
daysofWeek = new Array(7); //初始化数组并指定长度
daysofWeek = new Array('1', '2', '3'); // 直接将元素传递给它的构造器声明

// 更加通用的方式, 使用方括号包裹数组的内容
let days = [1，2，3，4，5];
console.log(days.length); // 数组的length属性，返回元素的数量

// 迭代访问元素的方式
for(let i = 0; i < days.length; i++){
    console.log(days[i]);
}
```

### 添加元素

#### 在数组末尾插入元素

如果要给一个数组添加一个元素，只要把值赋给数组中最后一个空位上的元素即可

> `numbers[numbers.length] = 10`

使用push方法，把元素添加到数组末

> `numbers.push(values)`
> 
> 可以添加多个
> 
> `numbers.push(v1, v2,v3)`

#### 在数组开头插入元素

为了实现这个需求，首先需要腾出数组里第一个元素的位置，把所有的元素向右移动一位。在Array的原型上实现该逻辑，如下

> ```javascript
> Array.prototype.insertFirstPosition = function(value){
>     for (let i = this.length; i>0; i--){
>         this[i] = this[i-1];
>     }
>     this[0] = value;
> };
> ```

使用unshift方法，在数组头添加元素

> `number.unshift(values)`
> 
> 可添加多个
> 
> `number.unshift(v1, v2)`

### 删除元素

从数组末删除元素，使用pop方法

> `number.pop();`

删除数组的第一个元素

> ```javascript
> for (let i = 0; i < numbers.length; i++){
>     numbers[i] = numbers[i+1];
> }
> ```


