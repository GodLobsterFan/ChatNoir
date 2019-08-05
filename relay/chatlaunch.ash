buffer override(buffer page)
{
	page.replace_string("<head>", "<head><script type=\"text/javascript\" src=\"chatlaunch.js\"></script>");
	page.replace_string("handleMessage(res.msgs[i]);", "clean(res.msgs[i]);");
	return page;
}

void main()
{
	override(visit_url("mchat.php")).write();
}
