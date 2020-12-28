function create(element) {
    return document.createElement(element);
}
var div = create("div")
div.setAttribute("class","main");
var div2 = create("div")
div2.setAttribute("class","cont")
div2.innerHTML = "";
var table = create("table")
table.setAttribute("height","50%")
table.setAttribute("width","100%")
table.setAttribute("class","table")
var tr1 = create("tr")
tr1.setAttribute("class","tr")
var td1 = create("td")
td1.setAttribute("class","td")
td1.innerHTML = "<b>ID</b>"
var td2 = create("td")
td2.setAttribute("class","td")
td2.innerHTML = "<b>Name</b>"
var td3 = create("td")
td3.setAttribute("class","td")
td3.innerHTML = "<b>Email</b>"
tr1.append(td1,td2,td3)
var tr2 = create("tr")
tr2.setAttribute("class","tr")
var td4 = create("td")
td4.setAttribute("class","td")
var td5 = create("td")
td5.setAttribute("class","td")
var td6 = create("td")
td6.setAttribute("class","td")
tr2.append(td4,td5,td6)
var tr3 = create("tr")
tr3.setAttribute("class","tr")
var td7 = create("td")
td7.setAttribute("class","td")
var td8 = create("td")
td8.setAttribute("class","td")
var td9 = create("td")
td9.setAttribute("class","td")
tr3.append(td7,td8,td9)
var tr4 = create("tr")
tr4.setAttribute("class","tr")
var td10 = create("td")
td10.setAttribute("class","td")
var td11 = create("td")
td11.setAttribute("class","td")
var td12 = create("td")
td12.setAttribute("class","td")
tr4.append(td10,td11,td12)

table.append(tr1,tr2,tr3,tr4);
div2.append(table)
var div3 = create("div");
div3.setAttribute("class","pagination active")
var afrst = create("button");
afrst.innerHTML = "First";
afrst.setAttribute("id","afrst")
var aPrev = create("button")
aPrev.innerHTML = "Previous"
var a2 = create("button")
a2.innerHTML = "2";
a2.style.backgroundColor = "light-dark(rgb(239, 239, 239), rgb(59, 59, 59));";
var a3 = create("button")
a3.innerHTML = "3";
var a4 = create("button")
a4.innerHTML = "4";
var a5 = create("button")
a5.innerHTML = "5";
var a6 = create("button")
a6.innerHTML = "6";
var a7 = create("button")
a7.innerHTML = "7";
var a8 = create("button")
a8.innerHTML = "8";
var a9 = create("button")
a9.innerHTML = "9";
var a10 = create("button")
a10.innerHTML = "10";
var a11 = create("button")
a11.innerHTML = "11";
var a12 = create("button")
a12.innerHTML = "12";
var a13 = create("button")
a13.innerHTML = "13";
var a14 = create("button")
a14.innerHTML = "14";
var a15 = create("button")
a15.innerHTML = "15";
var a16 = create("button")
a16.innerHTML = "16";
var a17 = create("button")
a17.innerHTML = "17";
var a18 = create("button")
a18.innerHTML = "18";
var a19 = create("button")
a19.innerHTML = "19";
var a20 = create("button")
a20.innerHTML = "20";
var a21 = create("button")
a21.innerHTML = "21";
var a22 = create("button")
a22.innerHTML = "22";
var a23 = create("button")
a23.innerHTML = "23";
var a24 = create("button")
a24.innerHTML = "24";
var a25 = create("button")
a25.innerHTML = "25";
var a26 = create("button")
a26.innerHTML = "26";
var a27 = create("button")
a27.innerHTML = "27";
var a28 = create("button")
a28.innerHTML = "28";
var a29 = create("button")
a29.innerHTML = "29";
var a30 = create("button")
a30.innerHTML = "30";
var a31 = create("button")
a31.innerHTML = "31";
var a32 = create("button")
a32.innerHTML = "32";
var a33 = create("button")
a33.innerHTML = "33";
var a34 = create("button")
a34.innerHTML = "34";
  

