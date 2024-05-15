let price = 12;
const change_due = document.getElementById('change-due');
function purchase(){
    let cash = document.getElementById('cash').value;

    if(cash<price){
        alert('Customer does not have enough money to purchase the item');
    } else if(cash==price){
        change_due.value = "No change due - customer paid with exact cash";
    }
}