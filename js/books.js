/* 书目注册表：新增一本书时，只需在下面数组里加一条，
 * 并新建对应数据文件 js/data/<id>-t1.js ... t4.js，
 * 每个文件往 window.IELTS_DATA_MAP 里注册即可。 */
window.IELTS_BOOKS = [
  { id: "c21", name: "Cambridge IELTS 21", short: "剑 21", module: "Academic", ready: true, tests: [
    { id: "c21-t1", label: "Test 1" },
    { id: "c21-t2", label: "Test 2" },
    { id: "c21-t3", label: "Test 3" },
    { id: "c21-t4", label: "Test 4" },
  ] },
  { id: "c20", name: "Cambridge IELTS 20", short: "剑 20", module: "Academic", ready: true, tests: [
    { id: "c20-t1", label: "Test 1" },
    { id: "c20-t2", label: "Test 2" },
    { id: "c20-t3", label: "Test 3" },
    { id: "c20-t4", label: "Test 4" },
  ] },
  { id: "c19", name: "Cambridge IELTS 19", short: "剑 19", module: "Academic", ready: true, tests: [
    { id: "c19-t1", label: "Test 1" },
    { id: "c19-t2", label: "Test 2" },
    { id: "c19-t3", label: "Test 3" },
    { id: "c19-t4", label: "Test 4" },
  ] },
  { id: "c18", name: "Cambridge IELTS 18", short: "剑 18", module: "Academic", ready: false, tests: [] },
  { id: "c17", name: "Cambridge IELTS 17", short: "剑 17", module: "Academic", ready: false, tests: [] },
  { id: "c16", name: "Cambridge IELTS 16", short: "剑 16", module: "Academic", ready: false, tests: [] },
  { id: "c15", name: "Cambridge IELTS 15", short: "剑 15", module: "Academic", ready: false, tests: [] },
];
