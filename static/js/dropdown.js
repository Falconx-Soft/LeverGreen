function dropDown1Change(){
    const dropdown1 = document.getElementById("dropdown1");

    document.getElementById("dataAttributeDivTable").style.display = "none";
    document.getElementById("dataAttributeDivCard").style.display = "none";
    document.getElementById("error-div").style.display = "none";

    document.getElementById("dropdown2").value = "";
    document.getElementById("dropdown3").value = "";


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
    const dropdown2 = document.getElementById("dropdown2");
    document.getElementById("dataAttributeDivTable").style.display = "none";
    document.getElementById("dataAttributeDivCard").style.display = "none";
    document.getElementById("error-div").style.display = "none";
    if(dropdown2.value != ""){
        payload = {
            "id": dropdown2.value,
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
    document.getElementById("error-div").style.display = "none";
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
                console.log("SUCCESS",data)
                let newList = '';
                var t = $('#footer-search').DataTable();
                if(data.table){
                    t.clear().draw();
                    for(let i=0; i<data.data_attribute_table.length; i++){
                        t.row.add([data.data_attribute_table[i].entriesID, data.data_attribute_table[i].LMP, data.data_attribute_table[i].intervalIndex,data.data_attribute_table[i].timestamp,data.data_attribute_table[i].freq, data.data_attribute_table[i].market, data.data_attribute_table[i].baName, data.data_attribute_table[i].localTime, data.data_attribute_table[i].DST]).draw(false);
                    }
                    document.getElementById("dataAttributeDivTable").style.display = "-webkit-inline-box";
                    document.getElementById("dataAttributeDivCard").style.display = "none";
                }else if(data.all_attributes_list){
                    newList = "";
                    console.log("Here");
                    for(let i=0; i<data.all_attributes_list.length; i++){
                        newList += "<p class='value-display'><b>"+data.all_attributes_list[i]+"</p>";
                    }
                    document.getElementById("dataAttributeDivCard").innerHTML = newList;

                    document.getElementById("dataAttributeDivTable").style.display = "none";
                    document.getElementById("dataAttributeDivCard").style.display = "block";
                }else{
                    newList = "<p class='value-display'><b>"+document.getElementById("dropdown2").value+":</b> "+data.data_attribute_type+"</p>";
                    document.getElementById("dataAttributeDivCard").innerHTML = newList;

                    document.getElementById("dataAttributeDivTable").style.display = "none";
                    document.getElementById("dataAttributeDivCard").style.display = "block";
                }
            },
            error: function(data) {
                console.error("ERROR...", data);
                document.getElementById("error-div").style.display = "block";
            },
        });
    }
}