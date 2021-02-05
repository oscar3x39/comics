var ch = request('ch');
var p = 1;
var nums = parseInt($("#pageindex option:last-child")[0].value) - 1;

function getImg() {
	var text = $('script')[16].text
	text = text.match(/ge\(.*?;/g)[1];
	return eval(text)
}

var imgs = [];
var range = [...Array(nums).keys()]

for (var key in range) {
	p = parseInt(key) + parseInt(1);
    var src = getImg()
    imgs[key] = `<img src='${src}'>`
}

var body = imgs.join('<br/>');
$('body').html(body).css({
    'display': 'flex',
    'flex-direction': 'column',
    'align-items': 'center',
    'justify-content': 'center'
});