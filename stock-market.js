document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for updating stock data - in a real app,
    // this would come from a real-time data feed API.
   function updateStockData(){
        // Example: Simulate real-time updates
    setInterval(() => {
      updatePrice('stock-price-1',175 + (Math.random() - 0.5) * 2);
      updateChange('stock-change-1',(Math.random() - 0.5) * 2) ;

      updatePrice('stock-price-2',2700 + (Math.random() - 0.5) * 10) ;
      updateChange('stock-change-2',(Math.random() - 0.5) * 5) ;

      updatePrice('stock-price-3',450 + (Math.random() - 0.5) * 5);
      updateChange('stock-change-3',(Math.random() - 0.5) * 3) ;
     
      updatePrice('stock-price-4', 150 + (Math.random() - 0.5) * 1)
      updateChange('stock-change-4',(Math.random() - 0.5) * 0.5) ;

  }, 5000); // Update every 5 seconds
   }
   updateStockData()

    function updatePrice(elementId, newPrice) {
        const priceElement = document.getElementById(elementId);
        if (priceElement) {
            priceElement.textContent = newPrice.toFixed(2);
        }
    }
    function updateChange(elementId, changeValue){
         const changeElement = document.getElementById(elementId);
         if(changeElement){
            changeElement.textContent = changeValue.toFixed(2);
             changeElement.classList.add(changeValue >=0 ? 'positive':'negative')
              setTimeout(() => {
                changeElement.classList.remove('positive','negative')
              },1000);

         }
    }

});