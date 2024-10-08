import { Inter, Poppins, Raleway, Montserrat, Playfair_Display, Eagle_Lake, Caudex, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Header from "@/components/molecules/Header/Header";
import TopNav from "@/components/molecules/TopNav/TopNav";
import Footer from "@/components/molecules/Footer/Footer";
import AOSInitializer from "@/components/atoms/AOSInitializer/AOSInitializer";


const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-raleway',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-montserrat',
})

const playfairDisplay = Playfair_Display({
  weight: ['400', '500', '700'], // Specify weights
  subsets: ['latin'],
  variable: '--font-playfair', // Define a custom property for Tailwind
});

const eagleLake = Eagle_Lake({
  weight: ['400'], // Specify weights
  subsets: ['latin'],
  variable: '--font-eaglelake', // Define a custom property for Tailwind
});

const caudex = Caudex({
  weight: ['400', '700'], // Specify weights
  subsets: ['latin'],
  variable: '--font-caudex',
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export const roboto_slab = Roboto_Slab({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto_slab',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body id="__next" className={`${poppins.variable} ${raleway.variable} ${inter.className} ${montserrat.variable} ${playfairDisplay.variable} ${eagleLake.variable}  ${caudex.variable} ${roboto_slab.variable} font-sans`}>
        <AOSInitializer />
        <TopNav />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