div3.append(afrst,aPrev,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34)
div.append(div2,div3)
document.body.append(div)

 var data = [
    {
      "id": "1",
      "name": "Lura Senger",
      "email": "Xander_Collier@yahoo.com"
    },
    {
      "id": "2",
      "name": "Wilburn Weber",
      "email": "Bennett_Kreiger11@yahoo.com"
    },
    {
      "id": "3",
      "name": "Tyrique Hahn",
      "email": "Juston.Altenwerth@yahoo.com"
    },
    {
      "id": "4",
      "name": "Lenny Bailey",
      "email": "Guiseppe_Hegmann@yahoo.com"
    },
    {
      "id": "5",
      "name": "Vladimir Keeling",
      "email": "Louisa_Walsh18@hotmail.com"
    },
    {
      "id": "6",
      "name": "Kellie Crona",
      "email": "Chandler_Abernathy@yahoo.com"
    },
    {
      "id": "7",
      "name": "Carolina White",
      "email": "Royal50@hotmail.com"
    },
    {
      "id": "8",
      "name": "Alfredo Conn",
      "email": "Clarabelle34@hotmail.com"
    },
    {
      "id": "9",
      "name": "Stan Shanahan",
      "email": "Lamar.McClure@hotmail.com"
    },
    {
      "id": "10",
      "name": "Marvin Fay",
      "email": "Osbaldo58@hotmail.com"
    },
    {
      "id": "11",
      "name": "Torrance Rau",
      "email": "Orin45@gmail.com"
    },
    {
      "id": "12",
      "name": "Harold Gutmann MD",
      "email": "Alyce.Stracke37@yahoo.com"
    },
    {
      "id": "13",
      "name": "Taryn Torphy",
      "email": "Dean_Breitenberg71@hotmail.com"
    },
    {
      "id": "14",
      "name": "Bryana Lang",
      "email": "Tatum.Ullrich@yahoo.com"
    },
    {
      "id": "15",
      "name": "Nyasia Green DDS",
      "email": "Dino83@gmail.com"
    },
    {
      "id": "16",
      "name": "Nasir Gerhold",
      "email": "Lilian_Bashirian8@hotmail.com"
    },
    {
      "id": "17",
      "name": "Raymundo Ritchie PhD",
      "email": "Antwan.Schoen15@yahoo.com"
    },
    {
      "id": "18",
      "name": "Delmer Marvin",
      "email": "Kiera62@yahoo.com"
    },
    {
      "id": "19",
      "name": "Rachel Wilkinson",
      "email": "Foster_Conroy@gmail.com"
    },
    {
      "id": "20",
      "name": "Gladys Howell",
      "email": "Constance.Labadie10@yahoo.com"
    },
    {
      "id": "21",
      "name": "Ciara Klocko",
      "email": "Harvey76@yahoo.com"
    },
    {
      "id": "22",
      "name": "Quentin O'Kon",
      "email": "Amely_Cummings2@yahoo.com"
    },
    {
      "id": "23",
      "name": "Ms. Gabriella Kunde",
      "email": "Lorenza_Cummerata@hotmail.com"
    },
    {
      "id": "24",
      "name": "Gerald Reilly",
      "email": "Lia_Konopelski@gmail.com"
    },
    {
      "id": "25",
      "name": "Brody Carter I",
      "email": "Colten.Wilderman90@hotmail.com"
    },
    {
      "id": "26",
      "name": "Alanis Klocko",
      "email": "Johathan.Champlin69@gmail.com"
    },
    {
      "id": "27",
      "name": "Caroline Miller",
      "email": "Delaney.Kozey74@gmail.com"
    },
    {
      "id": "28",
      "name": "Ms. Merritt McClure",
      "email": "Wendy.Zieme@gmail.com"
    },
    {
      "id": "29",
      "name": "Jovani Schoen",
      "email": "Norval_Zieme@hotmail.com"
    },
    {
      "id": "30",
      "name": "Berniece Bradtke",
      "email": "Okey.Fisher39@hotmail.com"
    },
    {
      "id": "31",
      "name": "Hanna Gottlieb",
      "email": "Edna62@hotmail.com"
    },
    {
      "id": "32",
      "name": "Christiana Bergnaum",
      "email": "Donnie.Paucek22@gmail.com"
    },
    {
      "id": "33",
      "name": "Reid Stehr",
      "email": "Hiram69@gmail.com"
    },
    {
      "id": "34",
      "name": "Evans Ward",
      "email": "Liliane72@hotmail.com"
    },
    {
      "id": "35",
      "name": "Miss Enos Davis",
      "email": "Kolby.Grady@hotmail.com"
    },
    {
      "id": "36",
      "name": "Mathew Lueilwitz",
      "email": "Mariah.Hagenes@yahoo.com"
    },
    {
      "id": "37",
      "name": "Romaine Robel",
      "email": "Sheila19@yahoo.com"
    },
    {
      "id": "38",
      "name": "Immanuel Aufderhar",
      "email": "Aileen32@hotmail.com"
    },
    {
      "id": "39",
      "name": "Julius Reilly Jr.",
      "email": "Santa89@yahoo.com"
    },
    {
      "id": "40",
      "name": "Linnea Borer",
      "email": "Jarrett_Hegmann2@hotmail.com"
    },
    {
      "id": "41",
      "name": "Misael Abernathy IV",
      "email": "Robbie42@yahoo.com"
    },
    {
      "id": "42",
      "name": "Mr. Gerda Jerde",
      "email": "Gustave36@hotmail.com"
    },
    {
      "id": "43",
      "name": "Easton Daugherty",
      "email": "Malcolm.Schuster11@hotmail.com"
    },
    {
      "id": "44",
      "name": "Leanna Gutkowski",
      "email": "Chelsea9@gmail.com"
    },
    {
      "id": "45",
      "name": "Rollin Trantow",
      "email": "Marques_Hickle26@gmail.com"
    },
    {
      "id": "46",
      "name": "Heaven Luettgen",
      "email": "Lonnie.Greenfelder95@hotmail.com"
    },
    {
      "id": "47",
      "name": "Gilda Huel",
      "email": "Stephania.Hintz@gmail.com"
    },
    {
      "id": "48",
      "name": "Javon Walker",
      "email": "Lamar_Bailey39@yahoo.com"
    },
    {
      "id": "49",
      "name": "Stewart King",
      "email": "Chasity_Jenkins82@gmail.com"
    },
    {
      "id": "50",
      "name": "Cortez Lueilwitz",
      "email": "Lelia.Mitchell43@gmail.com"
    },
    {
      "id": "51",
      "name": "Ora Kilback",
      "email": "Matt25@gmail.com"
    },
    {
      "id": "52",
      "name": "Lera Macejkovic",
      "email": "Jamal.Donnelly45@hotmail.com"
    },
    {
      "id": "53",
      "name": "Asa Gottlieb",
      "email": "Carolyne.Langosh@yahoo.com"
    },
    {
      "id": "54",
      "name": "Avery Nienow",
      "email": "Hudson_Bernhard47@yahoo.com"
    },
    {
      "id": "55",
      "name": "Dr. Katrine Ryan",
      "email": "Colten40@gmail.com"
    },
    {
      "id": "56",
      "name": "Florida Kulas",
      "email": "Alejandra_Bernhard@yahoo.com"
    },
    {
      "id": "57",
      "name": "Mauricio Gerlach",
      "email": "Vincenza_Gusikowski84@hotmail.com"
    },
    {
      "id": "58",
      "name": "Chadrick Simonis",
      "email": "Reymundo.Doyle@gmail.com"
    },
    {
      "id": "59",
      "name": "Beau Jenkins",
      "email": "Cletus65@hotmail.com"
    },
    {
      "id": "60",
      "name": "Camilla Cole",
      "email": "Eda48@yahoo.com"
    },
    {
      "id": "61",
      "name": "Abagail MacGyver",
      "email": "Jevon.Koch@hotmail.com"
    },
    {
      "id": "62",
      "name": "Ludwig Prohaska",
      "email": "Eldon_DuBuque37@yahoo.com"
    },
    {
      "id": "63",
      "name": "Berenice Hane",
      "email": "Lonnie3@gmail.com"
    },
    {
      "id": "64",
      "name": "Abel Durgan",
      "email": "Marlee.Weimann42@gmail.com"
    },
    {
      "id": "65",
      "name": "Tate Kuhlman",
      "email": "Hope31@yahoo.com"
    },
    {
      "id": "66",
      "name": "Mrs. Hermina Daniel",
      "email": "Murphy59@yahoo.com"
    },
    {
      "id": "67",
      "name": "Marcelino Nienow",
      "email": "Estefania_Dibbert97@hotmail.com"
    },
    {
      "id": "68",
      "name": "Raphaelle Connelly",
      "email": "Josie.Legros70@yahoo.com"
    },
    {
      "id": "69",
      "name": "Mina Heaney",
      "email": "Pete.Hermann79@hotmail.com"
    },
    {
      "id": "70",
      "name": "Jaida Torp",
      "email": "Jonatan82@yahoo.com"
    },
    {
      "id": "71",
      "name": "Megane Fadel",
      "email": "Dandre82@yahoo.com"
    },
    {
      "id": "72",
      "name": "Angelo Schimmel V",
      "email": "Frederic54@hotmail.com"
    },
    {
      "id": "73",
      "name": "Jaren Ferry DDS",
      "email": "Kristian.Kilback@yahoo.com"
    },
    {
      "id": "74",
      "name": "Annette O'Connell",
      "email": "Domenica.Christiansen@gmail.com"
    },
    {
      "id": "75",
      "name": "Elenor Rohan PhD",
      "email": "Alvera.Huel48@yahoo.com"
    },
    {
      "id": "76",
      "name": "Linnie Beier",
      "email": "Reece_Berge@gmail.com"
    },
    {
      "id": "77",
      "name": "Maybelle Lehner",
      "email": "Arlo.Hagenes@gmail.com"
    },
    {
      "id": "78",
      "name": "Hailie Haag",
      "email": "Edythe.Lind59@hotmail.com"
    },
    {
      "id": "79",
      "name": "Marcelina Schuppe",
      "email": "Kip.Cummerata77@gmail.com"
    },
    {
      "id": "80",
      "name": "Ezra Lang",
      "email": "Garret.Swaniawski@hotmail.com"
    },
    {
      "id": "81",
      "name": "Carey Kiehn",
      "email": "Sabrina70@gmail.com"
    },
    {
      "id": "82",
      "name": "Carole Aufderhar",
      "email": "Efrain.Schamberger77@hotmail.com"
    },
    {
      "id": "83",
      "name": "Fanny Beatty",
      "email": "Ewald28@yahoo.com"
    },
    {
      "id": "84",
      "name": "Mina Lubowitz",
      "email": "Vincenzo.Herman@gmail.com"
    },
    {
      "id": "85",
      "name": "Anabelle Thiel",
      "email": "Amely.Renner@hotmail.com"
    },
    {
      "id": "86",
      "name": "Gerry Homenick",
      "email": "Ada_Von54@hotmail.com"
    },
    {
      "id": "87",
      "name": "Domenico Maggio",
      "email": "Freeman.Stamm@yahoo.com"
    },
    {
      "id": "88",
      "name": "Mauricio Bradtke III",
      "email": "Alford83@yahoo.com"
    },
    {
      "id": "89",
      "name": "Bulah Yost III",
      "email": "Nicolas_Schimmel6@yahoo.com"
    },
    {
      "id": "90",
      "name": "Orville Dibbert DDS",
      "email": "Bryana_Herzog@yahoo.com"
    },
    {
      "id": "91",
      "name": "Autumn Osinski",
      "email": "Davin8@hotmail.com"
    },
    {
      "id": "92",
      "name": "Levi Gibson",
      "email": "Deangelo69@gmail.com"
    },
    {
      "id": "93",
      "name": "Reva McKenzie",
      "email": "Bret40@hotmail.com"
    },
    {
      "id": "94",
      "name": "Jensen Pfannerstill",
      "email": "Dax_Marquardt@hotmail.com"
    },
    {
      "id": "95",
      "name": "Tyrese Larson MD",
      "email": "Cecelia85@yahoo.com"
    },
    {
      "id": "96",
      "name": "Dayne Sanford",
      "email": "Tyrique_Waters16@hotmail.com"
    },
    {
      "id": "97",
      "name": "Jeramy Steuber",
      "email": "Catalina.Stehr24@yahoo.com"
    },
    {
      "id": "98",
      "name": "Madge Bogisich",
      "email": "Joey.Marquardt50@gmail.com"
    },
    {
      "id": "99",
      "name": "Casimer MacGyver",
      "email": "Julius.Bednar96@yahoo.com"
    },
    {
      "id": "100",
      "name": "Arlene Kassulke",
      "email": "Josiane_Smith@yahoo.com"
    }
  ];
