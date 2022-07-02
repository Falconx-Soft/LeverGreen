function dropDown1Change(){
    const dropdown1 = document.getElementById("dropdown1");
    if(dropdown1.value != ""){
        payload = {
            "id": dropdown1.value,
            "dropdown": "1",
        }
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "/dropdown", // production
            data: payload,
            timeout: 5000,
            success: function(data) {
                console.log("SUCCESS", data.drop_down_2_list)

                let newList = "<option value=''>----</option>"
                for(let i=0; i<data.drop_down_2_list.length; i++){
                    newList+="<option value='"+data.drop_down_2_list[i].id+"'>"+data.drop_down_2_list[i].name+"</option>";
                }
                document.getElementById("dropdown2").innerHTML = newList;
            },
            error: function(data) {
                console.error("ERROR...", data)
                alert("Something went wrong.")
            },
        });
    }
}

function dropDown2Change(){
    const dropdown1 = document.getElementById("dropdown1");
    if(dropdown1.value != ""){
        payload = {
            "id": dropdown1.value,
            "dropdown": "2",
        }
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "/dropdown", // production
            data: payload,
            timeout: 5000,
            success: function(data) {
                console.log("SUCCESS", data.drop_down_3_list)

                let newList = "<option value=''>----</option>"
                for(let i=0; i<data.drop_down_3_list.length; i++){
                    newList+="<option value='"+data.drop_down_3_list[i].id+"'>"+data.drop_down_3_list[i].name+"</option>";
                }
                document.getElementById("dropdown3").innerHTML = newList;
            },
            error: function(data) {
                console.error("ERROR...", data)
                alert("Something went wrong.")
            },
        });
    }
}

function dropDown3Change(){
    const dropdown1 = document.getElementById("dropdown1");
    const dropdown2 = document.getElementById("dropdown2");
    const dropdown3 = document.getElementById("dropdown3");
    if(dropdown3.value != ""){
        payload = {
            "dropdown1":dropdown1.value,
            "dropdown2":dropdown2.value,
            "dropdown3": dropdown3.value,
            "dropdown": "3",
        }
        $.ajax({
            type: 'GET',
            dataType: "json",
            url: "/dropdown", // production
            data: payload,
            timeout: 5000,
            success: function(data) {
                console.log("SUCCESS", data.data_attribute_table)
                let newList = "";
                if(data.table){
                    for(let i=0; i<data.data_attribute_table.length; i++){
                        newList += '<tr><td>'+data.data_attribute_table[i].entriesID+'</td><td>'+data.data_attribute_table[i].LMP+'</td><td>'+data.data_attribute_table[i].intervalIndex+'</td><td>'+data.data_attribute_table[i].timestamp+'</td><td>'+data.data_attribute_table[i].freq+'</td><td>'+data.data_attribute_table[i].market+'</td><td>'+data.data_attribute_table[i].baName+'</td><td>'+data.data_attribute_table[i].localTime+'</td><td>'+data.data_attribute_table[i].DST+'</td></tr>';
                    }

                    document.getElementById("table-body").innerHTML = newList;
                }else{
                    newList = "<p class='value-display'><b>"+document.getElementById("dropdown2").value+":</b> "+data.data_attribute_type+"</p>";
                    document.getElementById("dataAttributeDiv").innerHTML = newList;
                }
            },
            error: function(data) {
                console.error("ERROR...", data)
                alert("Data does not exist.")
            },
        });
    }
}