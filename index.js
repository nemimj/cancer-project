let saveFile = () => {

    // Get the data from each element on the form.
    const age = document.getElementById('age');
    const tBili = document.getElementById('tBili');
    const dBili = document.getElementById('dBili');
    const alkalinePhos = document.getElementById('alkalinePhos');
    const alkalineAmino = document.getElementById('alkalineAmino');
    const asperate = document.getElementById('asperate');
    const protein = document.getElementById('protein');
    const albumin = document.getElementById('albumin');
    const albAndGlob = document.getElementById('albAndGlob');

    // This variable stores all the data.
    // let data = 
    //     'Age: ' + age.value + ' \r\n ' + 
    //     'Total Bilirubin: ' + tBili.value + ' \r\n ' +
    //     'Direct Bilirubin: ' + dBili.value + ' \r\n ' +
    //     'Alkaline Phosphotase: ' + alkalinePhos.value + ' \r\n ' +
    //     'Alkaline Aminotransferase: ' + alkalineAmino.value + ' \r\n ' +
    //     'Asperate Aminotransferase: ' + asperate.value + ' \r\n ' +
    //     'Total Protein: ' + protein.value + ' \r\n ' +
    //     'Albumin: ' + albumin.value + ' \r\n ' +
    //     'Albumin and Globulin Ratio: ' + albAndGlob.value + ' \r\n ';
       
    let bio = "Age,Total Bilirubin,Direct Bilirubin,Alkaline Phosphotase,Alkaline Aminotransferase,Asperate Aminotransferase,Total Protein,Albumin,Albumin and Globulin Ratio"
    let data = `\n${age.value},${tBili.value},${dBili.value},${alkalinePhos.value},${alkalineAmino.value},${asperate.value},${protein.value},${albumin.value},${albAndGlob.value}`
    console.log(data)

    // Convert the text to BLOB.
    const textToBLOB = new Blob([bio,data], { type: 'text/plain' });
    const sFileName = 'formData.csv';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
      newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
      newLink.href = window.URL.createObjectURL(textToBLOB);
      newLink.style.display = "none";
      document.body.appendChild(newLink);
    }

    newLink.click(); 
  }