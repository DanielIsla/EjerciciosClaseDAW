var i = 0;

while (i < 200) {
  window.open(
    "https://www.marca.com/",
    "indexWindow" + i, // nombre distinto
    "left=100,top=100,width=700,height=200,scrollbars=no,resizable=no,status=no"
  );
  i++;
}
