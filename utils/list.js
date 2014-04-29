/**
 * Utilities for lists
 * 
 * @author Vasily Konovalov
 */
var _ = require('underscore');

// Calculating the median of an array basically involves sorting the array and picking the middle number. 
// If it’s an even amount of numbers you take the two numbers in the middle and average them.
exports.median =  function(values) {
 	    values.sort(function(a,b) {return a - b;} );
	    var half = Math.floor(values.length/2);
	    if(values.length % 2)
	        return values[half];
	    else
	        return (values[half-1] + values[half]) / 2.0;
	}

exports.variance = function(list)
	{
		sum = _.reduce(list, function(memo, num){ return memo + num; }, 0);
		exp = sum/list.length
		sum2 = _.reduce(list, function(memo, num){ return memo + num*num; }, 0);
		exp2 = sum2/list.length
		return exp2-exp*exp
	}

exports.average = function(list)
	{
		sum = _.reduce(list, function(memo, num){ return memo + num; }, 0);
		return sum/list.length
	}

exports.listembed = function(label)
	{
		if (label === null)
			return [[]]
		if (typeof label != 'undefined')
		{

			if ((_.isObject(label))&&!(_.isArray(label)))
			if ('classes' in JSON.parse(label))
				label = label.classes

			if (!(label[0] instanceof Array))
				return [label]
			else 
				return label
		}
		else
		{
			return [label]
		}
	}

exports.clonedataset = function(set)
	{
	set1 = []
	_.each(set, function(value, key, list){
		set1.push(_.clone(value))
		})
	return set1
	}

