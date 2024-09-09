"use client";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
const TopNav = () => {
  return (
    <div className="bg-primary-pink p-4 flex items-center justify-end">
      <div className='flex gap-1 '>
        <Link href='https://www.facebook.com/bookpinks'>
          <FacebookIcon className='text-blue-800' />
        </Link>
        <Link href='https://twitter.com/bookpinks'>
          <TwitterIcon className='text-blue-500' />
        </Link>
        <Link href='https://www.instagram.com/bookpinks1/'>
          <InstagramIcon />
        </Link>
      </div>
    </div>
  )
}

export default TopNav;