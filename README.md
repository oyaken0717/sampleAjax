# sampleAjax

## 1.TestContoller.java   
ここでstart.htmlにいく  
```TestContoller.java   
@Controller
@RequestMapping("")
public class TestContoller {

	@RequestMapping("")
	public String toStart() {
		return "start";
	}  
```

## 2.start.html  
以下がクリックされたらAjaxが起動 
```
<button class="ajaxButton" type="submit">Ajaxが動く</button>  
```

## 3.sample.js
```
http://localhost:8080/startAjax
```

## 4.TestContoller.java
returnでひとまずrusultが返る
```TestContoller.java   
    @PostMapping("/startAjax")
    public ResponseEntity<Boolean> startAjax() {
    	Boolean result = true;
    	return new ResponseEntity<>(result, HttpStatus.OK);
    }
```
