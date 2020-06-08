function ElOffset(el) {
	var rect = el.getBoundingClientRect(),
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
	scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return rect.top + scrollTop;
}

function findEachElements(elemsContainer){
	var blockContainer = document.querySelector(elemsContainer);
	var allInnerBlocks = blockContainer.querySelectorAll('.item');
	
	var elementsList = [];
	var currentsRow = 0;
	var elementsInRow = 0;
	for (var itm = 0;itm < allInnerBlocks.length; itm++ ) {
			if(itm == 0){
					var currentsRow = ElOffset(allInnerBlocks[itm]);
			}
			if(currentsRow < ElOffset(allInnerBlocks[itm]) ){
					elementsInRow++
			}

			elementsList.push(allInnerBlocks[itm])

			if (itm+1 == allInnerBlocks.length){
					getRows(elementsList, elementsInRow);
			}
	}
}

function getRows(arr, chunk) {
	const newArray = [];
	for (let i = 0; i < arr.length; i += chunk) {
			newArray.push(arr.slice(i, i + chunk));
	}
	return findRowsHeight(newArray);
}

function findRowsHeight(AllRowsArray){
	for (var row = 0;row < AllRowsArray.length; row++ ) {
		var singleRow = AllRowsArray[row];
		var blockHeight = 0;
		for (var item = 0;item < singleRow.length; item++ ){
			var currentItemHeight = singleRow[item].clientHeight;

			if(singleRow[item].clientHeight >  blockHeight){
					blockHeight = singleRow[item].clientHeight;
			}
			
			if (item+1 == singleRow.length){
				setElementsFinalHeight(blockHeight)
			}
		}
		function setElementsFinalHeight(blockHeight){
			for (var item = 0;item < singleRow.length; item++ ){
				singleRow[item].style.height = blockHeight + 'px';
			}
		}
	}
}
findEachElements('.shields_blocks')



