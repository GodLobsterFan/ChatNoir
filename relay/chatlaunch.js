var snowmen = ["Flakey","Freezey","Frosty","Snowflake","Snowy"];

function clean(x)
{
	# Disable snowmen
	if (snowmen.includes(x["who"]["name"]))
	{
		return;
	}
	# Disable pirate yelling
	x["msg"] = x["msg"].replace("<b>", "").replace("</b>", "");
	# Disable safari noises
	x["msg"] = x["msg"].replace(/<i title="(.*?)">.*?<\/i>/gi, "$1");
	# Force chat colours to be black
	x["msg"] = x["msg"].replace(/font color=\w*>/gi, 'font color=black>').replace(/color: #\w+/gi, "color: #000000").replace(/font-weight: \w+/gi, "font-weight: normal");

	handleMessage(x);
}
