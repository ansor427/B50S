//let namaSiswa1 = "Rizqul"
//let namaSiswa2 = "Putra"
//let namaSiswa3 = "Joko"

//console.log(namaSiswa1)
//console.log(namaSiswa2)
//console.log(namaSiswa3)
//Aray
//let namaSiswa = ["Rizqul","Ptra", "Joko"]
//console.log(namaSiswa);

//let nama = "ansor";
//let alamat = "cienteng";
//let umur = "20";

//console.log(nama);
//console.log(alamat);
//console.log(umur);

//let dataPersonal = {
   // nama: "babang",
  //  alamat: "Bandung",
   // umur: "20"
//}
//let dataPersonal = {
   // nama: "ansor",
    //alamat: "Bandung",
    //umur: "20"
//}
//let dataPersonal = {
//    nama: "adalah",
  //  alamat: "Bandung",
    //umur: "20"
//}
//console.log(dataPersonal);

//mk
/*let dataSiswa = [
    {
        nama: "ansor",
        alamat: "Bandung",
        umur: 20,
    },
    {
        nama: "ayawelah",
        alamat: "Bandung",
        umur: 20,
    },
    {
        nama: "pokonamah",
        alamat: "Bandung",
        umur: 20,
    },
];
console.log(dataSiswa);
console.log(dataSiswa[1]);
console.log(dataSiswa[2]);

let dataPersonal = 
    {
        nama: "ansor",
        alamat: "Bandung",
        umur: 20,
    };
console.log(dataPersonal);*/

// fungsi push memasukan data ke aray
/*let data = [];

function addData(e) {
    e.
}
*/
let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar image dapat ditampilkan
  image = URL.createObjectURL(image[0]);
  //   console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt: new Date(),
    author: "Muhamad Ansor",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < dataBlog.length; index++) {
    console.log(dataBlog[index]);

    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="" />
            </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Delete Post</button>
                </div>
                <h3>
                    <a target="_blank" href="blog-detail.html">${dataBlog[index].title}</a>
                </h3>
                <div class="detail-blog-content">
                    ${dataBlog[index].postAt} | ${dataBlog[index].author}
                </div>
                <p>${dataBlog[index].content}</p>
                <div style="float:right; margin:10px;">
                  <p style="font-size:15px; color:grey;">${getDistanceTime(
                    dataBlog[index].postAt
                  )}</p>
                </div>
            </div>
        </div>
    `;
  }
}

function getFullTime(time) {
    // let time = new Date();
    // console.log(time);
  
    let monthName = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    // console.log(monthName[4]);
  
    let date = time.getDate();
    // console.log(date);
  
    let monthIndex = time.getMonth();
    // console.log(monthName[monthIndex]);
  
    let year = time.getFullYear();
    // console.log(year);
  
    let hours = time.getHours();
    let minutes = time.getMinutes();
  
    if (hours <= 9) {
      hours = "0" + hours;
    } else if (minutes <= 9) {
      minutes = "0" + minutes;
    }
  
    // 4 Oct 2023 09:30 WIB
    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
  }
  
  function getDistanceTime(time) {
    let timeNow = new Date();
    let timePost = time;
  
    let distance = timeNow - timePost;
    console.log(distance);
  
    let milisecond = 1000; // 1000 milisecond = 1 detik
    let secondInHours = 3600; // 3600 detik = 1 jam
    let hoursInDays = 24; // 24 jam = 1 hari
  
    let distanceDay = Math.floor(
      distance / (milisecond * secondInHours * hoursInDays)
    );
    let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
    let distanceMinutes = Math.floor(distance / (milisecond * 60));
    let distanceSeconds = Math.floor(distance / milisecond);
  
    if (distanceDay > 0) {
      return `${distanceDay} day ago`;
    } else if (distanceHours > 0) {
      return `${distanceHours} hour ago`;
    } else if (distanceMinutes > 0) {
      return `${distanceMinutes} minute ago`;
    } else {
      return `${distanceSeconds} second ago`;
    }
  }
  
  setInterval(function () {
    renderBlog();
  }, 3000);
  // 1000 = 1 deti



