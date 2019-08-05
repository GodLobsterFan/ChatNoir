function clean(x)
{
	x["msg"] = x["msg"].replace(/font color=\w*>/gi, 'font color=black>').replace(/color: #\w+/gi, "color: #000000").replace(/font-weight: \w+/gi, "font-weight: normal");
	handleMessage(x);
}
