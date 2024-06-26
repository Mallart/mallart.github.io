function InsertRowInTableBody(tbody, row_values_array)
{
    let _row = document.createElement("tr");
    for(let i = 0; i < row_values_array.length; ++i)
    {
        let _value = document.createElement("td");
        _value.textContent = row_values_array[i];
        _row.appendChild(_value);
    }
    tbody.appendChild(_row);
}

// row_values_array is an array of string arrays: first [0] 
// is the display name, second [1] the link
function InsertLinkInTableBody(tbody, row_values_array)
{
    let _row = document.createElement("tr");
    for(let i = 0; i < row_values_array.length; ++i)
    {
        let _value = document.createElement("td");
        if(row_values_array[i][1] != undefined && row_values_array[i][1].length > 1)
        {
            let _link = document.createElement("a");
            _link.classList.add("link");
            _link.setAttribute("href", row_values_array[i][1]);
            _link.textContent = row_values_array[i][0];
            _value.appendChild(_link);
        }
        else
        {
            _value.textContent = row_values_array[i];
        }
        _row.appendChild(_value);
    }
    tbody.appendChild(_row);
}