function del(r)
{
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tab").deleteRow(i);
}