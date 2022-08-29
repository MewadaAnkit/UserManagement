var add = document.getElementById("add_user");
$(document).ready(function(e){   
  
 /* add.submit('click',function(event){
    alert("Data inserted successfully")
 })*/
$("#add_user").submit(function(event){
    alert("Data Inserted Successfully");
    
})


$("#update_user").submit(function(event){
    event.preventDefault();

    var uninde_arr = $(this).serializeArray();
    var data = {}
    $.map(uninde_arr,function(n,i){
        data[n['name']]= n['value'];
    })
    console.log(uninde_arr)

    const request = {
        "url":`http://localhost:3000/api/users/${data.id}`,
        "method":"PUT",
        "data":data
    }
    $.ajax(request).done(function(response){
        alert("Data updated Successfully");
    })
})

if(window.location.pathname == "/"){
    $ondelete = $('.table tbody td a.delete');
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        const request = {
            "url":`http://localhost:3000/api/users/${id}`,
            "method":"DELETE",
          
        }
        if(confirm("Do you want to delete data ")){
            $.ajax(request).done(function(response){
                alert("Data deleted successfully");
                location.reload()
            }) 
        }
        
    })
    
}

});