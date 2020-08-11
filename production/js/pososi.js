
		function anim(){
			var more = document.getElementById('more')
			if (more.style.display == 'block'){
				more.style.display = 'none';
				document.getElementById('moreInfo').innerHTML = 'Больше информации'
			}else {
				more.style.display = 'block';
				document.getElementById('moreInfo').innerHTML = 'Меньше информации'
			}
		}

		function vh(){
			var endDiv = document.getElementById('endDiv')
			var more = document.getElementById('more')
			if (more.style.display == 'none'){
				endDiv.style.position = 'absolute';
				endDiv.style.bottom = '0'
			}else{
				endDiv.style.position = 'relative';
				endDiv.style.bottom = '-50vh'
			}
		}