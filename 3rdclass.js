function per() {
    let std_Total_Marks = document.querySelector("#tm1").value;
    let std_Obtained_Marks = document.querySelector("#om1").value;
    res= (std_Obtained_Marks / std_Total_Marks) * 100;
    document.write("you have to got it" + res + "  %");
}