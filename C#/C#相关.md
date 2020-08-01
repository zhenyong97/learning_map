Anyway, he's also offering a hundred K to people willing to skip or drop out of college to pursue their idea

c# 多态:
通常，多态性是在类的层次结构存在时发生的，并且它们是通过从公共基类继承来关联的。
多态性意味着对成员方法的调用将导致执行不同的实现，具体取决于调用该方法的对象的类型
简而言之，多态意味着单个方法可以具有许多不同的实现。

virtual 关键字

可以通过覆盖基类中的同一个方法来利用多态来调用任何派生类的适当Draw方法。必须使用基类中的virtual关键字声明此类方法。

虚拟方法使您能够以统一的方式使用相关对象组


override 关键字: 重写方法继承中的虚拟方法（例如构造函数）

抽象基类：
	-无法实例化
	-其中的抽象方法，派生类必须要重写该方法

interfaces 接口 
	interface 关键字
	public interface |Shape{
		vodi Draw();
	}
	所有接口里面的成员都是默认抽象abstract， 同时里面的都是publice
	
	
	class Program
    {
        public interface IShape {
            void Draw();
        }
        class Circle : IShape {
            public void Draw() {
                Console.WriteLine("Circle Draw");
            }
        }
        static void Main(string[] args)
        {
            IShape c = new Circle();
            c.Draw();
        }
    }
	接口里面的重写的方法不需要使用override进行重写
	
	