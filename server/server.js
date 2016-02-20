/// <reference path="../typings/main.d.ts" />
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var routes_1 = require('./routes');
var app = express();
var pathToNgPublic = __dirname + '/../ng-public';
var pathToNg2Public = __dirname + '/../ng2-public';
app.use(bodyParser.json());
app.use(cors());
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/shared', express.static(__dirname + '/../shared'));
app.use('/ng-app', express.static(pathToNgPublic + '/app'));
app.use('/ng2-app', express.static(pathToNg2Public + '/app'));
routes_1.router(app);
app.all('/ng-example*', function (req, res) {
    res.sendFile('index.html', { root: pathToNgPublic });
});
app.all('/ng2-example*', function (req, res) {
    res.sendFile('index.html', { root: pathToNg2Public });
});
app.all('/*', function (req, res) {
    res.sendFile('landing.html', { root: __dirname + '/..' });
});
app.listen('8787', function listener() {
    console.log('Express app listening at "http://localhost:8787/"');
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZlci50cyJdLCJuYW1lcyI6WyJsaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBRTdDLElBQU8sT0FBTyxXQUFXLFNBQVMsQ0FBQyxDQUFDO0FBQ3BDLElBQU8sVUFBVSxXQUFXLGFBQWEsQ0FBQyxDQUFDO0FBQzNDLElBQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLHVCQUF1QixVQUFVLENBQUMsQ0FBQTtBQUVsQyxJQUFJLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUNwQixJQUFJLGNBQWMsR0FBRyxTQUFTLEdBQUcsZUFBZSxDQUFDO0FBQ2pELElBQUksZUFBZSxHQUFHLFNBQVMsR0FBRyxnQkFBZ0IsQ0FBQztBQUduRCxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUdoQixHQUFHLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7QUFDekUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQztBQUU3RCxHQUFHLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDO0FBQzVELEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFHOUQsZUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBR1osR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNoQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBRSxjQUFjLEVBQUMsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUNqQyxHQUFHLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxFQUFDLElBQUksRUFBRSxlQUFlLEVBQUMsQ0FBQyxDQUFDO0FBQ3JELENBQUMsQ0FBQyxDQUFDO0FBQ0gsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLEVBQUUsR0FBRztJQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxFQUFDLElBQUksRUFBRSxTQUFTLEdBQUcsS0FBSyxFQUFDLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMsQ0FBQztBQUdILEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO0lBQ2xCQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxtREFBbURBLENBQUNBLENBQUNBO0FBQ2xFQSxDQUFDQSxDQUFDLENBQUMiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uL3R5cGluZ3MvbWFpbi5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xyXG5pbXBvcnQgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XHJcbmltcG9ydCBjb3JzID0gcmVxdWlyZSgnY29ycycpO1xyXG5cclxuaW1wb3J0IHsgcm91dGVyIH0gZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxubGV0IGFwcCA9IGV4cHJlc3MoKTtcclxubGV0IHBhdGhUb05nUHVibGljID0gX19kaXJuYW1lICsgJy8uLi9uZy1wdWJsaWMnO1xyXG5sZXQgcGF0aFRvTmcyUHVibGljID0gX19kaXJuYW1lICsgJy8uLi9uZzItcHVibGljJztcclxuXHJcblxyXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcclxuYXBwLnVzZShjb3JzKCkpO1xyXG5cclxuXHJcbmFwcC51c2UoJy9ub2RlX21vZHVsZXMnLCBleHByZXNzLnN0YXRpYyhfX2Rpcm5hbWUgKyAnLy4uL25vZGVfbW9kdWxlcycpKTtcclxuYXBwLnVzZSgnL3NoYXJlZCcsIGV4cHJlc3Muc3RhdGljKF9fZGlybmFtZSArICcvLi4vc2hhcmVkJykpO1xyXG5cclxuYXBwLnVzZSgnL25nLWFwcCcsIGV4cHJlc3Muc3RhdGljKHBhdGhUb05nUHVibGljICsgJy9hcHAnKSk7XHJcbmFwcC51c2UoJy9uZzItYXBwJywgZXhwcmVzcy5zdGF0aWMocGF0aFRvTmcyUHVibGljICsgJy9hcHAnKSk7XHJcblxyXG5cclxucm91dGVyKGFwcCk7XHJcblxyXG5cclxuYXBwLmFsbCgnL25nLWV4YW1wbGUqJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0cmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywge3Jvb3Q6IHBhdGhUb05nUHVibGljfSk7XHJcbn0pO1xyXG5hcHAuYWxsKCcvbmcyLWV4YW1wbGUqJywgKHJlcSwgcmVzKSA9PiB7XHJcblx0cmVzLnNlbmRGaWxlKCdpbmRleC5odG1sJywge3Jvb3Q6IHBhdGhUb05nMlB1YmxpY30pO1xyXG59KTtcclxuYXBwLmFsbCgnLyonLCAocmVxLCByZXMpID0+IHtcclxuXHRyZXMuc2VuZEZpbGUoJ2xhbmRpbmcuaHRtbCcsIHtyb290OiBfX2Rpcm5hbWUgKyAnLy4uJ30pO1xyXG59KTtcclxuXHJcblxyXG5hcHAubGlzdGVuKCc4Nzg3JywgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XHJcblx0Y29uc29sZS5sb2coJ0V4cHJlc3MgYXBwIGxpc3RlbmluZyBhdCBcImh0dHA6Ly9sb2NhbGhvc3Q6ODc4Ny9cIicpO1xyXG59KTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
