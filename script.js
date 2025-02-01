const fetchData = () => {

    const data = [{
        schoolName: "ST Joseph Public School Amba, Aurangabad",
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
        schoolName: "ST Ignatius School | Aurangabad",
        schoolDesc: "Established in 1994, St. Ignatius School, Aurangabad is a co-educational Secondary School open to all, irrespective of religion, caste or community.",
        schoolImg: "https://www.joonsquare.com/usermanage/image/business/st-ignatius-school-aurangabad-bihar-10984/st-ignatius-school-aurangabad-bihar-st-ignatius-high-school-1.jpg",
        schoolLink: "https://stignatius.in/"

    },
    {
        schoolName: "D.A.V. Public School, Daud Nagar",
        schoolDesc: "DAV Public School, Daudnagar was established in the year 1993 by untiring effort of the then S.D.O., C.O. And other local intelligentsia.",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPv8feQEjRt3k9Vqt1lLfpIeboOBc68_SbyA&s",
        schoolLink: "http://davdaudnagar.in/"

    },

    {
        schoolDesc: "Uinversal High School is an English medium institution that caters to students from Nursery to 10th standard. Establised in hthe year 2020, the school is committed to providing a well-rounded education that combines academic excellence with holistic development. ",
        schoolImg: "https://www.edustoke.com/assets/uploads-new/693aa8b3-6c34-4d80-95e7-5749c1b0db5c.png",
        schoolName: "Universal High School Aurangabad, ('bihar')",
        schoolLink: "https://universalhighschool.in/"
    },

     

    {
        schoolName: "Jain International School, Maliwad Aurangabad",
        schoolDesc: "Jain International School in Aurangabad, Bihar, is another prominent private institution that provides quality education to students. It is part of the larger Jain Group of Institutions, which is known for its commitment to academic excellence, holistic development, and a strong emphasis",
        schoolImg: "https://www.skooladmission.com/upload/school/0051-school.png",
        schoolLink: "https://www.jisa.ac.in/"
    },




    {
        schoolName: "Poodar International School | Aurangabad, ('bihar') ",
        schoolDesc: "Podar International Schools was awarded as the Most Respected Education Brand in India 2024-25 by Education World",
        schoolImg: "https://www.edustoke.com/assets/uploads-new/ab091e46-d9d9-4979-9caa-ba2d2442f854.JPG",
        schoolLink: "https://www.podareducation.org/school/aurangabad"
    },
    {
        schoolName: "Nath valley School | Aurangabad, ('bihar')",
        schoolDesc: "The school aims to promote EXCELLENCE IN EDUCATION in every sense of the term. The School is set aesthetically in a 20 acre campus.It is approximately 5 kms from the Railway Station, near the hills surrounding the historical city of Aurangabad. A lake and a majestic mountain form its southern backdrop",
        schoolImg: "https://i.ytimg.com/vi/E8IAY7Eu3n4/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AH-CYAC0AWKAgwIABABGE4gZShIMA8=&rs=AOn4CLBvbV4MC938-U7VwLSEg2exROV4Eg",
        schoolLink: "https://www.nathvalleyschool.com/"

    },
    {
        schoolName: "Woodridge High School",
        schoolDesc: "Woodridge High School, located in Aurangabad, Bihar, is known for providing quality education and fostering a holistic development environment for students.",
        schoolImg: "https://images.uniapply.com/uploads/college/image/500/4449/webp/Woodridge_High_School_5795_Building_1.webp",
        schoolLink: "https://whs.woodridge.k12.oh.us/"

    },
    {
        schoolName: "Era International School | Aurangabad ",
        schoolDesc: "Era International School, located in Aurangabad, Bihar, is a private educational institution that aims to provide quality education from primary to secondary levels.",
        schoolImg: "https://th.bing.com/th/id/OIP.YuMvlFwT0V5T-l7AryiQjwHaEc?w=240&h=180&c=7&r=0&o=5&pid=1.7",
        schoolLink: "https://school.careers360.com/schools/era-international-school-bhalgaon-aurangabad"

    },
 

     
    {
        schoolName: "Ambika Public School. aurangabad, bihar",
        schoolDesc: "Ambika Public School in Aurangabad-bihar is one of the leading businesses in the CBSE Schools. Also known for Schools, CBSE Schools, Public Schools and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Ambika Public School, Aurangabad-bihar",
        schoolImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVRCbceKTgleRkJx8FFvdu9C0BNaT5btaJsA&s",
        schoolLink: "https://www.justdial.com/Aurangabad-Bihar/Ambika-Public-School-Police-Line-Aurangabad-Bihar-Ho/9999P6186-6186-140529120842-G1U8_BZDET"

    },

    {
        schoolName: "Anugray InterSchool-old-gt-road Aurangabad ",
        schoolDesc: " Anugrah Inter School located at Old GT  Road, Aurangabad was established in the year 1915.",
        schoolImg: "https://lh3.googleusercontent.com/p/AF1QipNtzP3hmcwhbyIqDb6JE6WevFb_e60CxJUhbJOT=s680-w680-h510",
        schoolLink: " https://school.careers360.com/schools/anugrah-inter-school-old-gt-road-aurangabad"

    },

           

    ]

    const schoolCards = document.getElementById("school-cards");
    let content = "" 
    data.forEach((e) => {
        content += `
         
      <div   data-aos="zoom-in-up"
            class="shadow-xl max-w-lg cursor-pointer h-[700px] w-[900px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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

                <p class="2xl mb-4 font-bold text-green-500">AFFILIATED TO CBSE </p>
                <a target="_blank" href=${e.schoolLink}"
                    class=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Visit more
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
