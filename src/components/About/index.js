import React, { Component } from 'react';
import './index.scss';
import d3 from 'd3';
const data = {
	graph: [
		{
			data: [
				{
					value: 0,
					packname: 'Study'
				},
				{
					value: 0,
					packname: 'Clear the Cut-Off'
				},
				{
					value: 0,
					packname: 'Become a Top Ranker'
				},
				{
					value: 0,
					packname: 'Maximize Your Score'
				},
				{
					value: 0,
					packname: 'Rankup'
				}
			],
			type: 'achiever'
		},
		{
			data: [
				{
					value: 0,
					packname: 'Study'
				},
				{
					value: 0,
					packname: 'Clear the Cut-Off'
				},
				{
					value: 0,
					packname: 'Become a Top Ranker'
				},
				{
					value: 0,
					packname: 'Maximize Your Score'
				},
				{
					value: 0,
					packname: 'Rankup'
				}
			],
			type: 'performer'
		},
		{
			data: [
				{
					value: 0,
					packname: 'Study'
				},
				{
					value: 0,
					packname: 'Clear the Cut-Off'
				},
				{
					value: 0,
					packname: 'Become a Top Ranker'
				},
				{
					value: 0,
					packname: 'Maximize Your Score'
				},
				{
					value: 0,
					packname: 'Rankup'
				}
			],
			type: 'fighter'
		},
		{
			data: [
				{
					value: 0,
					packname: 'Study'
				},
				{
					value: 0,
					packname: 'Clear the Cut-Off'
				},
				{
					value: 0,
					packname: 'Become a Top Ranker'
				},
				{
					value: 0,
					packname: 'Maximize Your Score'
				},
				{
					value: 0,
					packname: 'Rankup'
				}
			],
			type: 'NA'
		}
	],
	total: 0
};
export default class About extends Component {
	init() {
		/* added due to padding */
		$scope.parentWidth = Math.min(el.parent()[0].clientWidth, 500);
		var margins = {
				top: 12,
				left: 50,
				right: 50,
				bottom: 60
			},
			width = $scope.parentWidth - margins.left - margins.right,
			height = 320 - margins.top - margins.bottom,
			dataset = data.graph,
			series = dataset.map(function(d) {
				return d.type;
			}),
			dataset = dataset.map(function(d) {
				return data.map(function(o, i) {
					// Structure it so that your numeric
					// axis (the stacked amount) is y
					return {
						y: o.value,
						x: o.packname
					};
				});
			}),
			stack = d3.layout.stack();
		stack(dataset);

		var dataset = dataset.map(function(group) {
				return group.map(function(d, p) {
					// Invert the x and y values, and y0 becomes x0
					return {
						x: d.y,
						y: d.x,
						x0: d.y0,
						d: dataset.map(function(d) {
							return d[p];
						})
					};
				});
			}),
			svg = d3
				.select(el[0])
				.append('svg')

				// .attr('width', width + margins.left + margins.right + legendPanel.width)
				// //.attr('height', height + margins.top + margins.bottom)
				// .attr("viewBox", "0 0 400 300")

				.attr('width', width + margins.left + margins.right)
				.attr('height', height + margins.top + margins.bottom)

				.append('g')
				.attr('transform', 'translate(' + margins.left + ',' + margins.top + ')'),
			xMax = d3.max(dataset, function(group) {
				return d3.max(group, function(d) {
					if (d.x + d.x0 > 3500) {
						return d.x + d.x0 + 1200;
					} else if (d.x + d.x0 > 2500 && d.x + d.x0 < 3500) {
						return d.x + d.x0 + 700;
					} else if (d.x + d.x0 > 250 && d.x + d.x0 < 2500) {
						return d.x + d.x0 + 250;
					} else {
						if (d.x + d.x0 < 100) {
							return d.x + d.x0 + 10;
						} else {
							return d.x + d.x0 + 50;
						}
					}
				});
			}),
			maxValueOnXaxis = xMax,
			xScale = d3.scale
				.linear()
				.domain([0, maxValueOnXaxis])
				.range([0, width]),
			months = dataset[0].map(function(d) {
				return d.y;
			}),
			yScale = d3.scale
				.ordinal()
				.domain(months)
				.rangeRoundBands([0, height], 0.4),
			xAxis = d3.svg
				.axis()
				.scale(xScale)
				.ticks(5)
				.tickSize(0)
				.tickValues([
					0,
					maxValueOnXaxis / 5,
					(maxValueOnXaxis * 2) / 5,
					(maxValueOnXaxis * 3) / 5,
					(maxValueOnXaxis * 4) / 5,
					(maxValueOnXaxis * 5) / 5
				])
				.orient('bottom'),
			yAxis = d3.svg
				.axis()
				.scale(yScale)
				.orient('left'),
			colours = d3.scale.ordinal().range(['#fd33b9', '#7b1fa2', '#5856d6', '#b5b6bb']),
			groups = svg
				.selectAll('g')
				.data(dataset)
				.enter()
				.append('g')
				.style('fill', function(d, i) {
					return colours(i);
				}),
			rects = groups
				.selectAll('rect')
				.data(function(d) {
					return d;
				})
				.enter()
				.append('rect')
				.attr('x', function(d) {
					return xScale(d.x0);
				})
				.attr('y', function(d, i) {
					return yScale(d.y);
				})
				.attr('height', function(d) {
					return yScale.rangeBand();
				})
				.attr('width', function(d) {
					return xScale(d.x);
				})
				.on('mouseover', function(d, i) {
					if (window.location.href.includes('academic-analysis')) {
					}
					var xPos = parseFloat(d3.select(this).attr('x'));
					var yPos = parseFloat(d3.select(this).attr('y')) + yScale.rangeBand() * 5;

					// var totalNumberOfPointsOnXaxis = dataset[0].length;
					// for(var i=0;i<totalNumberOfPointsOnXaxis;i++){
					// 	var yposArray = [];
					// 	yposArray.push(dataset[0][i]['x'] + dataset[1][i]['x'] + dataset[2][i]['x']);
					// }

					console.log(d.x + d.x0);
					var spacing = '\xa0\xa0\xa0\xa0';
					d3.select('#tooltip')
						.style('left', xScale(d.d[0].y + d.d[1].y + d.d[2].y + d.d[3].y) + 66 + 'px')
						.style('top', yScale(d.y) - 36 + 'px')
						.select('#value')
						.text(
							' Achiever: ' +
								spacing +
								'\xa0\xa0' +
								d.d[0].y +
								'\nPerformer : ' +
								spacing +
								d.d[1].y +
								'\n Fighter : ' +
								spacing +
								'\xa0\xa0\xa0\xa0' +
								d.d[2].y +
								'\n Others : ' +
								spacing +
								'\xa0\xa0\xa0\xa0\xa0' +
								d.d[3].y
						);

					d3.select('#tooltip').classed('hidden', false);
				})
				.on('mouseout', function() {
					d3.select('#tooltip').classed('hidden', true);
				});

		svg.append('g')
			.attr('class', 'y axis')
			.attr('transform', 'translate(0,' + height + ')')
			.call(xAxis)
			.append('text')
			.attr('transform', 'rotate(-90)')
			.attr('y', -25)
			.attr('x', 131)
			.attr('dy', '.71em')
			.style('text-anchor', 'middle')
			.style('fill', '#697b8c')
			.style('font-size', '12px')
			.text('Embibe Products');

		// svg.append('g').append('line')
		//     .style('fill','none')
		//     .attr('x1',0)
		//     .attr('y1',height)
		//     .attr('x2',width+margins.left + margins.right-20)
		//     .attr('y2',height)
		//     .attr("stroke", "#2d2d2d")
		//     .attr("opacity",1)
		//     .attr("stroke-width", .5)
		/*x-axis text */
		//      console.log(width+margins.right+margins.left);
		//      for(i=0;i<=5;i++){
		//      	 var maxXcordinate = xScale(width+margins.right+margins.left)
		//      	 var x = parseInt((i*maxXcordinate)/5);
		//      	 console.log(x);
		//      	 svg.append("g").append("text")
		// .attr('x',x)
		// .attr('y',height + 20)
		// .text(x)
		// .style("text-anchor", "middle")
		// .style('fill', '#697b8c')
		// 		.style('font',4)
		//      }

		svg.append('g')
			.attr('class', 'x axis')
			.call(yAxis);
		// for(var i=0;i<months.length;i++){
		// 	var packName = months[i];
		// 	var y = yScale(packName);
		// 	for(var j=0;j<dataset.length;j++){
		// 		var x = 0;
		// 		for(key in dataset[j]){

		// 		}
		// 	}

		// }

		var numberOfStack = 3;
		var totalNumberOfPointsOnXaxis = dataset[0].length;
		for (var i = 0; i < totalNumberOfPointsOnXaxis; i++) {
			var y = dataset[0][i]['x'] + dataset[1][i]['x'] + dataset[2][i]['x'] + dataset[3][i]['x'];
			svg.append('g')
				.append('text')
				.data(dataset)
				.attr('x', xScale(y) + 5)
				.attr('y', yScale(months[i]) + 15)
				.text(months[i])
				.style('fill', '#697b8c')
				.style('font', 6)
				.on('mouseover', function(d, i) {
					if (window.location.href.includes('academic-analysis')) {
					}
					var xPos = parseFloat(d3.select(this).attr('x'));
					var yPos = parseFloat(d3.select(this).attr('y')) + yScale.rangeBand() * 5;

					// var totalNumberOfPointsOnXaxis = dataset[0].length;
					// for(var i=0;i<totalNumberOfPointsOnXaxis;i++){
					// 	var yposArray = [];
					// 	yposArray.push(dataset[0][i]['x'] + dataset[1][i]['x'] + dataset[2][i]['x']);
					// }

					// console.log(d.x+d.x0);
					var spacing = '\xa0\xa0\xa0\xa0';
					for (var jj = d.length - 1; jj >= 0; jj--) {
						if (this.innerHTML == d[jj]['y']) {
							d = d[jj];
							break;
						}
					}
					d3.select('#tooltip')
						.style('left', xScale(d.d[0].y + d.d[1].y + d.d[2].y + d.d[3].y) + 66 + 'px')
						.style('top', yScale(d.y) - 36 + 'px')
						.select('#value')
						.text(
							' Achiever: ' +
								spacing +
								'\xa0\xa0' +
								d.d[0].y +
								'\nPerformer : ' +
								spacing +
								d.d[1].y +
								'\n Fighter : ' +
								spacing +
								'\xa0\xa0\xa0\xa0' +
								d.d[2].y +
								'\n Others : ' +
								spacing +
								'\xa0\xa0\xa0\xa0\xa0' +
								d.d[3].y
						);

					d3.select('#tooltip').classed('hidden', false);
				})
				.on('mouseout', function() {
					d3.select('#tooltip').classed('hidden', true);
				});
		}
		svg.append('g')
			.append('text')
			.attr('x', width / 2)
			.attr('y', height + (margins.top + margins.bottom) / 2)
			.text('Number of Students')
			.style('text-anchor', 'middle')
			.style('font-size', '12px')
			.style('fill', '#697b8c')
			.style('font', 4);
		// 	svg.append("g").append("text")
		// .attr('x',width/2)
		// .attr('y',height+ (margins.top + margins.bottom)/2)
		// .text('Product')
		// .style("text-anchor", "middle")
		// .style('fill', '#697b8c')
		// 		.style('font',4)
		// svg.append('rect')
		//     .attr('fill', 'yellow')
		//     .attr('width', 160)
		//     .attr('height', 30 * dataset.length)
		//     .attr('x', width + margins.left)
		//     .attr('y', 0);

		// 	series.forEach(function (s, i) {
		// 	    svg.append('text')
		// 	        .attr('fill', 'black')
		// 	        .attr('x', width + margins.left + 8)
		// 	        .attr('y', i * 24 + 24)
		// 	        .text(s);
		// 	    svg.append('rect')
		// 	        .attr('fill', colours(i))
		// 	        .attr('width', 60)
		// 	        .attr('height', 20)
		// 	        .attr('x', width + margins.left + 90)
		// 	        .attr('y', i * 24 + 6);
		// });
	}
	render() {
		return <div className='about'>About Me !</div>;
	}
}
