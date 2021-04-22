angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);



function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

    toBuyList.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buyItem(itemIndex);
    };
}


function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBougthList = this;

    alreadyBougthList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}

function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItems = [
        { name: "Essar", quantity: 10 },
        { name: "Reliance", quantity: 2 },
        { name: "L&T", quantity: 6 },
        { name: "MRF", quantity: 4 },
        { name: "SBI", quantity: 7 }
    ];
    var alreadyBoughtItems = [];

    service.buyItem = function(itemIndex) {
        var item = toBuyItems[itemIndex];

        alreadyBoughtItems.push(item);
        toBuyItems.splice(itemIndex, 1);
    };

    service.getToBuyItems = function() {
        return toBuyItems;
    };

    service.getAlreadyBoughtItems = function() {
        return alreadyBoughtItems;
    };
}