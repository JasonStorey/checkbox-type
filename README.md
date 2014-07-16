Checkbox Type
=============

An extremely useful JS library for rendering text using HTML checkboxes.

![alt text](http://jasonstorey.co.uk/checkbox/checkbox-type.png "Checkbox type screenshot")

*Watch your browser slow down and crash whilst it struggles to render several million checkboxes at the same time!!*

You can download checkbox-type.js [here](http://jasonstorey.co.uk/checkbox/checkbox-type.min.js). No, it's not versioned. Yes, it's a stupid idea.

How to Build
------
You'll need node & npm installed.

    git clone git@github.com:JasonStorey/checkbox-type.git
    cd checkbox-type
    npm install
    npm run build

Provided all goes to plan, */dist* will contain checkbox-type.js

How to Use
-------
* include a recent jQuery on your page
* include checkbox-type.js script
* use `CheckboxType(selector)` to render text as checkbox-type

For example...
    
    <h1>Checkbox Type is Super Useful</h1>
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js"></script>
    <script type="text/javascript" src="./checkbox-type.js"></script>
    <script type="text/javascript">
        // grab all text within <h1> and replace it with checkbox-type
		var h1 = CheckboxType('h1');
	</script>
    
Or you can grab the bookmarklet from [this page](http://jasonstorey.co.uk/checkbox/) - drag the bookmarklet to your bookmarks bar and click it on various pages to watch your browser struggle. The bookmarklet currently checkbox-types all `<p>` elements.
