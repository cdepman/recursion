// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var elementArray = [];
	var nodeSurfer = function(currentNode){
		if (currentNode.classList != undefined){
			for (var i = 0; i < currentNode.classList.length; i++){
				if (currentNode.classList[i] === className){
					elementArray.push(currentNode);
				}
			}
		}
		for (var i = 0; i < currentNode.childNodes.length; i++){
			nodeSurfer(currentNode.childNodes[i]);
		}
	}
	nodeSurfer(document.body);
	return elementArray;
};

