function drawTree (treeHeight) {	
	for (var i = 1 ; i <= treeHeight ; i++) {
		var star = "";
		for ( var j = 1 ; j <= i ; j++) {
			var star = star += "*";
			if ( j == i ){
				break;	
			}
		}
		console.log(star);
		document.write(star);
		document.write("<br>");
	} 
}
drawTree (prompt( "Jak duża ma być Twoja choinka"));


