import { privacy } from "./privacy";
import AIManagement from "@/components/aiManagement";
export const metadata = {
  title: "Hakkaren - Privacy",
  description: "Privacy",
};

export default function Privacy() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-4 py-12 mt-8 sm:px-6">
        <h1 className="font-extrabold mb-12"><span className="custom-start-lg-effect px-4 md:px-8">Privacy Policy</span></h1>
        <span className="flex px-4 md:px-8 mb-16">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-3">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
          </svg>
          Last updated August 11, 2023
        </span>
        <div className="px-4 md:px-8 w-full md:w-3/4 mb-12"> 
          <p >This privacy notice for HakkaRen LLC. ("Company ," "we," "us," or "our" ), describes how and why we might collect, store, use, and/or share ( "process") your information when you use our services ("Services"), such as when you:</p>
          <ul className="list-disc pl-8">
            <li>Visit our website at <a className="yellow underline" href="https://hakkaren.co">https://hakkaren.co</a> , or any website of ours that links to this privacy notice</li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <p>Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at contact@hakkaren.co.</p>
        </div>

        <h2 className="px-4 md:px-8">SUMMARY OF KEY POINTS</h2>
        <div className="px-4 md:px-8 w-full md:w-3/4 mb-6">
          <p className="py-6"><i>This summary provides key points from our privacy notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a className="yellow underline" href="https://hakkaren.co/privacy#toc">table of contents</a> below to find the section you are looking for.</i></p>
          <p  className="py-6"><b>What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with HakkaRen LLC. and the Services, the choices you make, and the products and features you use. Learn more about <a className="yellow underline" href="https://hakkaren.co/privacy#personalinfo">personal information you disclose to us.</a></p>
          <p className="py-6"><b>Do we process any sensitive personal information?</b> We do not process sensitive personal information.</p>
          <p className="py-6"><b>Do we receive any information from third parties?</b> We do not receive any information from third parties.</p>
          <p className="py-6"><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a className="yellow underline" href="https://hakkaren.co/privacy#infouse">how we process your information.</a></p>
          <p className="py-6"><b>In what situations and with which types of parties do we share personal information?</b> <br />
            We may share information in specific situations and with specific categories of third parties. Learn more about <a className="yellow underline" href="https://hakkaren.co/privacy#whoshare">when and with whom we share your personal information.</a>
          </p>
          <p className="py-6">
            <b>What are your rights? </b> <br/>
            Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a className="yellow underline" href="https://hakkaren.co/privacy#privacyrights">your privacy rights.</a>
          </p>
          <p className="py-6">
            <b>How do you exercise your rights?</b>
             The easiest way to exercise your rights is by submitting a <a className="yellow underline" href="https://app.termly.io/notify/d9ac2859-c555-432d-baa7-8eb7ba9202aa">data subject access request</a> , or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
          </p>
          <p className="py-6">
            <b>Want to learn more about what HakkaRen LLC.</b>
           does with any information we collect? <a className="yellow underline" href="https://hakkaren.co/privacy#toc">Review the privacy notice in full.</a>
          </p>
        </div> 

       
      </div>
      <AIManagement />
    </section>
  );
}
