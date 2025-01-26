const fetchData = () => {

    const data = [{
        schoolName: "ST Joseph publi school Amba, Aurangabad",
        schoolDesc: "This School imparts education with a mission to create intelligent, enterprising and dynamic persons with immense vitality and passion to   explore and envolve..",
        schoolImg: "https://yt3.googleusercontent.com/HE49947B9wUhIrY22LSrPgzR9iVpmpDe4Lju8WwsABDa0AdS3PS40UzOlZX0XyoVtn0HcJE5=s900-c-k-c0x00ffffff-no-rj",
        schoolLink: "https://amanbro123922.github.io/school/#"

    },

    {
        schoolName: "Lord Buddha Public School Aurangabad",
        schoolDesc: "Lord Buddha Public School is one of the most prestigious schools in Bihar. Founded as a Public School in 1996 in Aurangbad, it is a private institution run by the Lord Buddha Educational Development Foundation Aurangabad .",
        schoolImg: "https://www.lbpsaurangabad.in/cntrl/sp/3992WhatsApp%20Image%202023-09-02%20at%207.47.50%20AM.jpeg",
        schoolLink: "https://www.lbpsaurangabad.in/"

    },

    {
        schoolName: "Anugray InterSchool-old-gt-road Aurangabad ",
        schoolDesc: " Anugrah Inter School located at Old GT  Road, Aurangabad was established in the year 1915.",
        schoolImg: "https://lh3.googleusercontent.com/p/AF1QipNtzP3hmcwhbyIqDb6JE6WevFb_e60CxJUhbJOT=s680-w680-h510",
        schoolLink: " https://school.careers360.com/schools/anugrah-inter-school-old-gt-road-aurangabad"

    },
    {
        schoolName: "Kendriya Vidyalay Aurangabad | Bihar",
        schoolDesc: "Kendriya Vidyalaya, Aurangabad was stablished in 2010 under the patronage of Kendriya Vidyalaya Sangthan, New Delhi",
        schoolImg: "https://cdnbbsr.s3waas.gov.in/s3kv0439806ef05ce4332613717e0f72d5/uploads/2024/09/2024100523.jpg",
        schoolLink: "https://aurangabad.kvs.ac.in/"

    },

    {
        schoolName: "D.A.V. Public School, Daud Nagar",
        schoolDesc: "DAV Public School, Daudnagar was established in the year 1993 by untiring effort of the then S.D.O., C.O. And other local intelligentsia.",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv8feQEjRt3k9Vqt1lLfpIeboOBc68_SbyA&s",
        schoolLink: "http://davdaudnagar.in/"

    },
    {
        schoolName: "Ambika Public School. aurangabad, bihar",
        schoolDesc: "Ambika Public School in Aurangabad-bihar is one of the leading businesses in the CBSE Schools. Also known for Schools, CBSE Schools, Public Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Ambika Public School, Aurangabad-bihar",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRCbceKTgleRkJx8FFvdu9C0BNaT5btaJsA&s",
        schoolLink: "https://www.justdial.com/Aurangabad-Bihar/Ambika-Public-School-Police-Line-Aurangabad-Bihar-Ho/9999P6186-6186-140529120842-G1U8_BZDET"

    }

    ]

    const schoolCards = document.getElementById("school-cards");
    let content = ""
    data.forEach((e) => {
        content += `
         
      <div
            class="max-w-lg h-[700px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a target="_blank" href=  ${e.schoolLink} >
                <img class="rounded-t-lg h-[400px] w-full"
                    src= ${e.schoolImg}
                    alt="" />
            </a>
            <div class="p-5">
                <a target="_blank" href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> ${e.schoolName} </h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${e.schoolDesc} </p>

                <p class="2xl mb-4 font-bold text-green-500">APPLICATED TO CBSE NEW DELHI</p>
                <a target="_blank" href=${e.schoolLink}"
                    class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>
     `
    })

   schoolCards.innerHTML = content
}



document.addEventListener("DOMContentLoaded", fetchData);
