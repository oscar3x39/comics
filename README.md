# Comics

### Copy the code to add browser shortct

Comicbus

```
javascript:var ch=request("ch"),p=1,nums=parseInt($("#pageindex option:last-child")[0].value)-1;function getImg(){var text=$("script")[16].text;return text=text.match(/ge\(.*?;/g)[1],eval(text)}var imgs=[],range=[...Array(nums).keys()];for(var key in range){p=parseInt(key)+parseInt(1);var src=getImg();imgs[key]=`<img src='${src}'>`}var body=imgs.join("<br/>");$("body").html(body).css({display:"flex","flex-direction":"column","align-items":"center","justify-content":"center"});
```