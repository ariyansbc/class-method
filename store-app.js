
class Store {
    constructor(name) {
        this.name = name;
        this.items = [];
        this.prices= {};
        this.stock= {};
         this.totalSales = 0;
        //console.log(this.items);
    }
    isItemAvailable(name) {
        var itemIndex = this.items.indexOf(name);
        if(itemIndex == -1) {
            return false;
        }
        else {
            return true;
        }

    }
    getPrice(name) {
        var isAvailabe = this.isItemAvailable(name);
        if(isAvailabe == true) {
            var itemPrice = this.prices[name];
            return itemPrice;
        }
        else {

           return "Sorry. We don't have this item";
        }
    }
    
    getTotalSale() {
        return this.totalSales;
    }
    
    sellItem(name , quantity) {
        var available= this.stock[name]; 
        if(available < quantity) {
            return 'Sorry!, we do not have enough';
        }
        else {
            var itemPrice = this.getPrice(name);
            var currentSale = itemPrice * quantity;
            this.totalSales = this.totalSales + currentSale;
            var remaining = available - quantity;
            this.stock[name] = remaining;
            console.log("thanks for your purchase");
        }

    }
    addItem(name, quantity, price) {

        var isExisting = this.isItemAvailable(name);
        if(isExisting == true) {
            var available = this.stock[name];
            this.stock[name]=available + quantity; 
        }
        else {
            this.items.push(name);
            this.prices[name] = price;
            this.stock[name] = quantity;
        }
        

    }
    // showItem() {
    //     return this.items;
    // }
}
let jalalStore = new Store("Jalal's dream shop");
    jalalStore.addItem('shirt',40, 300);
    jalalStore.addItem('pant',20, 500);

    console.log(jalalStore.isItemAvailable('juta'));
    console.log(jalalStore.isItemAvailable('shirt'));
    
    jalalStore.addItem('juta',10, 200);

    console.log(jalalStore.isItemAvailable('juta'));

    console.log(jalalStore.getTotalSale());

    jalalStore.sellItem('juta',5);

    console.log(jalalStore.getTotalSale());

    jalalStore.sellItem('shirt',7);

    console.log(jalalStore.getTotalSale());
