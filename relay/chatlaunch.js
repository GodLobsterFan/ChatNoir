var snowmen = ["Flakey","Freezey","Frosty","Snowflake","Snowy"];

function clean(x)
{
	// Disable snowmen
	if (snowmen.includes(x["who"]["name"]))
	{
		return;
	}
	// Disable pirate yelling
	x["msg"] = x["msg"].replace("<b>", "").replace("</b>", "");
	// Disable safari noises
	x["msg"] = x["msg"].replace(/<i title="(.*?)">.*?<\/i>/gi, "$1");
	// Force chat colours to be black
	x["msg"] = x["msg"].replace(/color(=|:) ?#?[a-zA-Z0-9]+/gi, 'color=black').replace(/font-weight: \w+/gi, "font-weight: normal");

	handleMessage(x);
}
