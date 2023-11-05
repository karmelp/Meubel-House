import Hero from '../../ui/components/Hero';
import InfoSection from '../../ui/components/InfoSection';
import Image from 'next/image';
import Link from 'next/link';
import thumbnail from '@/public/post1.jpeg'
import admin from '@/public/dashicons_admin-users.svg'
import date from '@/public/uis_calender.svg'
import category from '@/public/ci_tag.svg'
import search from '@/public/akar-icons_search.svg'
import './blog.scss';

export default async function Blog() {
  // const blogPosts = await fetch(`http://localhost:3001/blogPosts`, {
  //   cache: "no-store",
  // });

  // const data = await blogPosts.json();

  const breadcrumbs = [
    { text: 'Home', link: '/' },
    { text: 'Blog', link: '/blog' },
  ];

  return (
    <div className="blog-page">
      <Hero pageTitle="Blog" breadcrumbs={breadcrumbs} />

      <div className="blog-section">
        <div className="blog-posts">
          {/* {data.map((post: any) => (
            <div key={post.id} className="blog-card">
              <h2>{post.title}</h2>
            </div>
          ))} */}
          <div className="post">
            <Image src={thumbnail} alt='post' className='thumbnail'/>
            <div className='post-content'>
              <div className="meta">
                <div className="item">
                  <Image src={admin} alt='Author' />
                  Admin
                </div>
                <div className="item">
                  <Image src={date} alt='Date' />
                  14 Oct 2022
                </div>
                <div className="item">
                  <Image src={category} alt='Category' />
                  Wood
                </div>
              </div>
              <div className="content">
                <h6 className="title">Going all-in with millennial design</h6>
                <div className="excerpt">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
                </div>
              </div>
              <Link href="#">
                Read more
              </Link>
            </div>
          </div>
          
        </div>
        <div className="blog-navi">
          <div className="nav">
            <div className="search-bar">
              <input type="text" />
              <Image src={search} alt='Icon' className='search-icon' />
            </div>
            <div className="categories">
              <div className='nav-heading'>Categories</div>
              <div className="cats">
                <Link href="#" className="category">
                  <p>Crafts</p>
                  <p>2</p>
                </Link>
                <Link href="#" className="category">
                  <p>Design</p>
                  <p>8</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="recent">
            <div className='nav-heading'>Recent Posts</div>
          </div>
        </div>
      </div>

      <InfoSection />
    </div>
  );
}