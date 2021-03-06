class clearItem {
    constructor() {
        this.table = document.getElementById('itemsList');
    }

    clear = () => {
        let arr = [];
        // Iterate over localStorage and insert the keys that meet the condition into arr
        for (let i = 0; i < localStorage.length; i++){
            if (localStorage.key(i).substring(0,4) == 'Item') {
                arr.push(localStorage.key(i));
            }
        }
        // Iterate and remove the items by key
        for (let i = 0; i < arr.length; i++) {
            localStorage.removeItem(arr[i]);
        }
        this.table.innerHTML = "";
    }
}

export {clearItem};