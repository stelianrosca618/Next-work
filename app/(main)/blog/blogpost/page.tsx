import Image from "next/image";
import Blog1 from "@/public/imgs/home/Blog1.png";
import Blog2 from "@/public/imgs/home/Blog2.png";
import Blog3 from "@/public/imgs/home/Blog3.png";
import Blog4 from "@/public/imgs/home/Blog4.png";
import BlogSubscribe from "@/components/blog/blogsubscribe";
import Link from "next/link";


export default function Blogpost() {
  return (
    <section>
      <div className="blogpost-section relative py-10 md:py-20 px-4">
        <div className="max-w-7xl mx-auto mt-12">
          <h1 className="px-4 md:px-8">
            <span className="-ml-4 md:-ml-8 px-4 md:px-8 custom-start-lg-effect">
              Sam Altman returns as CEO, OpenAI has a new initial board(H1)
            </span>
          </h1>
          <p className="my-8 w-full md:w-1/2 px-4 md:px-8">Mira Murati as CTO, Greg Brockman returns as President. Read messages from CEO Sam Altman and board chair Bret Taylor.</p>
          <div className="my-8 w-full md:w-1/2 px-0 md:px-8 flex flex-wrap text-sm">
            <span className="mx-2 flex text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>
              30.12.2023
            </span>
            <span className="mx-2 flex text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              Namee Author
            </span>
            <span className="mx-2 flex text-nowrap">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
              </svg>
              Type Topics
            </span>
          </div>
        </div>
      </div>
      <div className="blogpost-section relative px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="px-4 md:px-8 w-full md:w-1/2">Message from Sam to the company(h2)</h2>
          <p className="py-8 px-4 md:px-8 ">
            I am returning to OpenAI as CEO. Mira will return to her role as CTO. The new initial board will consist of Bret Taylor (Chair), Larry Summers, and Adam D’Angelo. I have never been more excited about the future. I am extremely grateful for everyone’s hard work in an unclear and unprecedented situation, and I believe our resilience and spirit set us apart in the industry. I feel so, so good about our probability of success for achieving our mission.
            Before getting to what comes next, I’d like to share some thanks. I love and respect Ilya, I think he's a guiding light of the field and a gem of a human being. I harbor zero ill will towards him. While Ilya will no longer serve on the board, we hope to continue our working relationship and are discussing how he can continue his work at OpenAI.
            I am grateful to Adam, Tasha, and Helen for working with us to come to this solution that best serves the mission. I’m excited to continue to work with Adam and am sincerely thankful to Helen and Tasha for investing a huge amount of effort in this process. Thank you also to Emmett who had a key and constructive role in helping us reach this outcome. Emmett’s dedication to AI safety and balancing stakeholders’ interests was clear. Mira did an amazing job throughout all of this, serving the mission, the team, and the company selflessly throughout. She is an incredible leader and OpenAI would not be OpenAI without her. Thank you.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <h3 className="px-4 md:px-8 w-full ">Message from Bret to the company(h3)</h3>
          <p className="py-8 px-4 md:px-8 ">
            I am returning to OpenAI as CEO. Mira will return to her role as CTO. The new initial board will consist of Bret Taylor (Chair), Larry Summers, and Adam D’Angelo.
            I have never been more excited about the future. I am extremely grateful for everyone’s hard work in an unclear and unprecedented situation, and I believe our resilience and spirit set us apart in the industry. I feel so, so good about our probability of success for achieving our mission. Before getting to what comes next, I’d like to share some thanks.
            I love and respect Ilya, I think he's a guiding light of the field and a gem of a human being. I harbor zero ill will towards him. While Ilya will no longer serve on the board, we hope to continue our working relationship and are discussing how he can continue his work at OpenAI. I am grateful to Adam, Tasha, and Helen for working with us to come to this solution that best serves the mission. I’m excited to continue to work with Adam and am sincerely thankful to Helen and Tasha for investing a huge amount of effort in this process. Thank you also to Emmett who had a key and constructive role in helping us reach this outcome. Emmett’s dedication to AI safety and balancing stakeholders’ interests was clear.
            Mira did an amazing job throughout all of this, serving the mission, the team, and the company selflessly throughout. She is an incredible leader and OpenAI would not be OpenAI without her. Thank you.
          </p>
        </div>
        <div className="max-w-7xl mx-auto">
          <h4 className="px-4 md:px-8 w-full">Message from Bret to the company(h4)</h4>
          <ul className="list-disc py-8 px-8 md:px-16">
            <li>I am returning to OpenAI as CEO. Mira will return to her role as CTO. The new initial board will consist of Bret Taylor (Chair), Larry Summers, and Adam D’Angelo.</li>
            <li>I have never been more excited about the future. I am extremely grateful for everyone’s hard work in an unclear and unprecedented situation, and I believe our resilience and spirit set us apart in the industry.</li>
            <li>I feel so, so good about our probability of success for achieving our mission.</li>
          </ul>
          <p className="px-4 md:px-8 py-8 font-bold text-base md:text-lg">
            Update on December 8, 2023 from Bret Taylor, Chair, OpenAI Board
          </p>
          <p className="px-4 md:px-8 py-8 mb-12">
            As previously stated, the OpenAI Board convened a committee consisting of Bret Taylor and Larry Summers to oversee the review of recent events. The committee interviewed several leading law firms to conduct the review, and ultimately selected Anjan Sahni and Hallie B. Levin from WilmerHale. Anjan and Hallie have extensive experience, and we have full confidence in their ability to conduct an effective and timely review. While the review is ongoing, the Board will continue to take steps to strengthen OpenAI’s corporate governance, build a qualified and diverse board of exceptional individuals, and oversee OpenAI’s important mission in ensuring that artificial general intelligence benefits all of humanity.
          </p>
        </div>
      </div>
      <div className="blogpost-section relative px-4">
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-1 md:grid-cols-2">
            <div className="hero-left-content">
              <h2 className="text-white"><span className="custom-start-effect pl-4 md:pl-8">Related research</span></h2>
            </div>
            <div className="hidden md:block hero-right-content">
              <p className="mb-6 text-size-30">We research generative models and how to align them with human values.</p>
              <span className="underline underline-offset-4"><Link href="/blog">view all research</Link></span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-12 my-12 px-4 md:px-8">
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog1} alt="Blog1" className="mb-4 w-full h-[260px] md:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>

            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog2} alt="Blog2" className="mb-4 w-full h-[260px] md:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>

            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog2} alt="Blog2" className="mb-4 w-full h-[260px] md:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>
            </div>
            <div className="hero-grid-item">
              <Link href="/blog/blogpost">
                <Image src={Blog4} alt="Blog4" className="mb-4 w-full h-[260px] md:h-auto" />
                <p className="hero-grid-text mb-2">No-code Test Data Seeding and Management Platform</p>
                <span className="hero-grid-text text-gray-300">Oct 3, 2023</span>
              </Link>

            </div>
            <div className="block md:hidden w-full ">
              <Link href="/blog">
                <button className="w-full rounded px-12 py-2 bg-white text-black font-bold">Learn more</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <BlogSubscribe />
    </section>

  )
}