### nginx应用的三大场景：
-  静态资源服务：通过本地文件系统提供服务；
-  反向代理：缓存/负载均衡/nginx的强大性能；
-  api服务：openResty;

### nginx的主要优点：

- 高并发，高性能：32h 64g 静态资源请求可达100万rps
- 可扩展性好：模块化设计，稳定，生态圈丰富。
- 高可靠性:一般的web服务器启动几周或者几个月启动一次，nginx可以运行数年。
- 热部署：不停止服务，可直接部署。
- bsd许可证:直接更改源代码，是合法的。

### nginx 的主要组成：
- nginx二进制可执行文件:由各个源码编译出的一个文件
- nginx.conf配置文件：控制nginx 的行为
- access.log访问日志:记录每一条http请求信息
- error.log错误日志:定位问题


### 国内主流nginx的版本
- [tengine](https://tengine.taobao.org/)
- [openResty](https://openresty.org/cn/)

### nginx 源码目录
- auto目录：cc 编译，lib库, os对系统的判断，其他目录文件辅助config文件执行判断nginx支持那些模块，及操作系统有那些特性供nginx使用。
- change文件：提供nginx有哪些特性及bugfix;
- changes.ru:欧罗斯人开发
- conf:示例文件，供运维使用cp的安装目录。
- configure:
- html:错误重定向；
- main:linux对ngix的帮助文件