// url 에 있는 파일을 savepath 에 다운로드 한다.

// 다운로드 할 url 을 지정
var url = "http://jpub.tistory.com/";
// 저장할 위치를 지정
var savepath = "C:\\Dev\\crawl-web\\download_pages\\test.html";

// 사용 모듈 정의
var http = require('http'); //HTTP 모듈
var fs = require('fs'); // 파일처리 관련모듈

// 출력지정
var outfile = fs.createWriteStream(savepath);

// 비동기로 URL 의 파일 다운로드
http.get(url, function(res){
    res.pipe(outfile);
    res.on('end', function() {
        outfile.close();
        console.log("ok");
    });
});