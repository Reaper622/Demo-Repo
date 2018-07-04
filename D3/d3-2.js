d3.select("#container")
    .append("svg")
    .attr("width","500px")
    .attr("height","250px")

d3.select("svg")
    .attr("transform","translate(50,60)")

//给于绘制信息
var data=[1,2,3,4,5,6,7,8];

//定义全局变量
var width = 500;
var height = 250;
var margin = {left:30,rigth:30,top:20,bottom:20};
var g_width = width -margin.left - margin.rigth;
var g_height = height - margin.top - margin.bottom;

//制作比例尺
var scale_x = d3.scale.linear()//线性缩放
    .domain(d3.range(data.length))//输入范围
    .range([0,g_width])
var scale_y = d3.scale.linear()
    .domain([0,d3.max(data)])
    .range([0,g_height])



//定义绘制线的函数
var line_generate = d3.svg.line()
    .x(function(d,i){return scale_x(i)})//x坐标轴的值
    .y(function(d){return scale_y(d)})//y坐标轴的值
    .interpolate("cardinal")//生成曲线

d3.select("svg")
    .append("path")//添加曲线所为元素
    .attr("d",line_generate)

//绘制坐标轴
var x_axis = d3.svg.axis().scale(scale_x).orient("left");//生成坐标轴的函数，并配合比例尺，朝左
var y_axis = d3.svg.axis().scale(scale_y);

g.append("g")
    .call(x_axis)//生成x轴
    .attr("transform","translate(0," + g_height + ")")//使坐标轴显示在下部分


//在Y轴上显示文字元素
g.append("g")
    .call(y_axis)
    .append("text")
    .text("Price")
    .attr("transform","rotate(-90)")
    .attr("text-anchor","end")
    .attr("dy","1em")