var x
let p = 0;
var y;
afrst.onclick = function() {
    y = 1;
    generate(y)
   console.log(x)
}
aPrev.onclick = function() {
     var j = aPrev1(y)
     x = generate(j);
}
a2.onclick = function() {
    y = 2;
   generate(y)
}
a3.onclick = function() {
    y = 3
   generate(y) 
}
a4.onclick = function() {
     y = 4;
     generate(y)
}
a5.onclick = function() {
    y = 5
    generate(y)
}
a6.onclick = function() {
    y = 6;
     generate(y)
}
a7.onclick = function() {
    y = 7;
     generate(y)
    
}
a8.onclick = function() {
    y = 8;
   generate(y)
}
a9.onclick = function() {
    y = 9;
   generate(y)
}
a10.onclick = function() {
    y = 10;
   generate(y)
}
a11.onclick = function() {
    y = 11;
    generate(y)
}
a12.onclick = function() {
    y = 12;
     generate(y)
}
a13.onclick = function() {
    y = 13;
   generate(y)
}
a14.onclick = function() {
    y = 14;
     generate(y)
}
a15.onclick = function() {
    y = 15;
     generate(y)
}
a16.onclick = function() {
    y = 16;
     generate(y)
}
a17.onclick = function() {
    y = 17;
     generate(y)
}
a18.onclick = function() {
    y = 18;
     generate(y)
}
a19.onclick = function() {
    y = 19;
     generate(y)
}
a20.onclick = function() {
    y = 20;
     generate(y)
}
a21.onclick = function() {
    y = 21;
     generate(y)
}
a22.onclick = function() {
    y = 22;
     generate(y)
}
a23.onclick = function() {
    y = 23;
     generate(y)
}
a24.onclick = function() {
    y = 24;
     generate(y)
}
a25.onclick = function() {
    y = 25;
     generate(y)
}
a26.onclick = function() {
    y = 26;
     generate(y)
}
a27.onclick = function() {
    y = 27;
     generate(y)
}
a28.onclick = function() {
    y = 28;
     generate(y)
}
a29.onclick = function() {
    y = 29
     generate(y)
}
a30.onclick = function() {
    y = 30;
     generate(y)
}
a31.onclick = function() {
    y = 31;
     generate(y)
}
a32.onclick = function() {
    y = 32;
     generate(y)
}
a33.onclick = function() {
    y = 33;
     generate(y)
}
a34.onclick = function() {
    y = 34;
     generate(y)
}
function generate(val) {
    if(val==34) {
      td4.innerHTML = data[99].id
      td5.innerHTML = data[99].name
      td6.innerHTML = data[99].email;
      td7.innerHTML = " "
      td8.innerHTML = " "
      td9.innerHTML = " "
      td10.innerHTML = " "
      td11.innerHTML = " "
      td11.innerHTML = " "
    }
    else {
    var t = (val * 3)-1;
    td4.innerHTML = data[t-2].id
    td5.innerHTML = data[t-2].name
    td6.innerHTML = data[t-2].email;
    td7.innerHTML = data[t-1].id
    td8.innerHTML = data[t-1].name
    td9.innerHTML = data[t-1].email
    td10.innerHTML = data[t].id
    td11.innerHTML = data[t].name
    td12.innerHTML = data[t].email;
    }
}
  function aPrev1(val1) {
      arr = [{afrst:1},{a2:2},{a3:3},{a4:4},{a5:5},{a6:6},{a7:7},{a8:8},{a9:9},{a10:10},{a11:11},{a12:12},
          {a13:13},{a14:14},{a15:15},{a16:16},{a17:17},{a18:18},{a19:19},{a20:20},{a21:21},{a22:22},{a23:23},{a24:24},{a25:25},{a26:26},{a27:27},{a28:28},{a29:29},{a30:30},{a31:31},{a32:32},{a33:33},{a34:34}]
          var p;
          for(i=0;i<arr.length;i++) {
            if(Object.values(arr[i])==y) {
                p = Object.values(arr[i-1])
              break;
            }
          }
          return p;
        }