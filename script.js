let strtbtn= document.querySelector('#strtbtn')
strtbtn.addEventListener('click',()=>{  
    navigator.bluetooth.getAvailability()
    .then(res=>{
        if (res==false){
            alert("no bluetooth")
            window.location.reload()
        }
        console.log(`RSSI test`);
        
        navigator.bluetooth.onadvertisementreceived = event => {
            const deviceAddress = event.device.address;
            const rssi = event.rssi;
            const data = event.manufacturerData;
          
            console.log(`Received advertisement from device ${deviceAddress}`);
            console.log(`RSSI: ${rssi}`);
            console.log(`Manufacturer data: ${data}`);
          };
          



    })
})