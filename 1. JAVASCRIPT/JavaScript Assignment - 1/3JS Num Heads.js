var arr = [0, 0, 1, 1, 1, 0, 0, 0, 0, 1];
arr["res"] = "heads";
var headCnt = 0, tailCnt = 0;

for(var i = 0; i < arr.length; i++) {
    if(arr["res"] === "heads")
        headCnt += arr[i];
    else
        tailCnt += arr[i];
}
document.write("Heads counts are: " +headCnt);
