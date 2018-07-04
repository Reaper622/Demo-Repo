//画布大小
var width = 1000;
var height = 1000;

var svg = d3.select("body")
	.append("svg")
	.attr("width",width)
	.attr("height",height);


var padding = {
	left:30,
	right:30,
	top:20,
	bottom:20
};

var dataset = [10,20,30,40,33,24,12,5];

//x轴比例尺
var xScale = d3.scale.ordinal()
	.domain(d3.range(dataset.length))
	.rangeRoundBands([0,width - padding.left - padding.right]);

//y轴比例尺
var yScale = d3.scale.linear()
	.domain([0,d3.max(dataset)])
	.range([height - padding.top - padding.bottom, 0]);

//x轴
var xAxis = d3.svg.axis()
	.scale(xScale)
	.orient("bottom");

//y轴
var yAxis = d3.svg.axis()
	.scale(yScale)
	.orient("left");

//矩形之间的空白
var rectPadding = 4;

//添加矩形元素
var rects = svg.selectAll(".MyRect")
	.data(dataset)
	.enter()
	.append("rect")
	.attr("class","MyRect")
	.attr("transform","translate(" + padding.left + "," + padding.top + ")")
	.attr("x", function(d,i){
            return xScale(i) + rectPadding/2;
        } )
    .attr("y",function(d){
            return yScale(d);
        })
    .attr("width", xScale.rangeBand() - rectPadding )
    .attr("height", function(d){
            return height - padding.top - padding.bottom - yScale(d);
        })
    .attr("fill","steelblue");

//添加文字元素
var texts = svg.selectAll(".MyText")
        .data(dataset)
        .enter()
        .append("text")
        .attr("class","MyText")
        .attr("transform","translate(" + padding.left + "," + padding.top + ")")
        .attr("x", function(d,i){
            return xScale(i) + rectPadding/2;
        } )
        .attr("y",function(d){
            return yScale(d);
        })
        .attr("dx",function(){
            return (xScale.rangeBand() - rectPadding)/2;
        })
        .attr("dy",function(d){
            return 20;
        })
        .text(function(d){
            return d;
        });

//添加x轴
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + (height - padding.bottom) + ")")
  .call(xAxis); 
        
//添加y轴
svg.append("g")
  .attr("class","axis")
  .attr("transform","translate(" + padding.left + "," + padding.top + ")")
  .call(yAxis);




// var circle1 = svg.append("circle")
// 	.attr("cx",100)
// 	.attr("cy",100)
// 	.attr("r",45)
// 	.style("fill","green");

// //在一秒(1000 ms)内将圆心坐标由100变为300
// circle1.transition()
// 	.duration(100)
// 	.attr("cx",300);



// var circle2 = svg.append("circle")
// 	.attr("cx",100)
// 	.attr("cy",200)
// 	.attr("r",45)
// 	.style("fill","green");



// //1.5秒内移动且改变颜色
// circle2.transition()
// 	.duration(1500)
// 	.attr("cx",300)
// 	.style("fill","red");



// var circle3 = svg.append("circle")
// 	.attr("cx",100)
// 	.attr("cy",300)
// 	.attr("r",45)
// 	.style("fill","green");


// circle3.transition()
// 	.duration(2000)
// 	.ease("bounce")
// 	.attr("cx",300)
// 	.style("fill","red")
// 	.attr("r",35)
