var _a;
import "./modulepreload-polyfill-DaKOjhqt.js";
/* empty css              */
import * as d3 from "https://cdn.jsdelivr.net/npm/d3@7/+esm";
const yearlyTotalsStack = [
  {
    year: "1990",
    sector: "other_fuel",
    value: 76985e4
  },
  {
    year: "1990",
    sector: "bunker_fuel",
    value: 635700030
  },
  {
    year: "1990",
    sector: "waste",
    value: 13644e5
  },
  {
    year: "1990",
    sector: "buildings",
    value: 2880919800
  },
  {
    year: "1990",
    sector: "industry",
    value: 100276e4
  },
  {
    year: "1990",
    sector: "fugitive",
    value: 228097e4
  },
  {
    year: "1990",
    sector: "agriculture",
    value: 497893e4
  },
  {
    year: "1990",
    sector: "manufacturing_construction",
    value: 398038e4
  },
  {
    year: "1990",
    sector: "transport",
    value: 472631e4
  },
  {
    year: "1990",
    sector: "electricity_heat",
    value: 864545e4
  },
  {
    year: "1991",
    sector: "other_fuel",
    value: 770789950
  },
  {
    year: "1991",
    sector: "bunker_fuel",
    value: 64345e4
  },
  {
    year: "1991",
    sector: "waste",
    value: 139518e4
  },
  {
    year: "1991",
    sector: "buildings",
    value: 290664e4
  },
  {
    year: "1991",
    sector: "industry",
    value: 100748e4
  },
  {
    year: "1991",
    sector: "fugitive",
    value: 230096e4
  },
  {
    year: "1991",
    sector: "agriculture",
    value: 496892e4
  },
  {
    year: "1991",
    sector: "manufacturing_construction",
    value: 390286e4
  },
  {
    year: "1991",
    sector: "transport",
    value: 47645e5
  },
  {
    year: "1991",
    sector: "electricity_heat",
    value: 878672e4
  },
  {
    year: "1992",
    sector: "other_fuel",
    value: 6859e5
  },
  {
    year: "1992",
    sector: "bunker_fuel",
    value: 68074e4
  },
  {
    year: "1992",
    sector: "waste",
    value: 1418280100
  },
  {
    year: "1992",
    sector: "buildings",
    value: 279552e4
  },
  {
    year: "1992",
    sector: "industry",
    value: 102292e4
  },
  {
    year: "1992",
    sector: "fugitive",
    value: 224549e4
  },
  {
    year: "1992",
    sector: "agriculture",
    value: 49484e5
  },
  {
    year: "1992",
    sector: "manufacturing_construction",
    value: 376996e4
  },
  {
    year: "1992",
    sector: "transport",
    value: 487173e4
  },
  {
    year: "1992",
    sector: "electricity_heat",
    value: 894656e4
  },
  {
    year: "1993",
    sector: "other_fuel",
    value: 698e6
  },
  {
    year: "1993",
    sector: "bunker_fuel",
    value: 67293e4
  },
  {
    year: "1993",
    sector: "waste",
    value: 144439e4
  },
  {
    year: "1993",
    sector: "buildings",
    value: 286207e4
  },
  {
    year: "1993",
    sector: "industry",
    value: 1039530050
  },
  {
    year: "1993",
    sector: "fugitive",
    value: 226161e4
  },
  {
    year: "1993",
    sector: "agriculture",
    value: 49179e5
  },
  {
    year: "1993",
    sector: "manufacturing_construction",
    value: 372021e4
  },
  {
    year: "1993",
    sector: "transport",
    value: 491437e4
  },
  {
    year: "1993",
    sector: "electricity_heat",
    value: 899423e4
  },
  {
    year: "1994",
    sector: "other_fuel",
    value: 66922e4
  },
  {
    year: "1994",
    sector: "bunker_fuel",
    value: 69885e4
  },
  {
    year: "1994",
    sector: "waste",
    value: 147096e4
  },
  {
    year: "1994",
    sector: "buildings",
    value: 277535e4
  },
  {
    year: "1994",
    sector: "industry",
    value: 1147930100
  },
  {
    year: "1994",
    sector: "fugitive",
    value: 2264919800
  },
  {
    year: "1994",
    sector: "agriculture",
    value: 496066e4
  },
  {
    year: "1994",
    sector: "manufacturing_construction",
    value: 3737320200
  },
  {
    year: "1994",
    sector: "transport",
    value: 5011810300
  },
  {
    year: "1994",
    sector: "electricity_heat",
    value: 909303e4
  },
  {
    year: "1995",
    sector: "other_fuel",
    value: 6199e5
  },
  {
    year: "1995",
    sector: "bunker_fuel",
    value: 72493e4
  },
  {
    year: "1995",
    sector: "waste",
    value: 147651e4
  },
  {
    year: "1995",
    sector: "buildings",
    value: 285311e4
  },
  {
    year: "1995",
    sector: "industry",
    value: 122088e4
  },
  {
    year: "1995",
    sector: "fugitive",
    value: 233992e4
  },
  {
    year: "1995",
    sector: "agriculture",
    value: 501577e4
  },
  {
    year: "1995",
    sector: "manufacturing_construction",
    value: 396509e4
  },
  {
    year: "1995",
    sector: "transport",
    value: 514976e4
  },
  {
    year: "1995",
    sector: "electricity_heat",
    value: 928278e4
  },
  {
    year: "1996",
    sector: "other_fuel",
    value: 54675e4
  },
  {
    year: "1996",
    sector: "bunker_fuel",
    value: 74545e4
  },
  {
    year: "1996",
    sector: "waste",
    value: 147831e4
  },
  {
    year: "1996",
    sector: "buildings",
    value: 2916429800
  },
  {
    year: "1996",
    sector: "industry",
    value: 1272439900
  },
  {
    year: "1996",
    sector: "fugitive",
    value: 2412550100
  },
  {
    year: "1996",
    sector: "agriculture",
    value: 504265e4
  },
  {
    year: "1996",
    sector: "manufacturing_construction",
    value: 385491e4
  },
  {
    year: "1996",
    sector: "transport",
    value: 5359259600
  },
  {
    year: "1996",
    sector: "electricity_heat",
    value: 964067e4
  },
  {
    year: "1997",
    sector: "other_fuel",
    value: 59582e4
  },
  {
    year: "1997",
    sector: "bunker_fuel",
    value: 77111e4
  },
  {
    year: "1997",
    sector: "waste",
    value: 1474359900
  },
  {
    year: "1997",
    sector: "buildings",
    value: 289755e4
  },
  {
    year: "1997",
    sector: "industry",
    value: 1321719900
  },
  {
    year: "1997",
    sector: "fugitive",
    value: 2423e6
  },
  {
    year: "1997",
    sector: "agriculture",
    value: 497212e4
  },
  {
    year: "1997",
    sector: "manufacturing_construction",
    value: 388097e4
  },
  {
    year: "1997",
    sector: "transport",
    value: 543717e4
  },
  {
    year: "1997",
    sector: "electricity_heat",
    value: 991575e4
  },
  {
    year: "1998",
    sector: "other_fuel",
    value: 572e6
  },
  {
    year: "1998",
    sector: "bunker_fuel",
    value: 79531e4
  },
  {
    year: "1998",
    sector: "waste",
    value: 1466280100
  },
  {
    year: "1998",
    sector: "buildings",
    value: 274317e4
  },
  {
    year: "1998",
    sector: "industry",
    value: 1325969900
  },
  {
    year: "1998",
    sector: "fugitive",
    value: 241553e4
  },
  {
    year: "1998",
    sector: "agriculture",
    value: 502744e4
  },
  {
    year: "1998",
    sector: "manufacturing_construction",
    value: 388114e4
  },
  {
    year: "1998",
    sector: "transport",
    value: 556329e4
  },
  {
    year: "1998",
    sector: "electricity_heat",
    value: 101401e5
  },
  {
    year: "1999",
    sector: "other_fuel",
    value: 58108e4
  },
  {
    year: "1999",
    sector: "bunker_fuel",
    value: 836789950
  },
  {
    year: "1999",
    sector: "waste",
    value: 146447e4
  },
  {
    year: "1999",
    sector: "buildings",
    value: 281551e4
  },
  {
    year: "1999",
    sector: "industry",
    value: 133472e4
  },
  {
    year: "1999",
    sector: "fugitive",
    value: 240206e4
  },
  {
    year: "1999",
    sector: "agriculture",
    value: 508351e4
  },
  {
    year: "1999",
    sector: "manufacturing_construction",
    value: 37242e5
  },
  {
    year: "1999",
    sector: "transport",
    value: 572691e4
  },
  {
    year: "1999",
    sector: "electricity_heat",
    value: 1019696e4
  },
  {
    year: "2000",
    sector: "other_fuel",
    value: 521469980
  },
  {
    year: "2000",
    sector: "bunker_fuel",
    value: 862330050
  },
  {
    year: "2000",
    sector: "waste",
    value: 1466760100
  },
  {
    year: "2000",
    sector: "buildings",
    value: 2807120100
  },
  {
    year: "2000",
    sector: "industry",
    value: 1393640100
  },
  {
    year: "2000",
    sector: "fugitive",
    value: 2520419800
  },
  {
    year: "2000",
    sector: "agriculture",
    value: 5078729700
  },
  {
    year: "2000",
    sector: "manufacturing_construction",
    value: 390018e4
  },
  {
    year: "2000",
    sector: "transport",
    value: 591146e4
  },
  {
    year: "2000",
    sector: "electricity_heat",
    value: 1060854e4
  },
  {
    year: "2001",
    sector: "other_fuel",
    value: 533020030
  },
  {
    year: "2001",
    sector: "bunker_fuel",
    value: 83037e4
  },
  {
    year: "2001",
    sector: "waste",
    value: 1452910100
  },
  {
    year: "2001",
    sector: "buildings",
    value: 282958e4
  },
  {
    year: "2001",
    sector: "industry",
    value: 141863e4
  },
  {
    year: "2001",
    sector: "fugitive",
    value: 254305e4
  },
  {
    year: "2001",
    sector: "agriculture",
    value: 508833e4
  },
  {
    year: "2001",
    sector: "manufacturing_construction",
    value: 392286e4
  },
  {
    year: "2001",
    sector: "transport",
    value: 594219e4
  },
  {
    year: "2001",
    sector: "electricity_heat",
    value: 1086288e4
  },
  {
    year: "2002",
    sector: "other_fuel",
    value: 53461e4
  },
  {
    year: "2002",
    sector: "bunker_fuel",
    value: 86941e4
  },
  {
    year: "2002",
    sector: "waste",
    value: 1447969900
  },
  {
    year: "2002",
    sector: "buildings",
    value: 282979e4
  },
  {
    year: "2002",
    sector: "industry",
    value: 147102e4
  },
  {
    year: "2002",
    sector: "fugitive",
    value: 252226e4
  },
  {
    year: "2002",
    sector: "agriculture",
    value: 514752e4
  },
  {
    year: "2002",
    sector: "manufacturing_construction",
    value: 3917689900
  },
  {
    year: "2002",
    sector: "transport",
    value: 609811e4
  },
  {
    year: "2002",
    sector: "electricity_heat",
    value: 110498e5
  },
  {
    year: "2003",
    sector: "other_fuel",
    value: 55388e4
  },
  {
    year: "2003",
    sector: "bunker_fuel",
    value: 87517e4
  },
  {
    year: "2003",
    sector: "waste",
    value: 144366e4
  },
  {
    year: "2003",
    sector: "buildings",
    value: 291763e4
  },
  {
    year: "2003",
    sector: "industry",
    value: 156471e4
  },
  {
    year: "2003",
    sector: "fugitive",
    value: 269244e4
  },
  {
    year: "2003",
    sector: "agriculture",
    value: 5143160300
  },
  {
    year: "2003",
    sector: "manufacturing_construction",
    value: 410534e4
  },
  {
    year: "2003",
    sector: "transport",
    value: 622604e4
  },
  {
    year: "2003",
    sector: "electricity_heat",
    value: 116687e5
  },
  {
    year: "2004",
    sector: "other_fuel",
    value: 58925e4
  },
  {
    year: "2004",
    sector: "bunker_fuel",
    value: 95476e4
  },
  {
    year: "2004",
    sector: "waste",
    value: 1431880100
  },
  {
    year: "2004",
    sector: "buildings",
    value: 2959870200
  },
  {
    year: "2004",
    sector: "industry",
    value: 164595e4
  },
  {
    year: "2004",
    sector: "fugitive",
    value: 2797689900
  },
  {
    year: "2004",
    sector: "agriculture",
    value: 525346e4
  },
  {
    year: "2004",
    sector: "manufacturing_construction",
    value: 453992e4
  },
  {
    year: "2004",
    sector: "transport",
    value: 651437e4
  },
  {
    year: "2004",
    sector: "electricity_heat",
    value: 120573e5
  },
  {
    year: "2005",
    sector: "other_fuel",
    value: 61037e4
  },
  {
    year: "2005",
    sector: "bunker_fuel",
    value: 99941e4
  },
  {
    year: "2005",
    sector: "waste",
    value: 1422660100
  },
  {
    year: "2005",
    sector: "buildings",
    value: 296048e4
  },
  {
    year: "2005",
    sector: "industry",
    value: 174217e4
  },
  {
    year: "2005",
    sector: "fugitive",
    value: 292105e4
  },
  {
    year: "2005",
    sector: "agriculture",
    value: 5289100300
  },
  {
    year: "2005",
    sector: "manufacturing_construction",
    value: 4960259600
  },
  {
    year: "2005",
    sector: "transport",
    value: 6658419700
  },
  {
    year: "2005",
    sector: "electricity_heat",
    value: 1243917e4
  },
  {
    year: "2006",
    sector: "other_fuel",
    value: 6198e5
  },
  {
    year: "2006",
    sector: "bunker_fuel",
    value: 105251e4
  },
  {
    year: "2006",
    sector: "waste",
    value: 143385e4
  },
  {
    year: "2006",
    sector: "buildings",
    value: 293121e4
  },
  {
    year: "2006",
    sector: "industry",
    value: 187386e4
  },
  {
    year: "2006",
    sector: "fugitive",
    value: 296474e4
  },
  {
    year: "2006",
    sector: "agriculture",
    value: 534968e4
  },
  {
    year: "2006",
    sector: "manufacturing_construction",
    value: 520595e4
  },
  {
    year: "2006",
    sector: "transport",
    value: 681443e4
  },
  {
    year: "2006",
    sector: "electricity_heat",
    value: 1293538e4
  },
  {
    year: "2007",
    sector: "other_fuel",
    value: 62219e4
  },
  {
    year: "2007",
    sector: "bunker_fuel",
    value: 1102920100
  },
  {
    year: "2007",
    sector: "waste",
    value: 144186e4
  },
  {
    year: "2007",
    sector: "buildings",
    value: 2926969900
  },
  {
    year: "2007",
    sector: "industry",
    value: 200198e4
  },
  {
    year: "2007",
    sector: "fugitive",
    value: 3009899800
  },
  {
    year: "2007",
    sector: "agriculture",
    value: 542793e4
  },
  {
    year: "2007",
    sector: "manufacturing_construction",
    value: 548078e4
  },
  {
    year: "2007",
    sector: "transport",
    value: 702697e4
  },
  {
    year: "2007",
    sector: "electricity_heat",
    value: 1350346e4
  },
  {
    year: "2008",
    sector: "other_fuel",
    value: 62976e4
  },
  {
    year: "2008",
    sector: "bunker_fuel",
    value: 111192e4
  },
  {
    year: "2008",
    sector: "waste",
    value: 144693e4
  },
  {
    year: "2008",
    sector: "buildings",
    value: 299189e4
  },
  {
    year: "2008",
    sector: "industry",
    value: 204587e4
  },
  {
    year: "2008",
    sector: "fugitive",
    value: 304062e4
  },
  {
    year: "2008",
    sector: "agriculture",
    value: 5434779600
  },
  {
    year: "2008",
    sector: "manufacturing_construction",
    value: 559518e4
  },
  {
    year: "2008",
    sector: "transport",
    value: 703221e4
  },
  {
    year: "2008",
    sector: "electricity_heat",
    value: 1352768e4
  },
  {
    year: "2009",
    sector: "other_fuel",
    value: 6178e5
  },
  {
    year: "2009",
    sector: "bunker_fuel",
    value: 1058810050
  },
  {
    year: "2009",
    sector: "waste",
    value: 145429e4
  },
  {
    year: "2009",
    sector: "buildings",
    value: 293877e4
  },
  {
    year: "2009",
    sector: "industry",
    value: 209261e4
  },
  {
    year: "2009",
    sector: "fugitive",
    value: 29844e5
  },
  {
    year: "2009",
    sector: "agriculture",
    value: 5433629700
  },
  {
    year: "2009",
    sector: "manufacturing_construction",
    value: 55774e5
  },
  {
    year: "2009",
    sector: "transport",
    value: 689154e4
  },
  {
    year: "2009",
    sector: "electricity_heat",
    value: 13317599e3
  },
  {
    year: "2010",
    sector: "other_fuel",
    value: 63325e4
  },
  {
    year: "2010",
    sector: "bunker_fuel",
    value: 1132180100
  },
  {
    year: "2010",
    sector: "waste",
    value: 146513e4
  },
  {
    year: "2010",
    sector: "buildings",
    value: 299385e4
  },
  {
    year: "2010",
    sector: "industry",
    value: 2228909800
  },
  {
    year: "2010",
    sector: "fugitive",
    value: 309834e4
  },
  {
    year: "2010",
    sector: "agriculture",
    value: 549346e4
  },
  {
    year: "2010",
    sector: "manufacturing_construction",
    value: 6123009500
  },
  {
    year: "2010",
    sector: "transport",
    value: 718597e4
  },
  {
    year: "2010",
    sector: "electricity_heat",
    value: 1422097e4
  },
  {
    year: "2011",
    sector: "other_fuel",
    value: 61824e4
  },
  {
    year: "2011",
    sector: "bunker_fuel",
    value: 114703e4
  },
  {
    year: "2011",
    sector: "waste",
    value: 1467310100
  },
  {
    year: "2011",
    sector: "buildings",
    value: 293759e4
  },
  {
    year: "2011",
    sector: "industry",
    value: 238064e4
  },
  {
    year: "2011",
    sector: "fugitive",
    value: 319639e4
  },
  {
    year: "2011",
    sector: "agriculture",
    value: 562586e4
  },
  {
    year: "2011",
    sector: "manufacturing_construction",
    value: 635439e4
  },
  {
    year: "2011",
    sector: "transport",
    value: 730411e4
  },
  {
    year: "2011",
    sector: "electricity_heat",
    value: 1483037e4
  },
  {
    year: "2012",
    sector: "other_fuel",
    value: 6415e5
  },
  {
    year: "2012",
    sector: "bunker_fuel",
    value: 110169e4
  },
  {
    year: "2012",
    sector: "waste",
    value: 147663e4
  },
  {
    year: "2012",
    sector: "buildings",
    value: 28797e5
  },
  {
    year: "2012",
    sector: "industry",
    value: 246349e4
  },
  {
    year: "2012",
    sector: "fugitive",
    value: 324909e4
  },
  {
    year: "2012",
    sector: "agriculture",
    value: 564832e4
  },
  {
    year: "2012",
    sector: "manufacturing_construction",
    value: 63762e5
  },
  {
    year: "2012",
    sector: "transport",
    value: 736586e4
  },
  {
    year: "2012",
    sector: "electricity_heat",
    value: 151296e5
  },
  {
    year: "2013",
    sector: "other_fuel",
    value: 64932e4
  },
  {
    year: "2013",
    sector: "bunker_fuel",
    value: 110736e4
  },
  {
    year: "2013",
    sector: "waste",
    value: 1484040100
  },
  {
    year: "2013",
    sector: "buildings",
    value: 299245e4
  },
  {
    year: "2013",
    sector: "industry",
    value: 257695e4
  },
  {
    year: "2013",
    sector: "fugitive",
    value: 3265379800
  },
  {
    year: "2013",
    sector: "agriculture",
    value: 558769e4
  },
  {
    year: "2013",
    sector: "manufacturing_construction",
    value: 640311e4
  },
  {
    year: "2013",
    sector: "transport",
    value: 755924e4
  },
  {
    year: "2013",
    sector: "electricity_heat",
    value: 1540402e4
  },
  {
    year: "2014",
    sector: "other_fuel",
    value: 644340030
  },
  {
    year: "2014",
    sector: "bunker_fuel",
    value: 114416e4
  },
  {
    year: "2014",
    sector: "waste",
    value: 151426e4
  },
  {
    year: "2014",
    sector: "buildings",
    value: 293896e4
  },
  {
    year: "2014",
    sector: "industry",
    value: 269979e4
  },
  {
    year: "2014",
    sector: "fugitive",
    value: 329639e4
  },
  {
    year: "2014",
    sector: "agriculture",
    value: 563852e4
  },
  {
    year: "2014",
    sector: "manufacturing_construction",
    value: 646979e4
  },
  {
    year: "2014",
    sector: "transport",
    value: 768672e4
  },
  {
    year: "2014",
    sector: "electricity_heat",
    value: 1534721e4
  },
  {
    year: "2015",
    sector: "other_fuel",
    value: 64375e4
  },
  {
    year: "2015",
    sector: "bunker_fuel",
    value: 1199790100
  },
  {
    year: "2015",
    sector: "waste",
    value: 154359e4
  },
  {
    year: "2015",
    sector: "buildings",
    value: 296223e4
  },
  {
    year: "2015",
    sector: "industry",
    value: 269299e4
  },
  {
    year: "2015",
    sector: "fugitive",
    value: 328864e4
  },
  {
    year: "2015",
    sector: "agriculture",
    value: 5662319600
  },
  {
    year: "2015",
    sector: "manufacturing_construction",
    value: 6330470400
  },
  {
    year: "2015",
    sector: "transport",
    value: 792713e4
  },
  {
    year: "2015",
    sector: "electricity_heat",
    value: 15084469e3
  },
  {
    year: "2016",
    sector: "other_fuel",
    value: 63715e4
  },
  {
    year: "2016",
    sector: "bunker_fuel",
    value: 1239310100
  },
  {
    year: "2016",
    sector: "waste",
    value: 1560849900
  },
  {
    year: "2016",
    sector: "buildings",
    value: 300098e4
  },
  {
    year: "2016",
    sector: "industry",
    value: 2789840100
  },
  {
    year: "2016",
    sector: "fugitive",
    value: 325483e4
  },
  {
    year: "2016",
    sector: "agriculture",
    value: 569838e4
  },
  {
    year: "2016",
    sector: "manufacturing_construction",
    value: 617375e4
  },
  {
    year: "2016",
    sector: "transport",
    value: 8078259700
  },
  {
    year: "2016",
    sector: "electricity_heat",
    value: 1509404e4
  },
  {
    year: "2017",
    sector: "other_fuel",
    value: 63925e4
  },
  {
    year: "2017",
    sector: "bunker_fuel",
    value: 130136e4
  },
  {
    year: "2017",
    sector: "waste",
    value: 158386e4
  },
  {
    year: "2017",
    sector: "buildings",
    value: 306772e4
  },
  {
    year: "2017",
    sector: "industry",
    value: 285825e4
  },
  {
    year: "2017",
    sector: "fugitive",
    value: 32768e5
  },
  {
    year: "2017",
    sector: "agriculture",
    value: 578858e4
  },
  {
    year: "2017",
    sector: "manufacturing_construction",
    value: 6110200300
  },
  {
    year: "2017",
    sector: "transport",
    value: 828172e4
  },
  {
    year: "2017",
    sector: "electricity_heat",
    value: 1542882e4
  },
  {
    year: "2018",
    sector: "other_fuel",
    value: 624020030
  },
  {
    year: "2018",
    sector: "bunker_fuel",
    value: 133014e4
  },
  {
    year: "2018",
    sector: "waste",
    value: 160686e4
  },
  {
    year: "2018",
    sector: "buildings",
    value: 310111e4
  },
  {
    year: "2018",
    sector: "industry",
    value: 296721e4
  },
  {
    year: "2018",
    sector: "fugitive",
    value: 337153e4
  },
  {
    year: "2018",
    sector: "agriculture",
    value: 578868e4
  },
  {
    year: "2018",
    sector: "manufacturing_construction",
    value: 624898e4
  },
  {
    year: "2018",
    sector: "transport",
    value: 8480910300
  },
  {
    year: "2018",
    sector: "electricity_heat",
    value: 15880509e3
  },
  {
    year: "2019",
    sector: "other_fuel",
    value: 59688e4
  },
  {
    year: "2019",
    sector: "bunker_fuel",
    value: 132451e4
  },
  {
    year: "2019",
    sector: "waste",
    value: 162987e4
  },
  {
    year: "2019",
    sector: "buildings",
    value: 3040909800
  },
  {
    year: "2019",
    sector: "industry",
    value: 30642e5
  },
  {
    year: "2019",
    sector: "fugitive",
    value: 342096e4
  },
  {
    year: "2019",
    sector: "agriculture",
    value: 578342e4
  },
  {
    year: "2019",
    sector: "manufacturing_construction",
    value: 625265e4
  },
  {
    year: "2019",
    sector: "transport",
    value: 8480769500
  },
  {
    year: "2019",
    sector: "electricity_heat",
    value: 1581997e4
  },
  {
    year: "2020",
    sector: "other_fuel",
    value: 57905e4
  },
  {
    year: "2020",
    sector: "bunker_fuel",
    value: 93814e4
  },
  {
    year: "2020",
    sector: "waste",
    value: 165287e4
  },
  {
    year: "2020",
    sector: "buildings",
    value: 298052e4
  },
  {
    year: "2020",
    sector: "industry",
    value: 312693e4
  },
  {
    year: "2020",
    sector: "fugitive",
    value: 322369e4
  },
  {
    year: "2020",
    sector: "agriculture",
    value: 5865470500
  },
  {
    year: "2020",
    sector: "manufacturing_construction",
    value: 622302e4
  },
  {
    year: "2020",
    sector: "transport",
    value: 7288009700
  },
  {
    year: "2020",
    sector: "electricity_heat",
    value: 1518135e4
  }
];
const yearlyTotals = {
  "1990": {
    other_fuel: 766480000235e-3,
    bunker_fuel: 62183501449e-2,
    waste: 1364190002825e-3,
    buildings: 287199990986e-2,
    industry: 9670400000550001e-7,
    fugitive: 21846449899e-1,
    agriculture: 4974870011995e-3,
    manufacturing_construction: 39629700043199997e-7,
    transport: 439427494901e-2,
    electricity_heat: 85992198906e-1
  },
  "1991": {
    other_fuel: 767504974985e-3,
    bunker_fuel: 630195000445e-3,
    waste: 139493000009e-2,
    buildings: 2897694999075e-3,
    industry: 97344999969e-2,
    fugitive: 220897998999e-2,
    agriculture: 4964829978745e-3,
    manufacturing_construction: 388484001523e-2,
    transport: 4427290050005e-3,
    electricity_heat: 8735795000735e-3
  },
  "1992": {
    other_fuel: 683045000145e-3,
    bunker_fuel: 665224999535e-3,
    waste: 14180400520900002e-7,
    buildings: 278660500095e-2,
    industry: 1017384999945e-3,
    fugitive: 2191140001,
    agriculture: 494442500091e-2,
    manufacturing_construction: 375045500233e-2,
    transport: 451391500049e-2,
    electricity_heat: 8892604905474998e-6
  },
  "1993": {
    other_fuel: 69531999898e-2,
    bunker_fuel: 656840004915e-3,
    waste: 144412999773e-2,
    buildings: 28533799999700003e-7,
    industry: 10333500252950001e-7,
    fugitive: 2212360000985e-3,
    agriculture: 4913970001514999e-6,
    manufacturing_construction: 370102003374e-2,
    transport: 455898500517e-2,
    electricity_heat: 89357851195e-1
  },
  "1994": {
    other_fuel: 666024999925e-3,
    bunker_fuel: 681324999985e-3,
    waste: 1470734999655e-3,
    buildings: 276626499941e-2,
    industry: 1141970049705e-3,
    fugitive: 2218934908,
    agriculture: 4956629989495e-3,
    manufacturing_construction: 37174701149849997e-7,
    transport: 464210015074e-2,
    electricity_heat: 9036259989575e-3
  },
  "1995": {
    other_fuel: 616975000495e-3,
    bunker_fuel: 70527499998e-2,
    waste: 14762600014650002e-7,
    buildings: 2844099997385e-3,
    industry: 1214985000205e-3,
    fugitive: 229521498045e-2,
    agriculture: 501179498843e-2,
    manufacturing_construction: 394480999971e-2,
    transport: 4766634985025001e-6,
    electricity_heat: 922212499195e-2
  },
  "1996": {
    other_fuel: 54399499937e-2,
    bunker_fuel: 725464999955e-3,
    waste: 14780450000349998e-7,
    buildings: 290684491395e-2,
    industry: 12666549498000002e-7,
    fugitive: 237058504994e-2,
    agriculture: 5038609985795e-3,
    manufacturing_construction: 3834199997565e-3,
    transport: 4965399790175e-3,
    electricity_heat: 9578159997955e-3
  },
  "1997": {
    other_fuel: 59291999999e-2,
    bunker_fuel: 75009499872e-2,
    waste: 1474084949875e-3,
    buildings: 2888299999985e-3,
    industry: 1315989949935e-3,
    fugitive: 23814850001400003e-7,
    agriculture: 496800496497e-2,
    manufacturing_construction: 3859164989965e-3,
    transport: 5030035011475e-3,
    electricity_heat: 984686999793e-2
  },
  "1998": {
    other_fuel: 569409999995e-3,
    bunker_fuel: 772080000145e-3,
    waste: 1466035049535e-3,
    buildings: 273353499949e-2,
    industry: 1320639950195e-3,
    fugitive: 237791e4,
    agriculture: 5023579965445e-3,
    manufacturing_construction: 38582549800199995e-7,
    transport: 514098501008e-2,
    electricity_heat: 1006557996318e-2
  },
  "1999": {
    other_fuel: 57864999974e-2,
    bunker_fuel: 81084997486e-2,
    waste: 1464210000165e-3,
    buildings: 280505999249e-2,
    industry: 1329794999955e-3,
    fugitive: 2366864999745e-3,
    agriculture: 5079835028245e-3,
    manufacturing_construction: 369954e4,
    transport: 5281520046245e-3,
    electricity_heat: 10120259992205e-3
  },
  "2000": {
    other_fuel: 51972498975e-2,
    bunker_fuel: 837245024785e-3,
    waste: 14665000493950002e-7,
    buildings: 27966050255950003e-7,
    industry: 13889350499950001e-7,
    fugitive: 248338490889e-2,
    agriculture: 5074979851235e-3,
    manufacturing_construction: 38751100144449997e-7,
    transport: 5454089993030001e-6,
    electricity_heat: 10521054998970001e-6
  },
  "2001": {
    other_fuel: 531080015,
    bunker_fuel: 80560499989e-2,
    waste: 14526500494850001e-7,
    buildings: 2818775009785e-3,
    industry: 141381999877e-2,
    fugitive: 2506699989665e-3,
    agriculture: 508458002541e-2,
    manufacturing_construction: 38990150249300003e-7,
    transport: 5501475004245e-3,
    electricity_heat: 10771444999470001e-6
  },
  "2002": {
    other_fuel: 532764999925e-3,
    bunker_fuel: 841064999995e-3,
    waste: 144769994977e-2,
    buildings: 2818885000465e-3,
    industry: 1465889998915e-3,
    fugitive: 248795999944e-2,
    agriculture: 514317501466e-2,
    manufacturing_construction: 38929949598999996e-7,
    transport: 5638409994924999e-6,
    electricity_heat: 10961804990475e-3
  },
  "2003": {
    other_fuel: 55184999997e-2,
    bunker_fuel: 84489000004e-2,
    waste: 14434200025149999e-7,
    buildings: 2906229990085e-3,
    industry: 155979499897e-2,
    fugitive: 2658670008185e-3,
    agriculture: 513901014805e-2,
    manufacturing_construction: 408166994998e-2,
    transport: 5763484959059999e-6,
    electricity_heat: 11571774983625e-3
  },
  "2004": {
    other_fuel: 5869200006949999e-7,
    bunker_fuel: 919925000975e-3,
    waste: 1431610044575e-3,
    buildings: 2948320098835e-3,
    industry: 16408300002350001e-7,
    fugitive: 2763509934705e-3,
    agriculture: 524942001034e-2,
    manufacturing_construction: 4516514962,
    transport: 601257499879e-2,
    electricity_heat: 1195672004498e-2
  },
  "2005": {
    other_fuel: 60852499999e-2,
    bunker_fuel: 966305000775e-3,
    waste: 142235505008e-2,
    buildings: 2948804999535e-3,
    industry: 17368750000500002e-7,
    fugitive: 28890699999e-1,
    agriculture: 528509519624e-2,
    manufacturing_construction: 4937139802440001e-6,
    transport: 6133279829559999e-6,
    electricity_heat: 1233341500155e-2
  },
  "2006": {
    other_fuel: 6186049998199999e-7,
    bunker_fuel: 101727499836e-2,
    waste: 14335549998600001e-7,
    buildings: 291952499049e-2,
    industry: 186864499985e-2,
    fugitive: 293214498898e-2,
    agriculture: 5345644993334999e-6,
    manufacturing_construction: 5182135022185e-3,
    transport: 6263019955115e-3,
    electricity_heat: 12825650012135e-3
  },
  "2007": {
    other_fuel: 621230000215e-3,
    bunker_fuel: 1065490047935e-3,
    waste: 144153500038e-2,
    buildings: 2915054944955e-3,
    industry: 199692499892e-2,
    fugitive: 29787599101e-1,
    agriculture: 5423960031924999e-6,
    manufacturing_construction: 5457179998925e-3,
    transport: 6451030040184999e-6,
    electricity_heat: 133895899992e-1
  },
  "2008": {
    other_fuel: 62865000003e-2,
    bunker_fuel: 107811999998e-2,
    waste: 1446674999495e-3,
    buildings: 297974999994e-2,
    industry: 20412049994850001e-7,
    fugitive: 301022998974e-2,
    agriculture: 5430934786235e-3,
    manufacturing_construction: 5573600000205e-3,
    transport: 6452704999955e-3,
    electricity_heat: 13417470066895e-3
  },
  "2009": {
    other_fuel: 6165149999200001e-7,
    bunker_fuel: 1019395028465e-3,
    waste: 14539899994450002e-7,
    buildings: 292654998499e-2,
    industry: 20883650011550002e-7,
    fugitive: 29596250102349997e-7,
    agriculture: 5429809825485e-3,
    manufacturing_construction: 5557410010705e-3,
    transport: 6337495010594999e-6,
    electricity_heat: 13211229505085e-3
  },
  "2010": {
    other_fuel: 632140000135e-3,
    bunker_fuel: 108718004895e-2,
    waste: 14648300048899999e-7,
    buildings: 298155499401e-2,
    industry: 2224484900475e-3,
    fugitive: 3073534998145e-3,
    agriculture: 5489684987995e-3,
    manufacturing_construction: 610081975018e-2,
    transport: 659492002496e-2,
    electricity_heat: 1411120005497e-2
  },
  "2011": {
    other_fuel: 61728999996e-2,
    bunker_fuel: 1107049999935e-3,
    waste: 14670200519450002e-7,
    buildings: 2925355010475e-3,
    industry: 237602000008e-2,
    fugitive: 3169929999965e-3,
    agriculture: 5622085004725e-3,
    manufacturing_construction: 633162999824e-2,
    transport: 6706654949684999e-6,
    electricity_heat: 1471877999023e-2
  },
  "2012": {
    other_fuel: 640434999695e-3,
    bunker_fuel: 106330499889e-2,
    waste: 147629999765e-2,
    buildings: 286758500996e-2,
    industry: 245901002621e-2,
    fugitive: 321380500494e-2,
    agriculture: 56445499825e-1,
    manufacturing_construction: 635412499998e-2,
    transport: 6791410010485e-3,
    electricity_heat: 15018469958939999e-6
  },
  "2013": {
    other_fuel: 6482550003500001e-7,
    bunker_fuel: 106861999986e-2,
    waste: 1483755049795e-3,
    buildings: 298020001008e-2,
    industry: 2572490000925e-3,
    fugitive: 3231399893715e-3,
    agriculture: 5583929997,
    manufacturing_construction: 6380404992085e-3,
    transport: 698193000685e-2,
    electricity_heat: 1529226017483e-2
  },
  "2014": {
    other_fuel: 64330501535e-2,
    bunker_fuel: 1107024996,
    waste: 151395999998e-2,
    buildings: 2926515006975e-3,
    industry: 2695785055065e-3,
    fugitive: 32657249999700003e-7,
    agriculture: 56347699965e-1,
    manufacturing_construction: 6448515051995e-3,
    transport: 70906050026449995e-7,
    electricity_heat: 15230905001
  },
  "2015": {
    other_fuel: 64256000149e-2,
    bunker_fuel: 11602200497350001e-7,
    waste: 1543300000495e-3,
    buildings: 294972000004e-2,
    industry: 26893349999700003e-7,
    fugitive: 325956998508e-2,
    agriculture: 5658659828935e-3,
    manufacturing_construction: 6309455197925e-3,
    transport: 7302205000459999e-6,
    electricity_heat: 14969864406189999e-6
  },
  "2016": {
    other_fuel: 63604999969e-2,
    bunker_fuel: 119830505002e-2,
    waste: 15605799501e-1,
    buildings: 2988204996985e-3,
    industry: 278664999993e-2,
    fugitive: 322661000014e-2,
    agriculture: 5694690023335e-3,
    manufacturing_construction: 6152499964469999e-6,
    transport: 7432699845925e-3,
    electricity_heat: 1497725486849e-2
  },
  "2017": {
    other_fuel: 63833499975e-2,
    bunker_fuel: 125626000004e-2,
    waste: 158354500021e-2,
    buildings: 3054854989945e-3,
    industry: 28550749993050003e-7,
    fugitive: 324935001073e-2,
    agriculture: 5784910023585e-3,
    manufacturing_construction: 6089385159445e-3,
    transport: 760503999938e-2,
    electricity_heat: 15312989989904999e-6
  },
  "2018": {
    other_fuel: 62306501498e-2,
    bunker_fuel: 128467500044e-2,
    waste: 160658000454e-2,
    buildings: 3088309999695e-3,
    industry: 296407499994e-2,
    fugitive: 334499499899e-2,
    agriculture: 5784974993485e-3,
    manufacturing_construction: 622998000984e-2,
    transport: 779051013554e-2,
    electricity_heat: 1576405936022e-2
  },
  "2019": {
    other_fuel: 5958599992149999e-7,
    bunker_fuel: 12810500000900002e-7,
    waste: 16295650000300002e-7,
    buildings: 3028009897465e-3,
    industry: 30610050000899997e-7,
    fugitive: 339655000025e-2,
    agriculture: 57797549925e-1,
    manufacturing_construction: 6234044986690001e-6,
    transport: 7792929767115e-3,
    electricity_heat: 1570808021934e-2
  },
  "2020": {
    other_fuel: 57813999948e-2,
    bunker_fuel: 906544997915e-3,
    waste: 1652539999375e-3,
    buildings: 296734501973e-2,
    industry: 312361995044e-2,
    fugitive: 3203845000035e-3,
    agriculture: 58619852558949995e-7,
    manufacturing_construction: 620519000999e-2,
    transport: 679381985447e-2,
    electricity_heat: 15074190008835e-3
  }
};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var colors$2 = {};
var log = {};
var picocolors_browser = { exports: {} };
var x = String;
var create = function() {
  return { isColorSupported: false, reset: x, bold: x, dim: x, italic: x, underline: x, inverse: x, hidden: x, strikethrough: x, black: x, red: x, green: x, yellow: x, blue: x, magenta: x, cyan: x, white: x, gray: x, bgBlack: x, bgRed: x, bgGreen: x, bgYellow: x, bgBlue: x, bgMagenta: x, bgCyan: x, bgWhite: x, blackBright: x, redBright: x, greenBright: x, yellowBright: x, blueBright: x, magentaBright: x, cyanBright: x, whiteBright: x, bgBlackBright: x, bgRedBright: x, bgGreenBright: x, bgYellowBright: x, bgBlueBright: x, bgMagentaBright: x, bgCyanBright: x, bgWhiteBright: x };
};
picocolors_browser.exports = create();
picocolors_browser.exports.createColors = create;
var picocolors_browserExports = picocolors_browser.exports;
(function(exports) {
  var define_process_env_default = {};
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  function _export(target, all) {
    for (var name in all) Object.defineProperty(target, name, {
      enumerable: true,
      get: all[name]
    });
  }
  _export(exports, {
    dim: function() {
      return dim;
    },
    default: function() {
      return _default;
    }
  });
  const _picocolors = /* @__PURE__ */ _interop_require_default(picocolors_browserExports);
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  let alreadyShown = /* @__PURE__ */ new Set();
  function log2(type, messages, key) {
    if (typeof process !== "undefined" && define_process_env_default.JEST_WORKER_ID) return;
    if (key && alreadyShown.has(key)) return;
    if (key) alreadyShown.add(key);
    console.warn("");
    messages.forEach((message) => console.warn(type, "-", message));
  }
  function dim(input) {
    return _picocolors.default.dim(input);
  }
  const _default = {
    info(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.cyan("info")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    },
    warn(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.yellow("warn")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    },
    risk(key, messages) {
      log2(_picocolors.default.bold(_picocolors.default.magenta("risk")), ...Array.isArray(key) ? [
        key
      ] : [
        messages,
        key
      ]);
    }
  };
})(log);
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _default;
    }
  });
  const _log = /* @__PURE__ */ _interop_require_default(log);
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  function warn({ version, from, to }) {
    _log.default.warn(`${from}-color-renamed`, [
      `As of Tailwind CSS ${version}, \`${from}\` has been renamed to \`${to}\`.`,
      "Update your configuration file to silence this warning."
    ]);
  }
  const _default = {
    inherit: "inherit",
    current: "currentColor",
    transparent: "transparent",
    black: "#000",
    white: "#fff",
    slate: {
      50: "#f8fafc",
      100: "#f1f5f9",
      200: "#e2e8f0",
      300: "#cbd5e1",
      400: "#94a3b8",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      800: "#1e293b",
      900: "#0f172a",
      950: "#020617"
    },
    gray: {
      50: "#f9fafb",
      100: "#f3f4f6",
      200: "#e5e7eb",
      300: "#d1d5db",
      400: "#9ca3af",
      500: "#6b7280",
      600: "#4b5563",
      700: "#374151",
      800: "#1f2937",
      900: "#111827",
      950: "#030712"
    },
    zinc: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b",
      950: "#09090b"
    },
    neutral: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#e5e5e5",
      300: "#d4d4d4",
      400: "#a3a3a3",
      500: "#737373",
      600: "#525252",
      700: "#404040",
      800: "#262626",
      900: "#171717",
      950: "#0a0a0a"
    },
    stone: {
      50: "#fafaf9",
      100: "#f5f5f4",
      200: "#e7e5e4",
      300: "#d6d3d1",
      400: "#a8a29e",
      500: "#78716c",
      600: "#57534e",
      700: "#44403c",
      800: "#292524",
      900: "#1c1917",
      950: "#0c0a09"
    },
    red: {
      50: "#fef2f2",
      100: "#fee2e2",
      200: "#fecaca",
      300: "#fca5a5",
      400: "#f87171",
      500: "#ef4444",
      600: "#dc2626",
      700: "#b91c1c",
      800: "#991b1b",
      900: "#7f1d1d",
      950: "#450a0a"
    },
    orange: {
      50: "#fff7ed",
      100: "#ffedd5",
      200: "#fed7aa",
      300: "#fdba74",
      400: "#fb923c",
      500: "#f97316",
      600: "#ea580c",
      700: "#c2410c",
      800: "#9a3412",
      900: "#7c2d12",
      950: "#431407"
    },
    amber: {
      50: "#fffbeb",
      100: "#fef3c7",
      200: "#fde68a",
      300: "#fcd34d",
      400: "#fbbf24",
      500: "#f59e0b",
      600: "#d97706",
      700: "#b45309",
      800: "#92400e",
      900: "#78350f",
      950: "#451a03"
    },
    yellow: {
      50: "#fefce8",
      100: "#fef9c3",
      200: "#fef08a",
      300: "#fde047",
      400: "#facc15",
      500: "#eab308",
      600: "#ca8a04",
      700: "#a16207",
      800: "#854d0e",
      900: "#713f12",
      950: "#422006"
    },
    lime: {
      50: "#f7fee7",
      100: "#ecfccb",
      200: "#d9f99d",
      300: "#bef264",
      400: "#a3e635",
      500: "#84cc16",
      600: "#65a30d",
      700: "#4d7c0f",
      800: "#3f6212",
      900: "#365314",
      950: "#1a2e05"
    },
    green: {
      50: "#f0fdf4",
      100: "#dcfce7",
      200: "#bbf7d0",
      300: "#86efac",
      400: "#4ade80",
      500: "#22c55e",
      600: "#16a34a",
      700: "#15803d",
      800: "#166534",
      900: "#14532d",
      950: "#052e16"
    },
    emerald: {
      50: "#ecfdf5",
      100: "#d1fae5",
      200: "#a7f3d0",
      300: "#6ee7b7",
      400: "#34d399",
      500: "#10b981",
      600: "#059669",
      700: "#047857",
      800: "#065f46",
      900: "#064e3b",
      950: "#022c22"
    },
    teal: {
      50: "#f0fdfa",
      100: "#ccfbf1",
      200: "#99f6e4",
      300: "#5eead4",
      400: "#2dd4bf",
      500: "#14b8a6",
      600: "#0d9488",
      700: "#0f766e",
      800: "#115e59",
      900: "#134e4a",
      950: "#042f2e"
    },
    cyan: {
      50: "#ecfeff",
      100: "#cffafe",
      200: "#a5f3fc",
      300: "#67e8f9",
      400: "#22d3ee",
      500: "#06b6d4",
      600: "#0891b2",
      700: "#0e7490",
      800: "#155e75",
      900: "#164e63",
      950: "#083344"
    },
    sky: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
      950: "#082f49"
    },
    blue: {
      50: "#eff6ff",
      100: "#dbeafe",
      200: "#bfdbfe",
      300: "#93c5fd",
      400: "#60a5fa",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      800: "#1e40af",
      900: "#1e3a8a",
      950: "#172554"
    },
    indigo: {
      50: "#eef2ff",
      100: "#e0e7ff",
      200: "#c7d2fe",
      300: "#a5b4fc",
      400: "#818cf8",
      500: "#6366f1",
      600: "#4f46e5",
      700: "#4338ca",
      800: "#3730a3",
      900: "#312e81",
      950: "#1e1b4b"
    },
    violet: {
      50: "#f5f3ff",
      100: "#ede9fe",
      200: "#ddd6fe",
      300: "#c4b5fd",
      400: "#a78bfa",
      500: "#8b5cf6",
      600: "#7c3aed",
      700: "#6d28d9",
      800: "#5b21b6",
      900: "#4c1d95",
      950: "#2e1065"
    },
    purple: {
      50: "#faf5ff",
      100: "#f3e8ff",
      200: "#e9d5ff",
      300: "#d8b4fe",
      400: "#c084fc",
      500: "#a855f7",
      600: "#9333ea",
      700: "#7e22ce",
      800: "#6b21a8",
      900: "#581c87",
      950: "#3b0764"
    },
    fuchsia: {
      50: "#fdf4ff",
      100: "#fae8ff",
      200: "#f5d0fe",
      300: "#f0abfc",
      400: "#e879f9",
      500: "#d946ef",
      600: "#c026d3",
      700: "#a21caf",
      800: "#86198f",
      900: "#701a75",
      950: "#4a044e"
    },
    pink: {
      50: "#fdf2f8",
      100: "#fce7f3",
      200: "#fbcfe8",
      300: "#f9a8d4",
      400: "#f472b6",
      500: "#ec4899",
      600: "#db2777",
      700: "#be185d",
      800: "#9d174d",
      900: "#831843",
      950: "#500724"
    },
    rose: {
      50: "#fff1f2",
      100: "#ffe4e6",
      200: "#fecdd3",
      300: "#fda4af",
      400: "#fb7185",
      500: "#f43f5e",
      600: "#e11d48",
      700: "#be123c",
      800: "#9f1239",
      900: "#881337",
      950: "#4c0519"
    },
    get lightBlue() {
      warn({
        version: "v2.2",
        from: "lightBlue",
        to: "sky"
      });
      return this.sky;
    },
    get warmGray() {
      warn({
        version: "v3.0",
        from: "warmGray",
        to: "stone"
      });
      return this.stone;
    },
    get trueGray() {
      warn({
        version: "v3.0",
        from: "trueGray",
        to: "neutral"
      });
      return this.neutral;
    },
    get coolGray() {
      warn({
        version: "v3.0",
        from: "coolGray",
        to: "gray"
      });
      return this.gray;
    },
    get blueGray() {
      warn({
        version: "v3.0",
        from: "blueGray",
        to: "slate"
      });
      return this.slate;
    }
  };
})(colors$2);
let colors = colors$2;
var colors_1 = (colors.__esModule ? colors : { default: colors }).default;
const colors$1 = /* @__PURE__ */ getDefaultExportFromCjs(colors_1);
var defaultTheme$1 = {};
var cloneDeep = {};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "cloneDeep", {
    enumerable: true,
    get: function() {
      return cloneDeep2;
    }
  });
  function cloneDeep2(value) {
    if (Array.isArray(value)) {
      return value.map((child) => cloneDeep2(child));
    }
    if (typeof value === "object" && value !== null) {
      return Object.fromEntries(Object.entries(value).map(([k, v]) => [
        k,
        cloneDeep2(v)
      ]));
    }
    return value;
  }
})(cloneDeep);
var config_full = {
  content: [],
  presets: [],
  darkMode: "media",
  // or 'class'
  theme: {
    accentColor: ({ theme }) => ({
      ...theme("colors"),
      auto: "auto"
    }),
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite"
    },
    aria: {
      busy: 'busy="true"',
      checked: 'checked="true"',
      disabled: 'disabled="true"',
      expanded: 'expanded="true"',
      hidden: 'hidden="true"',
      pressed: 'pressed="true"',
      readonly: 'readonly="true"',
      required: 'required="true"',
      selected: 'selected="true"'
    },
    aspectRatio: {
      auto: "auto",
      square: "1 / 1",
      video: "16 / 9"
    },
    backdropBlur: ({ theme }) => theme("blur"),
    backdropBrightness: ({ theme }) => theme("brightness"),
    backdropContrast: ({ theme }) => theme("contrast"),
    backdropGrayscale: ({ theme }) => theme("grayscale"),
    backdropHueRotate: ({ theme }) => theme("hueRotate"),
    backdropInvert: ({ theme }) => theme("invert"),
    backdropOpacity: ({ theme }) => theme("opacity"),
    backdropSaturate: ({ theme }) => theme("saturate"),
    backdropSepia: ({ theme }) => theme("sepia"),
    backgroundColor: ({ theme }) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr": "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br": "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl": "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl": "linear-gradient(to top left, var(--tw-gradient-stops))"
    },
    backgroundOpacity: ({ theme }) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain"
    },
    blur: {
      0: "0",
      none: "",
      sm: "4px",
      DEFAULT: "8px",
      md: "12px",
      lg: "16px",
      xl: "24px",
      "2xl": "40px",
      "3xl": "64px"
    },
    borderColor: ({ theme }) => ({
      ...theme("colors"),
      DEFAULT: theme("colors.gray.200", "currentColor")
    }),
    borderOpacity: ({ theme }) => theme("opacity"),
    borderRadius: {
      none: "0px",
      sm: "0.125rem",
      DEFAULT: "0.25rem",
      md: "0.375rem",
      lg: "0.5rem",
      xl: "0.75rem",
      "2xl": "1rem",
      "3xl": "1.5rem",
      full: "9999px"
    },
    borderSpacing: ({ theme }) => ({
      ...theme("spacing")
    }),
    borderWidth: {
      DEFAULT: "1px",
      0: "0px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    boxShadow: {
      sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
      md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
      inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
      none: "none"
    },
    boxShadowColor: ({ theme }) => theme("colors"),
    brightness: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    caretColor: ({ theme }) => theme("colors"),
    colors: ({ colors: colors2 }) => ({
      inherit: colors2.inherit,
      current: colors2.current,
      transparent: colors2.transparent,
      black: colors2.black,
      white: colors2.white,
      slate: colors2.slate,
      gray: colors2.gray,
      zinc: colors2.zinc,
      neutral: colors2.neutral,
      stone: colors2.stone,
      red: colors2.red,
      orange: colors2.orange,
      amber: colors2.amber,
      yellow: colors2.yellow,
      lime: colors2.lime,
      green: colors2.green,
      emerald: colors2.emerald,
      teal: colors2.teal,
      cyan: colors2.cyan,
      sky: colors2.sky,
      blue: colors2.blue,
      indigo: colors2.indigo,
      violet: colors2.violet,
      purple: colors2.purple,
      fuchsia: colors2.fuchsia,
      pink: colors2.pink,
      rose: colors2.rose
    }),
    columns: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      "3xs": "16rem",
      "2xs": "18rem",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem"
    },
    container: {},
    content: {
      none: "none"
    },
    contrast: {
      0: "0",
      50: ".5",
      75: ".75",
      100: "1",
      125: "1.25",
      150: "1.5",
      200: "2"
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      "not-allowed": "not-allowed",
      none: "none",
      "context-menu": "context-menu",
      progress: "progress",
      cell: "cell",
      crosshair: "crosshair",
      "vertical-text": "vertical-text",
      alias: "alias",
      copy: "copy",
      "no-drop": "no-drop",
      grab: "grab",
      grabbing: "grabbing",
      "all-scroll": "all-scroll",
      "col-resize": "col-resize",
      "row-resize": "row-resize",
      "n-resize": "n-resize",
      "e-resize": "e-resize",
      "s-resize": "s-resize",
      "w-resize": "w-resize",
      "ne-resize": "ne-resize",
      "nw-resize": "nw-resize",
      "se-resize": "se-resize",
      "sw-resize": "sw-resize",
      "ew-resize": "ew-resize",
      "ns-resize": "ns-resize",
      "nesw-resize": "nesw-resize",
      "nwse-resize": "nwse-resize",
      "zoom-in": "zoom-in",
      "zoom-out": "zoom-out"
    },
    divideColor: ({ theme }) => theme("borderColor"),
    divideOpacity: ({ theme }) => theme("borderOpacity"),
    divideWidth: ({ theme }) => theme("borderWidth"),
    dropShadow: {
      sm: "0 1px 1px rgb(0 0 0 / 0.05)",
      DEFAULT: ["0 1px 2px rgb(0 0 0 / 0.1)", "0 1px 1px rgb(0 0 0 / 0.06)"],
      md: ["0 4px 3px rgb(0 0 0 / 0.07)", "0 2px 2px rgb(0 0 0 / 0.06)"],
      lg: ["0 10px 8px rgb(0 0 0 / 0.04)", "0 4px 3px rgb(0 0 0 / 0.1)"],
      xl: ["0 20px 13px rgb(0 0 0 / 0.03)", "0 8px 5px rgb(0 0 0 / 0.08)"],
      "2xl": "0 25px 25px rgb(0 0 0 / 0.15)",
      none: "0 0 #0000"
    },
    fill: ({ theme }) => ({
      none: "none",
      ...theme("colors")
    }),
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none"
    },
    flexBasis: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%"
    }),
    flexGrow: {
      0: "0",
      DEFAULT: "1"
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1"
    },
    fontFamily: {
      sans: [
        "ui-sans-serif",
        "system-ui",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"'
      ],
      serif: ["ui-serif", "Georgia", "Cambria", '"Times New Roman"', "Times", "serif"],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace"
      ]
    },
    fontSize: {
      xs: ["0.75rem", { lineHeight: "1rem" }],
      sm: ["0.875rem", { lineHeight: "1.25rem" }],
      base: ["1rem", { lineHeight: "1.5rem" }],
      lg: ["1.125rem", { lineHeight: "1.75rem" }],
      xl: ["1.25rem", { lineHeight: "1.75rem" }],
      "2xl": ["1.5rem", { lineHeight: "2rem" }],
      "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
      "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
      "5xl": ["3rem", { lineHeight: "1" }],
      "6xl": ["3.75rem", { lineHeight: "1" }],
      "7xl": ["4.5rem", { lineHeight: "1" }],
      "8xl": ["6rem", { lineHeight: "1" }],
      "9xl": ["8rem", { lineHeight: "1" }]
    },
    fontWeight: {
      thin: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800",
      black: "900"
    },
    gap: ({ theme }) => theme("spacing"),
    gradientColorStops: ({ theme }) => theme("colors"),
    gradientColorStopPositions: {
      "0%": "0%",
      "5%": "5%",
      "10%": "10%",
      "15%": "15%",
      "20%": "20%",
      "25%": "25%",
      "30%": "30%",
      "35%": "35%",
      "40%": "40%",
      "45%": "45%",
      "50%": "50%",
      "55%": "55%",
      "60%": "60%",
      "65%": "65%",
      "70%": "70%",
      "75%": "75%",
      "80%": "80%",
      "85%": "85%",
      "90%": "90%",
      "95%": "95%",
      "100%": "100%"
    },
    grayscale: {
      0: "0",
      DEFAULT: "100%"
    },
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)"
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1"
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13"
    },
    gridTemplateColumns: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    gridTemplateRows: {
      none: "none",
      subgrid: "subgrid",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))"
    },
    height: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    hueRotate: {
      0: "0deg",
      15: "15deg",
      30: "30deg",
      60: "60deg",
      90: "90deg",
      180: "180deg"
    },
    inset: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    invert: {
      0: "0",
      DEFAULT: "100%"
    },
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)"
        }
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0"
        }
      },
      pulse: {
        "50%": {
          opacity: ".5"
        }
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)"
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)"
        }
      }
    },
    letterSpacing: {
      tighter: "-0.05em",
      tight: "-0.025em",
      normal: "0em",
      wide: "0.025em",
      wider: "0.05em",
      widest: "0.1em"
    },
    lineHeight: {
      none: "1",
      tight: "1.25",
      snug: "1.375",
      normal: "1.5",
      relaxed: "1.625",
      loose: "2",
      3: ".75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem"
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal"
    },
    listStyleImage: {
      none: "none"
    },
    margin: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing")
    }),
    lineClamp: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6"
    },
    maxHeight: ({ theme }) => ({
      ...theme("spacing"),
      none: "none",
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    maxWidth: ({ theme, breakpoints }) => ({
      ...theme("spacing"),
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      "7xl": "80rem",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content",
      prose: "65ch",
      ...breakpoints(theme("screens"))
    }),
    minHeight: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
      svh: "100svh",
      lvh: "100lvh",
      dvh: "100dvh",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    minWidth: ({ theme }) => ({
      ...theme("spacing"),
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top"
    },
    opacity: {
      0: "0",
      5: "0.05",
      10: "0.1",
      15: "0.15",
      20: "0.2",
      25: "0.25",
      30: "0.3",
      35: "0.35",
      40: "0.4",
      45: "0.45",
      50: "0.5",
      55: "0.55",
      60: "0.6",
      65: "0.65",
      70: "0.7",
      75: "0.75",
      80: "0.8",
      85: "0.85",
      90: "0.9",
      95: "0.95",
      100: "1"
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12"
    },
    outlineColor: ({ theme }) => theme("colors"),
    outlineOffset: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    outlineWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    padding: ({ theme }) => theme("spacing"),
    placeholderColor: ({ theme }) => theme("colors"),
    placeholderOpacity: ({ theme }) => theme("opacity"),
    ringColor: ({ theme }) => ({
      DEFAULT: theme("colors.blue.500", "#3b82f6"),
      ...theme("colors")
    }),
    ringOffsetColor: ({ theme }) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    ringOpacity: ({ theme }) => ({
      DEFAULT: "0.5",
      ...theme("opacity")
    }),
    ringWidth: {
      DEFAULT: "3px",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    rotate: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg"
    },
    saturate: {
      0: "0",
      50: ".5",
      100: "1",
      150: "1.5",
      200: "2"
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5"
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    scrollMargin: ({ theme }) => ({
      ...theme("spacing")
    }),
    scrollPadding: ({ theme }) => theme("spacing"),
    sepia: {
      0: "0",
      DEFAULT: "100%"
    },
    skew: {
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg"
    },
    space: ({ theme }) => ({
      ...theme("spacing")
    }),
    spacing: {
      px: "1px",
      0: "0px",
      0.5: "0.125rem",
      1: "0.25rem",
      1.5: "0.375rem",
      2: "0.5rem",
      2.5: "0.625rem",
      3: "0.75rem",
      3.5: "0.875rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      9: "2.25rem",
      10: "2.5rem",
      11: "2.75rem",
      12: "3rem",
      14: "3.5rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      28: "7rem",
      32: "8rem",
      36: "9rem",
      40: "10rem",
      44: "11rem",
      48: "12rem",
      52: "13rem",
      56: "14rem",
      60: "15rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      96: "24rem"
    },
    stroke: ({ theme }) => ({
      none: "none",
      ...theme("colors")
    }),
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2"
    },
    supports: {},
    data: {},
    textColor: ({ theme }) => theme("colors"),
    textDecorationColor: ({ theme }) => theme("colors"),
    textDecorationThickness: {
      auto: "auto",
      "from-font": "from-font",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    textIndent: ({ theme }) => ({
      ...theme("spacing")
    }),
    textOpacity: ({ theme }) => theme("opacity"),
    textUnderlineOffset: {
      auto: "auto",
      0: "0px",
      1: "1px",
      2: "2px",
      4: "4px",
      8: "8px"
    },
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left"
    },
    transitionDelay: {
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionDuration: {
      DEFAULT: "150ms",
      0: "0s",
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1e3: "1000ms"
    },
    transitionProperty: {
      none: "none",
      all: "all",
      DEFAULT: "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
      colors: "color, background-color, border-color, text-decoration-color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform"
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
    },
    translate: ({ theme }) => ({
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%"
    }),
    size: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    width: ({ theme }) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      screen: "100vw",
      svw: "100svw",
      lvw: "100lvw",
      dvw: "100dvw",
      min: "min-content",
      max: "max-content",
      fit: "fit-content"
    }),
    willChange: {
      auto: "auto",
      scroll: "scroll-position",
      contents: "contents",
      transform: "transform"
    },
    zIndex: {
      auto: "auto",
      0: "0",
      10: "10",
      20: "20",
      30: "30",
      40: "40",
      50: "50"
    }
  },
  plugins: []
};
(function(exports) {
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
      return _default;
    }
  });
  const _cloneDeep = cloneDeep;
  const _configfull = /* @__PURE__ */ _interop_require_default(config_full);
  function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }
  const _default = (0, _cloneDeep.cloneDeep)(_configfull.default.theme);
})(defaultTheme$1);
let defaultTheme = defaultTheme$1;
var defaultTheme_1 = (defaultTheme.__esModule ? defaultTheme : { default: defaultTheme }).default;
function spacing(key, scale = 1) {
  var _a2;
  const size = (_a2 = defaultTheme_1.spacing[key].match(/^(\d+\.?\d*)(rem|px)$/)) == null ? void 0 : _a2[1];
  if (!size) {
    throw new Error(`Error when converting spacing`);
  }
  return Number(size) * scale * 16;
}
const {
  red,
  orange,
  yellow,
  green,
  sky,
  blue,
  purple,
  pink,
  gray,
  amber,
  cyan,
  indigo,
  teal
} = colors$1;
const twScheme = [
  blue[600],
  green[600],
  amber[600],
  red[600],
  purple[600],
  cyan[600],
  pink[600],
  indigo[600],
  orange[600],
  teal[600]
];
const other_fuel = [
  {
    country: "China",
    iso_code: "CHN",
    value: 16379e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 6483e4
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 3694e4
  },
  {
    country: "Brazil",
    iso_code: "BRA",
    value: 2072e4
  },
  {
    country: "Canada",
    iso_code: "CAN",
    value: 1676e4
  }
];
const bunker_fuel = [
  {
    country: "Singapore",
    iso_code: "SGP",
    value: 16335e4
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 9707e4
  },
  {
    country: "United Arab Emirates",
    iso_code: "ARE",
    value: 66059996
  },
  {
    country: "China",
    iso_code: "CHN",
    value: 5442e4
  },
  {
    country: "Netherlands",
    iso_code: "NLD",
    value: 4351e4
  }
];
const waste = [
  {
    country: "China",
    iso_code: "CHN",
    value: 2095e5
  },
  {
    country: "Indonesia",
    iso_code: "IDN",
    value: 13821e4
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 13545e4
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 11868e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 8535e4
  }
];
const buildings = [
  {
    country: "United States",
    iso_code: "USA",
    value: 517210020
  },
  {
    country: "China",
    iso_code: "CHN",
    value: 492890020
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 21221e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 16249e4
  },
  {
    country: "Germany",
    iso_code: "DEU",
    value: 12728e4
  }
];
const industry = [
  {
    country: "China",
    iso_code: "CHN",
    value: 1260689900
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 24352e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 14937e4
  },
  {
    country: "Saudi Arabia",
    iso_code: "SAU",
    value: 11402e4
  },
  {
    country: "Thailand",
    iso_code: "THA",
    value: 9356e4
  }
];
const fugitive = [
  {
    country: "China",
    iso_code: "CHN",
    value: 62807e4
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 492e6
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 4195e5
  },
  {
    country: "Iran",
    iso_code: "IRN",
    value: 1479e5
  },
  {
    country: "Turkmenistan",
    iso_code: "TKM",
    value: 11949e4
  }
];
const agriculture = [
  {
    country: "India",
    iso_code: "IND",
    value: 74192e4
  },
  {
    country: "China",
    iso_code: "CHN",
    value: 65397e4
  },
  {
    country: "Brazil",
    iso_code: "BRA",
    value: 51886e4
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 382010020
  },
  {
    country: "Pakistan",
    iso_code: "PAK",
    value: 20176e4
  }
];
const manufacturing_construction = [
  {
    country: "China",
    iso_code: "CHN",
    value: 289905e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 509450020
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 44112e4
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 27464e4
  },
  {
    country: "Japan",
    iso_code: "JPN",
    value: 17133e4
  }
];
const transport = [
  {
    country: "United States",
    iso_code: "USA",
    value: 155832e4
  },
  {
    country: "China",
    iso_code: "CHN",
    value: 92094e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 27644e4
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 23997e4
  },
  {
    country: "Brazil",
    iso_code: "BRA",
    value: 18958e4
  }
];
const electricity_heat = [
  {
    country: "China",
    iso_code: "CHN",
    value: 571398e4
  },
  {
    country: "United States",
    iso_code: "USA",
    value: 177112e4
  },
  {
    country: "India",
    iso_code: "IND",
    value: 112198e4
  },
  {
    country: "Russia",
    iso_code: "RUS",
    value: 82241e4
  },
  {
    country: "Japan",
    iso_code: "JPN",
    value: 51656e4
  }
];
const topCountries = {
  other_fuel,
  bunker_fuel,
  waste,
  buildings,
  industry,
  fugitive,
  agriculture,
  manufacturing_construction,
  transport,
  electricity_heat
};
const MILLION = 1e6;
const dimension$1 = {
  width: spacing("52", 2),
  height: spacing("52", 2),
  mt: 2,
  mr: 2,
  mb: 2,
  ml: 2
};
const svg$1 = d3.select(".top-emission-countries").attr("width", dimension$1.width).attr("height", dimension$1.height);
const color$1 = d3.scaleOrdinal(twScheme);
function renderBubbleChart(selected) {
  svg$1.selectAll("*").remove();
  if (selected === null) return;
  const pack = d3.pack().size([
    dimension$1.width - dimension$1.ml - dimension$1.mr,
    dimension$1.height - dimension$1.mt - dimension$1.mb
  ]).padding(3);
  const root = d3.hierarchy({
    children: topCountries[selected]
  }).sum((d) => d.value);
  const packedRoot = pack(root);
  const container = svg$1.append("g").attr("transform", `translate(${dimension$1.ml}, ${dimension$1.mt})`).style("opacity", 0);
  const nodes = container.append("g").attr("transform", `translate(${dimension$1.ml}, ${dimension$1.mt})`).selectAll().data(packedRoot.leaves()).join("g").attr("transform", (d) => `translate(${d.x},${d.y})`);
  nodes.append("circle").attr("r", 0).attr("fill", (d) => color$1(d.data.country)).attr("opacity", 0.7).attr("stroke", gray[50]).attr("stroke-width", 2).transition().duration(500).ease(d3.easeCubicOut).attr("r", (d) => d.r);
  const textGroup = nodes.append("g").attr("class", "text-group").style("opacity", 0);
  textGroup.append("text").text((d) => d.data.country).attr("text-anchor", "middle").attr("y", "-0.3em").style("font-size", (d) => {
    const maxFontSize = d.r / 3;
    const minFontSize = 8;
    const fontSize = Math.min(maxFontSize, 16);
    return Math.max(fontSize, minFontSize) + "px";
  }).style("fill", gray[700]).style("pointer-events", "none");
  textGroup.append("text").attr("class", "value-text").text((d) => `${(d.data.value / MILLION).toFixed(2)}M t`).attr("text-anchor", "middle").attr("y", "0.8em").style("font-size", (d) => {
    const maxFontSize = d.r / 3 * 0.8;
    const minFontSize = 8;
    const fontSize = Math.min(maxFontSize, 14);
    return Math.max(fontSize, minFontSize) + "px";
  }).style("fill", gray[600]).style("pointer-events", "none");
  container.transition().duration(500).style("opacity", 1).on("end", () => {
    nodes.selectAll(".text-group").transition().duration(400).style("opacity", 1);
  });
}
const legendMap = {
  other_fuel: "Other",
  bunker_fuel: "Aviation",
  waste: "Waste",
  buildings: "Buildings",
  industry: "Industry",
  fugitive: "Fugitive",
  agriculture: "Agriculture",
  manufacturing_construction: "Manufacturing",
  transport: "Transport",
  electricity_heat: "Electricity"
};
function createLegend(sectors2, color2) {
  var _a2;
  const legend = document.querySelector(".emissions-by-sector__legend");
  legend.innerHTML = `${sectors2.map(
    (sector) => `<li class='flex gap-1 truncate items-center text-xs cursor-pointer w-fit' data-sector="${sector}"><span class='size-2 inline-block rounded-full bg-[${color2(
      sector
    )}]'></span>${legendMap[sector]}</li>`
  ).join("")}`;
  (_a2 = document.querySelector(".emissions-by-sector")) == null ? void 0 : _a2.addEventListener("click", (e) => {
    e.preventDefault();
    legendProxy.selected = null;
  });
}
const legendProxy = new Proxy(
  { selected: null },
  {
    set(target, prop, value) {
      if (prop !== "selected") {
        return false;
      }
      target[prop] = value;
      const area2 = d3.select(".emissions-by-sector").selectAll(".area");
      if (value === null) {
        area2.transition().duration(200).attr("opacity", 0.7);
      } else {
        area2.transition().duration(150).attr("opacity", (d) => d.key === value ? 0.7 : 0.3);
      }
      renderBubbleChart(value);
      return true;
    }
  }
);
(_a = document.querySelector(".emissions-by-sector__legend")) == null ? void 0 : _a.addEventListener("click", (e) => {
  const target = e.target;
  const sector = target.getAttribute("data-sector");
  legendProxy.selected = sector;
});
const BILLION = 1e9;
const data = yearlyTotalsStack.map((d) => ({
  ...d,
  year: new Date(d.year),
  value: d.value / BILLION
}));
const sectors = Object.keys(yearlyTotals[Object.keys(yearlyTotals)[0]]);
const series = d3.stack().keys(sectors).value(([, group], key) => group.get(key).value).order(d3.stackOrderDescending)(
  d3.index(
    data,
    (d) => d.year,
    (d) => d.sector
  )
);
const dimension = {
  width: spacing("72", 2),
  height: spacing("56", 2),
  mt: 20,
  mr: 15,
  mb: 20,
  ml: 45
};
const svg = d3.select(".emissions-by-sector").attr("width", dimension.width).attr("height", dimension.height);
const mainGroup = svg.append("g").attr("class", "main-group");
const xScale = d3.scaleUtc().domain(d3.extent(data, (d) => d.year)).range([dimension.ml, dimension.width - dimension.mr]);
const yScale = d3.scaleLinear().domain([d3.max(series, (d) => d3.max(d, (d2) => d2[1])), 0]).range([dimension.mt, dimension.height - dimension.mb]);
const area = d3.area().x((d) => xScale(d.data[0])).y0((d) => yScale(d[0])).y1((d) => yScale(d[1]));
const color = d3.scaleOrdinal().domain(sectors).range(twScheme);
const tooltip = d3.select("body").append("div").attr("class", "tooltip").style("position", "absolute").style("visibility", "hidden").style("background-color", "rgba(255, 255, 255, 0.95)").style("padding", "10px").style("border", "1px solid #ddd").style("border-radius", "4px").style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)").style("pointer-events", "none").style("z-index", "1000").style("display", "none");
const chartArea = svg.append("rect").attr("class", "chart-area").attr("x", dimension.ml).attr("y", dimension.mt).attr("width", dimension.width - dimension.ml - dimension.mr).attr("height", dimension.height - dimension.mt - dimension.mb).style("fill", "none").style("pointer-events", "all");
const verticalLine = mainGroup.append("line").attr("class", "vertical-line").style("stroke", gray[400]).style("stroke-dasharray", "4,4").style("stroke-width", 1).style("pointer-events", "none").style("visibility", "hidden");
mainGroup.append("g").attr("transform", `translate(0, ${dimension.height - dimension.mb})`).call(d3.axisBottom(xScale));
mainGroup.append("g").attr("transform", `translate(${dimension.ml}, 0)`).call(
  d3.axisLeft(yScale).ticks(5).tickFormat((d) => `${d} bn t`)
).call((g) => g.select(".domain").remove()).call(
  (g) => g.selectAll(".tick line").clone().attr("x2", dimension.width - dimension.ml - dimension.mr).attr("stroke-opacity", 0.1)
);
mainGroup.selectAll("path.area").data(series).join("path").attr("class", "area").attr("fill", (d) => color(d.key)).attr("d", area).attr("opacity", 0.7).attr("stroke", gray[500]).attr("stroke-width", 0.5).style("pointer-events", "none");
function mousemove(event) {
  const [mouseX] = d3.pointer(event);
  if (mouseX < dimension.ml || mouseX > dimension.width - dimension.mr)
    return;
  const date = xScale.invert(mouseX);
  const bisect = d3.bisector((d) => d.year).left;
  const i = bisect(data, date);
  if (i >= data.length) return;
  const dataPointA = data[Math.max(0, i - 1)];
  const dataPointB = data[i];
  const dataPoint = !dataPointB ? dataPointA : date - dataPointA.year > dataPointB.year - date ? dataPointB : dataPointA;
  if (!dataPoint) return;
  console.log({ dataPoint });
  const index = Math.floor(
    data.findIndex((d) => d.year.getTime() === dataPoint.year.getTime()) / sectors.length
  );
  if (index === -1) return;
  const xPos = xScale(dataPoint.year);
  verticalLine.attr("x1", xPos).attr("y1", dimension.mt).attr("x2", xPos).attr("y2", dimension.height - dimension.mb).style("visibility", "visible");
  let tooltipContent = `
        <div class='font-bold mb-1 border-b pb-1'>
            ${dataPoint.year.getFullYear()}
        </div>
    `;
  const sectorValues = sectors.map((sector) => {
    const sectorData = series.find((s) => s.key === sector);
    let value = 0;
    if (sectorData && sectorData[index]) {
      value = sectorData[index][1] - sectorData[index][0];
    }
    return { sector, value };
  });
  sectorValues.forEach(({ sector, value }) => {
    tooltipContent += `
            <div class='flex items-center justify-between my-0.5 mx-0'>
                <div class='flex items-center'>
                    <div class='size-2 bg-[${color(
      sector
    )}] mr-1.5 rounded-full'></div>
                    <div style="min-width: 100px;">${legendMap[sector]}</div>
                </div>
                <div class='ml-3 font-medium'>${value.toFixed(
      2
    )} billion t</div>
            </div>
        `;
  });
  tooltip.style("visibility", "visible").style("display", "inline-block").style("left", `${event.pageX + 15}px`).style("top", `${event.pageY - 10}px`).html(tooltipContent);
}
function mouseout() {
  verticalLine.style("visibility", "hidden");
  tooltip.style("visibility", "hidden");
}
chartArea.on("mousemove", mousemove).on("mouseout", mouseout);
createLegend(sectors, color);
