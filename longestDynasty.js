const dynastyReign = [
    ["Thor Dynasty", "MXLI"],
    ["Odin Dynasty", "MCCCIIII"],
    ["Zues Dynasty", "MCCCXCVIII"],
    ["Loki Dynasty", "MCDXLV"],
    ["Hercules Dynasty", "MDCLXIV"],
    ["Aries Dynasty", "MCMXLIX"]
  ];
  
  console.log("Longest Dynasty:", longestDynasty(dynastyReign));

function longestDynasty(dynastyReign) {
    if (dynastyReign.length === 0) {
      return "No Data";
    }
  
    let longestReign = 0;
    let longestDynasty = "";
  
    for (let i = 0; i < dynastyReign.length; i++) {
      const [dynasty, year] = dynastyReign[i];
      const endYear = convertYear(year);
  
      if (endYear === "Invalid") {
        continue;
      }
  
      const reignLength = endYear - 1000 + 1;
  
      if (reignLength > longestReign) {
        longestReign = reignLength;
        longestDynasty = dynasty;
      }
    }
  
    return longestDynasty;
  }
  
  function convertYear(year) {
    // Mapping of Roman numerals to their integer values
    const romanToInteger = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = 0;
    let i = 0;
  
    while (i < year.length) {
      const currentSymbol = year[i];
      const nextSymbol = year[i + 1];
  
      if (nextSymbol !== undefined && romanToInteger[currentSymbol + nextSymbol]) {
        result += romanToInteger[currentSymbol + nextSymbol];
        i += 2;
      } else if (romanToInteger[currentSymbol]) {
        result += romanToInteger[currentSymbol];
        i += 1;
      } else {
        return "Invalid";
      }
    }
  
    return result;
  }

