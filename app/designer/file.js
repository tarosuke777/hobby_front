"use client";

export default function File() {
  const previewImage = function (e) {
    console.log("kita");
    console.log(e);
    console.log(e.traget);
    console.log(e.target.files[0]);
    console.log(URL.createObjectURL(e.target.files[0]));
    document.querySelector("#img").innerHTML +=
      '<img src="' + URL.createObjectURL(e.target.files[0]) + '" width="100" >';
  };
  return (
    <>
      <input type="file" name="image" onChange={previewImage} />
      <div id="img"></div>
    </>
  );
}
