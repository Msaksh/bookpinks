import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CampaignIcon from '@mui/icons-material/Campaign';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import '@fortawesome/fontawesome-free/css/all.min.css';
import PlansCard from "@/components/atoms/plansCard/plansCard.";

const MyComponent = () => (
  <i className="fas fa-pen-nib"></i>
);

const plansDetail2 =
{
  id: 1,
  title: "Basic",
  promotion: "25 Day Promotion",
  originalPrice: 45,
  discountedPrice: 29,
  discount: "30% OFF",
  features: [
    { name: "Featured Book Listing", included: true },
    { name: "35k+ Subscriber", included: true },
    { name: "50 Tweets", included: true },
    { name: "50 Facebook Post", included: true },
    { name: "25 Post Instagram", included: true },
    { name: "Per Day 1 Instagram Story", included: false },
    { name: "Customized Images", included: false },
  ],
  buttonLabel: "Click Here",
  bg: "#f27474"
}

const plansDetail = [
  {
    id: 1,
    title: "Basic",
    promotion: "25 Day Promotion",
    originalPrice: 45,
    discountedPrice: 29,
    discount: "30% OFF",
    features: [
      { name: "Featured Book Listing", included: true },
      { name: "35k+ Subscriber", included: true },
      { name: "50 Tweets", included: true },
      { name: "50 Facebook Post", included: true },
      { name: "25 Post Instagram", included: true },
      { name: "Per Day 1 Instagram Story", included: false },
      { name: "Customized Images", included: false },
    ],
    buttonLabel: "Click Here",
    bg: "#f27474"
  },
  {
    id: 2,
    title: "Premium",
    promotion: "50 Day Promotion",
    originalPrice: 75,
    discountedPrice: 49,
    discount: "30% OFF",
    features: [
      { name: "Featured Book Listing", included: true },
      { name: "62k+ Subscriber", included: true },
      { name: "150 Tweets", included: true },
      { name: "100 Facebook Post", included: true },
      { name: "50 Post Instagram", included: true },
      { name: "Per Day 1 Instagram Story", included: true },
      { name: "Customized Images", included: true },
    ],
    buttonLabel: "Click Here",
    bg: "#bd9703"
  },
  {
    id: 3,
    title: "Free & Discounted Book",
    promotion: "20 Day Promotion",
    originalPrice: 30,
    discountedPrice: 21,
    discount: "30% OFF",
    features: [
      { name: "Featured Book Listing", included: true },
      { name: "50k+ Subscriber", included: true },
      { name: "40 Tweets", included: true },
      { name: "40 Facebook Post", included: true },
      { name: "20 Post Instagram", included: true },
      { name: "Per Day 1 Instagram Story", included: false },
      { name: "Customized Images", included: false },
    ],
    buttonLabel: "Click Here",
    bg: "#e61919"
  },
  // You can add more plans similarly
];



