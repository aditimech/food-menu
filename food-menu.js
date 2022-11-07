window.onload = function() {
    let menu = {
        drinks : [
                   "Water", "Tea", "Sweet Tea", 
                   "Coke", "Dr. Pepper", "Sprite"
         ],
        entrees : [
                    "Hamburger w/ Fries", 
                    "Grilled Cheese w/ Tater Tots",
                    "Grilled Chicken w/ Veggies", 
                    "Chicken Fried Steak w/ Mashed Potatoes",
                    "Fried Shrimp w/ Coleslaw", 
                    "Veggie Plate"
        ],
        desserts: [
                   "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
         ]
        };

        let myMenu = menu;
        console.log(myMenu.drinks[1]);


        // declare html element
        let selectMenu = document.getElementById('foodMenu');
        console.log(`the select menu is ${selectMenu}`);
        let numOfItems = menu.length;
        console.log(`number of items in food menu ${numOfItems}`);
        for(let i = 0; i < numOfItems; i++) {
            let theOption = new Option(menu.drinks, menu.entrees, menu.desserts);
            foodMenu.appendChild(theOption);
            document.getElementById('foodMenu').appendChild(theOption);
           
           
        }
        console.log(menu.desserts);
        
}

