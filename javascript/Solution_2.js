const tasks = [
	{ id: 1, title: "Task 1", status: "completed", priority: "high" },
	{ id: 2, title: "Task 2", status: "pending", priority: "low" },
	{ id: 3, title: "Task 3", status: "completed", priority: "low" },
	{ id: 4, title: "Task 4", status: "in-progress", priority: "high" },
	{ id: 5, title: "Task 5", status: "pending", priority: "high" }
];
// Extend Array.prototype to group by multiple keys dynamically tasks.multiGroupBy(["status", "priority"]);
/* 
Ans: {
		"completed": {
				"high": [{ id: 1, title: "Task 1", status: "completed", priority: "high" }],
				"low": [{ id: 3, title: "Task 3", status: "completed", priority: "low" }]
		},
		"pending": {
				"low": [{ id: 2, ... }],
				"high": [{ id: 5, ... }]
		},
		"in-progress": {
				"high": [{ id: 4, ... }]
		}
}
*/

// First approach using recursive calls
Array.prototype.multiGroupBy = function(arr){
    if(arr.length === 0) return this;
    let grouped = this.reduce((acc, item) => {
        if(acc[item[arr[0]]]){
            acc[item[arr[0]]].push(item);
        } else {
            acc[item[arr[0]]] = [item];
        }
        return acc;
    }, {});

    for(let key in grouped){
        grouped[key] = grouped[key].multiGroupBy(arr.slice(1));
    };

    return grouped;
}

// Second improved approach using recursive calls to named IIFE
Array.prototype.multiGroupBy = function (arr) {
	let original = this;
	return (function _a(th = original, a = arr) {
		if (a.length === 0) return th;
		let grouped = th.reduce((acc, item) => {
			if (acc[item[a[0]]]) {
				acc[item[a[0]]].push(item);
			} else {
				acc[item[a[0]]] = [item];
			}
			return acc;
		}, {});

		for (let key in grouped){
			grouped[key] = _a(grouped[key], a.slice(1));
		};

		return grouped;
	})();
}

console.log(tasks.multiGroupBy(["status", "priority", "id"]));