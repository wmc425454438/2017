* 要求
``` js
// 输入
var entry = {
    a: {
        b: {
            c: {
                dd: 'abcdd'
            }
        },
        d: {
            xx: 'adxx'
        },
        e: 'ae'
    }
};

// 输出
{
    "a.b.c.dd": "abcdd",
    "a.d.xx": "adxx",
    "a.e": "ae"
}

```

递归思想，组合每个循环的key值
``` js
function flatObj(preKey, obj, result = {}) {
    if (JSON.stringify(obj) === '{}') {
        return {};
    }
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            const curKey = preKey ? `${preKey}.${key}` : key;
            if (typeof obj[key] !== 'object') {
                result[curKey] = obj[key];
            } else {
                flatObj(curKey, obj[key], result);
            }
        }
    }
    return result;
}

console.log(JSON.stringify(flatObj(null, entry), 0, 4));
```
