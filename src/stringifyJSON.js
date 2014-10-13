// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// exercise: refactor with sub-methods!

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
	//case: null
	if (obj === null) {
		return "null";
	}
	//case: undefined
	if (obj === undefined){
		return 'undefined';
	}
	//case: object
	if (obj instanceof Object){
		if (obj instanceof Array){
			if (obj.length === 0){
				return '[]';
			}
			var result = '';
			for (var i = 0; i < obj.length; i++){
				if (i === obj.length - 1){
					result += stringifyJSON(obj[i]);
				}
				else {
					result += stringifyJSON(obj[i]) + ',';
				}
			}
			return '[' + result + ']';
		}
		else if (Object.getOwnPropertyNames(obj).length === 0){
			return '{}';
		}
		var result = '';
		for (var key in obj){
			if (obj[key] instanceof Function || obj[key] === undefined){
				result += '';
			}
			else {
				result += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
			}
		}
		result = result.slice(0,-1);
		return '{' + result + '}';
	}
	//case:primitive
	else {
		var objType = typeof(obj);
		if (objType === "number" || objType === "boolean"){
			return obj.toString();
		}
		return '"' + obj.toString() + '"';
	}
};
