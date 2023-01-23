setInterval(showTime, 1000);
function showTime() {
	let time = new Date();
	let hour = time.getHours();
	let min = time.getMinutes();
	let sec = time.getSeconds();
	am_pm = "AM";
	desc = "Selamat Pagi, ";
	
	if(hour >= 0 && hour < 6){
		desc = "Selamat Pagi, ";
	}
	if(hour >= 6 && hour < 11){
		desc = "Selamat Pagi, ";
	}
	if(hour >= 11 && hour < 15){
		desc = "Selamat Siang, ";
	}
	if(hour >= 15 && hour < 19){
		desc = "Selamat Sore, ";
	}
	if(hour >= 19 && hour <= 23){
		desc = "Selamat Malam, ";
	}
	
	if (hour > 12) {
		hour -= 12;
		am_pm = "PM";
	}
	if (hour == 0) {
		hr = 12;
		am_pm = "AM";
	}


	hour = hour < 10 ? "0" + hour : hour;
	min = min < 10 ? "0" + min : min;
	sec = sec < 10 ? "0" + sec : sec;

	let currentTime = hour + ":"
			+ min + ":" + sec + am_pm;

	let conditionTime = desc;

	document.getElementById("jamdigital")
			.innerHTML = currentTime;
	
	document.getElementById("sapaan")
			.innerHTML = conditionTime;
}
showTime();
