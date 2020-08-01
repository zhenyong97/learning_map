编译dotnet.Core程序

dotnet build 编译程序
dotnet publish 分发应用
	dotnet publish -c Release // 会在bin目录下 出现Release文件夹，里面的publish文件夹内会有该exe程序(win平台)
	dotnet publish -c New_Release -p:PublishSingleFile=true -r win-x64  // 发布单个exe文件, -r 平台为win64位, 包含了整个运行时，会比较慢
	
编写dotnet.Core程序
引入外部依赖库(由nuget管理, 注意要查看依赖sdk版本，会出现add失败)
	dotnet add package Aiursoft.Pylon
	