const Service = () => {
  return (
    <Box >
      <Box className='bg-[#ffde71] flex flex-col items-center gap-2 p-4'>
        <Typography className="font-eagleLake text-[20px] italic font-bold">Exclusive Limited-Time Offer: Enjoy Extra 10% Off! Unlock Special Savings Before Time Runs Out!!!</Typography>
        <Image className="my-4" src={'https://bookpinks.com/wp-content/uploads/2024/06/10-of.png'} unoptimized width={137} height={100} alt="discount" />
        <Typography className="font-poppins text-[20px] text-[#444444] font-semibold">Use This Coupon Code - SMMR10</Typography>
      </Box>

      <Box className="bg-[url('https://bookpinks.com/wp-content/uploads/2023/10/rm309-adj-0555-min-1-jpg.webp')] bg-cover	bg-center	 min-h-screen py-20">
        <Typography className="text-4xl text-[#0B0B0B] font-caudex font-bold text-center">Book Pink's marketing tools assist you in accomplishing your goals.</Typography>

        <Box className=" py-16">
          <Box className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Box className="text-center mb-20 ">
              <Box className="flex justify-center items-center h-[63px] w-[64px] p-5 rounded-full border-[3px] group hover:border-teal-300 duration-300 border-teal-600 mx-auto mb-4">
                <CampaignIcon className=" text-teal-600 text-3xl group-hover:text-teal-300 duration-300" />
              </Box>
              <h3 className="text-lg font-semibold text-gray-900">Social Channel
              </h3>
              <Typography className="mt-2 text-base text-gray-600 text-start font-poppins">
                The way books are marketed and promoted has been significantly impacted by social media expansion. The emergence of online entertainment resulted in a shift in the way that books are promoted. We examined carefully how social media platforms like Facebook, Twitter, and Instagram can generate writer marks and engage readers on a personal level. We offer authors innovative book marketing ideas on various social media platforms from a distinct angle, in case they are facing difficulties in marketing their books on these sites.
              </Typography>
            </Box>

            <Box className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              <Box className="text-center flex items-center gap-5">
                <Box className="flex justify-center items-center h-[63px] w-[64px] p-5 rounded-full border-[3px] group hover:border-teal-300 duration-300 border-teal-600 mx-auto mb-4">
                  <i className="fas fa-list-alt text-teal-600 text-xl group-hover:text-teal-300 duration-300"></i>
                </Box>
                <Box>
                  <h3 className="text-lg font-semibold text-gray-900 text-start">Book Listing</h3>
                  <Typography className="mt-2 text-base text-gray-600 text-start font-poppins">
                    For an entire year, your book will be displayed on our website with a link to purchase it. Because we believe books have the power to enhance and transform our lives, we are dedicated to fostering a love of reading and literature.
                  </Typography>
                </Box>
              </Box>

              <Box className="text-center  flex items-center gap-5">
                <Box className="flex justify-center items-center h-[63px] w-[64px] p-5 rounded-full border-[3px] group hover:border-teal-300 duration-300 border-teal-600 mx-auto mb-4">
                  <i className="fas fa-mail-bulk text-teal-600 text-xl group-hover:text-teal-300 duration-300"></i>
                </Box>
                <Box>
                  <h3 className="text-lg font-semibold text-gray-900  text-start">Email Marketing</h3>
                  <Typography className="mt-2 text-base text-gray-600 text-start font-poppins">
                    From our viewpoint, our clients are the hosts of a party, and they are the invited guests. Ensuring optimal customer experience is our top priority. Our team of professionals is available 24/7,  we are always prepared to provide our clients the greatest assistance. Maintaining a long-term, positive relationship with our customers is our primary objective.
                  </Typography>
                </Box>
              </Box>

              <Box className="text-center flex items-center gap-5">
                <Box className="flex justify-center items-center h-[63px] w-[64px] p-5 rounded-full border-[3px] group hover:border-teal-300 duration-300 border-teal-600 mx-auto mb-4">
                  <i className="fas fa-pen-nib text-teal-600 text-xl group-hover:text-teal-300 duration-300"></i>
                </Box>
                <Box>
                  <h3 className="text-lg font-semibold text-gray-900 text-start">Content Writing</h3>
                  <Typography className="mt-2 text-base text-gray-600 text-start font-poppins">
                    We offer a distinctive writing approach that will attract readers' attention and compel them to keep reading your work by emphasizing important concepts. We are exchanging pearls of wisdom from experienced writers in this vibrant community. Let us assist you in unlocking the content.
                  </Typography>
                </Box>
              </Box>

              <Box className="text-center flex items-center gap-5">
                <Box className="flex justify-center items-center h-[63px] w-[64px] p-5 rounded-full border-[3px] group hover:border-teal-300 duration-300 border-teal-600 mx-auto mb-4">
                  <i className="fab fa-rocketchat text-teal-600 text-xl group-hover:text-teal-300 duration-300 "></i>
                </Box>
                <Box>
                  <h3 className="text-lg font-semibold text-gray-900 text-start">Customer Support 24*7</h3>
                  <Typography className="mt-2 text-base text-gray-600 text-start">
                    We regard our clients as guests whom we have invited to a party, and we are the hosts. Enhancing the customer experience is our responsibility. With a team of professionals on call 24/7, we are always prepared to offer our clients with the best assistance. Our main goal is to maintain a healthy, long-lasting relationship with our clients.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className='flex items-center justify-center mt-20'>
            <Button className="text-base font-caudex bg-[#f50673] text-white rounded-full px-14 py-2  
            shadow-[5px_5px_13px_#e92a81]">GET STARTED</Button>
          </Box>
        </Box>

      </Box>

      <Box className='bg-[radial-gradient(at_bottom_right,_#FFFFFF_0%,_#0DA8AA_53%)] min-h-screen py-20 '>
        <Typography className="text-[33px] text-center font-caudex text-white font-semibold">Promotion strategy in rural marketing</Typography>
        <Box className='flex items-center justify-center gap-2 mt-8 mb-10'>
          <Box className='w-20 h-[2px] bg-[#ffb700]'></Box>
          <i className="fa fa-star text-[20px] text-[#ffb700]"></i>
          <Box className='w-20 h-[2px] bg-[#ffb700]'></Box>
        </Box>
        <Box className='max-w-[1200px] mx-auto px-9 py-3'>
          <Box className='flex items-center bg-white max-w-7xl rounded-2xl px-12 py-10 gap-5 '>
            <Box className='mr-10 border-[3px] p-6 rounded-full border-[#EB008A]'>
              <i className="fa fa-globe text-[50px] text-[#EB008A]"></i>

            </Box>
            <Box>
              <Typography className="text-xl text-black font-poppins font-semibold mb-5">Global Impact</Typography>
              <Typography className="text-base text-[#030303] font-poppins font-normal">Global Impact is a word used to describe the extent to which your book has resonated, inspiring profound emotions, sparking debates, and leaving an enduring mark on people's thoughts and cultures across the world.</Typography>

            </Box>
          </Box>
        </Box>
        <Box className='max-w-[1200px] mx-auto px-9 py-3'>
          <Box className='flex items-center bg-white max-w-7xl rounded-2xl px-12 py-10 gap-5 '>

            <Box>
              <Typography className="text-xl text-black font-poppins font-semibold mb-5">Email List
              </Typography>
              <Typography className="text-base text-[#030303] font-poppins font-normal">We maintain a database of readers' email addresses so that we may interact with them directly. Subscribers receive news, promotions, and updates about the publication of your books, resulting in readers engagement.</Typography>
            </Box>
            <Box className='ml-10 border-[3px] p-6 rounded-full border-[#EB008A]'>
              <i className="fa fa-table-list text-[50px] text-[#EB008A]"></i>
            </Box>
          </Box>
        </Box>
        <Box className='max-w-[1200px] mx-auto px-9 py-3'>
          <Box className='flex items-center bg-white max-w-7xl rounded-2xl px-12 py-10 gap-5 '>
            <Box className='mr-10 border-[3px] p-6 rounded-full border-[#EB008A]'>
              <i className="fa fa-book-open-reader text-[50px] text-[#EB008A]"></i>
            </Box>
            <Box>
              <Typography className="text-xl text-black font-poppins font-semibold mb-5">Engage Readers</Typography>
              <Typography className="text-base text-[#030303] font-poppins font-normal">With a significant global community of dedicated Instagram and Twitter followers, we're offering an excellent opportunity to boost your readership. Increase the success of your work by partnering with writers and distributors along with creative book promotion approaches.</Typography>
            </Box>
          </Box>
        </Box>
        <Box className='max-w-[1200px] mx-auto px-9 py-3'>
          <Box className='flex items-center bg-white max-w-7xl rounded-2xl px-12 py-10 gap-5 '>

            <Box>
              <Typography className="text-xl text-black font-poppins font-semibold mb-5">Target Keyword </Typography>
              <Typography className="text-base text-[#030303] font-poppins font-normal">In order to boost search engine visibility, generate relevant traffic, and improve discoverability, we strategically target words or phrases that we believe are relevant to your books and readers and use them to optimize your website.
              </Typography>
            </Box>
            <Box className='ml-10 border-[3px] p-6 rounded-full border-[#EB008A]'>
              <i className="fa fa-key text-[50px] text-[#EB008A]"></i>
            </Box>
          </Box>
        </Box>
        <Box className='max-w-[1200px] mx-auto px-9 py-3'>
          <Box className='flex items-center bg-white max-w-7xl rounded-2xl px-12 py-10 gap-5 '>
            <Box className='mr-10 border-[3px] p-6 rounded-full border-[#EB008A]'>
              <i className="fa fa-images text-[50px] text-[#EB008A]"></i>

            </Box>
            <Box>
              <Typography className="text-xl text-black font-poppins font-semibold mb-5">Visual Allure
              </Typography>
              <Typography className="text-base text-[#030303] font-poppins font-normal">We offer Visual allure which highlights the visually appealing and captivating aspects of your book, attracting readers with striking cover designs, graphics, and imagery that elevate the reading experience overall.

              </Typography>

            </Box>
          </Box>
        </Box>
      </Box>

      <section>

        <Box className='bg-black'>
          <Box className='max-w-[1200px] mx-auto flex items-center '>
            <Box className="w-2/5">
              <img src="https://bookpinks.com/wp-content/uploads/2024/06/Untitled-1.png" width={100} height={100} className="w-full h-full" alt="discount" />
            </Box>
            <Box className='w-3/5 min-h-[200px] p-10 relative'>
              <Typography className="font-eagleLake font-semibold text-4xl text-center mb-4 text-[#E4322B] italic">This Summer
              </Typography>
              <Typography className="font-caudex font-semibold text-xl text-center mb-4 text-[#F3FFF1]">Exclusive Limited-Time Offer: Enjoy Extra 10% Off! Unlock Special Savings Before Time Runs Out!!!
              </Typography>
              <Box>
                <Typography className="font-eagleLake text-xl font-semibold text-center text-[#F3FFF1]">
                  “Hurry, limited-time offer!”
                </Typography>
                <Typography className="font-eagleLake text-xl text-center text-[#E4322B]">
                  Don't Miss Out
                </Typography>
              </Box>


              <Box>
                <img src="https://bookpinks.com/wp-content/uploads/2024/06/pngegg10.png" width={100} height={100} alt="discount" />
              </Box>
            </Box>
          </Box>
        </Box>

        <Box className='bg-[#ffde71] p-2'>
          <Typography className="text-2xl text-[#444444] font-semibold font-poppins text-center">
            Use This Coupon Code - SMMR10
          </Typography>
        </Box>

        <Box className="min-h-screen bg-cover bg-fixed bg-[url('https://bookpinks.com/wp-content/uploads/2023/09/pi%CC%87rem-karaka-jpg.webp')]">
          <Box className='py-20 max-w-[1200px] mx-auto'>
            <Typography className="text-white text-[42px] font-caudex font-semibold text-center">
              Our Affordable Price
            </Typography>
            <Box className='flex items-center justify-center mb-20'>
              <Box className='flex flex-col items-center '>
                <Box className='w-12 h-1 bg-[#f2295b] my-4'></Box>
                <Typography className="text-center text-white font-poppins">One-Time Payment. Book <br /> your slot now.</Typography>
              </Box>
            </Box>

            <Grid container spacing={3}>
              {plansDetail.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <PlansCard plan={item} />
                </Grid>

              ))}

              {/* <Grid item xs={12} md={4}>
                <PlansCard plan={plansDetail2} />
              </Grid> */}

            </Grid>

          </Box>
        </Box>
      </section>
    </Box>
  )
}

export default Service;