/**
 * Created by LSH on 2015/3/14.
 */
'use strict';

var fs = require("fs");
fs.writeFile("a.txt", "现在时间：" + (new Date()), null, function () {
    console.log("成功");
});
