import BannerHeading from "@/components/BannerHeading";
import Container from "@/components/ui/Component";
import { quote, teacher_1, teacher_2 } from "@/public";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <section>
      <BannerHeading
        title="স্কুল পরিচালকদের বাণী"
        currentLink="/corner-message"
        currentLabel="পরিচালকদের বাণী"
      />
      <div className="w-full bg-white/80">
        <Container className={"py-20 h-full flex flex-col gap-y-20"}>
          <div className="w-full flex flex-col gap-y-6 rounded-md shadow p-4">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className=" flex flex-col md:flex-row items-center gap-4">
                <div className="w-56 h-56">
                  <Image
                    src={teacher_1}
                    alt="corner-1"
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start gap-y-2 mt-10 md:mt-0">
                  <Image src={quote} alt="quote-image" />
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    অধ্যক্ষের বাণী
                  </h3>
                  <div className="w-[120px] h-1 bg-green-500" />
                  <h4 className="text-base font-semibold">মোঃ মোস্তফা কামাল</h4>
                </div>
              </div>
              <div className="max-w-2xl mx-auto mt-10 flex flex-col gap-y-5 p-2 md:p-6 text-sm font-medium leading-5">
                <p>
                  প্রিয় শিক্ষার্থীবৃন্দ, আজ আমি আপনাদের সামনে দাঁড়িয়েছি একজন
                  শিক্ষক হিসেবে, একজন অভিভাবক হিসেবে, এবং একজন বন্ধু হিসেবে। আমি
                  আপনাদেরকে বলতে চাই যে, আপনারা সকলেই সক্ষম। আপনারা সকলেই আপনার
                  সম্পূর্ণ সম্ভাবনায় পৌঁছাতে পারেন। আপনাদেরকে শুধুমাত্র কঠোর
                  পরিশ্রম করতে হবে, সৎ হতে হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হতে
                  হবে। আপনাদেরকে নিজের উপর বিশ্বাস রাখতে হবে এবং কখনই থেমে থাকতে
                  হবে না।
                </p>
                <p>
                  আমি আপনাদের জন্য শুভকামনা জানাই। আমি আশা করি আপনারা সকলেই একজন
                  ভালো মানুষ হিসেবে গড়ে উঠবেন এবং আপনারা আপনার লক্ষ্য অর্জনে
                  সফল হবেন। ধন্যবাদ।
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2  border-t border-t-gray-200">
              <div className="w-full border-r border-r-gray-200">
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের লক্ষ্য ও উদ্দেশ্য সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের লক্ষ্য হল শিক্ষার্থীদের একটি সুন্দর ও সুস্থ
                    পরিবেশে মানসম্মত শিক্ষা প্রদান করা। আমরা শিক্ষার্থীদেরকে
                    একজন ভালো মানুষ হিসেবে গড়ে তোলার লক্ষ্যে কাজ করছি।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের উদ্দেশ্য হল শিক্ষার্থীদেরকে তাদের সম্পূর্ণ
                    সম্ভাবনায় পৌঁছাতে সাহায্য করা। আমরা শিক্ষার্থীদেরকে তাদের
                    মেধা ও প্রতিভা বিকাশের সুযোগ করে দিচ্ছি।
                  </p>
                </div>
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    শিক্ষার্থীদের জন্য প্রত্যাশা সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা শিক্ষার্থীদের কাছ থেকে আশা করি তারা কঠোর পরিশ্রম
                    করবে, সৎ হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হবে। আমরা চাই
                    শিক্ষার্থীরা স্কুল থেকে বেরিয়ে এসে একজন ভালো মানুষ হিসেবে
                    পরিণত হবে।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা শিক্ষার্থীদেরকে তাদের পড়াশোনার প্রতি মনোযোগী হতে
                    উৎসাহিত করছি। আমরা চাই শিক্ষার্থীরা তাদের সম্ভাবনায় পৌঁছাতে
                    কঠোর পরিশ্রম করবে।
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের সাফল্য ও অর্জন সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের শিক্ষার্থীরা বিভিন্ন প্রতিযোগিতায় অংশগ্রহণ
                    করে সাফল্য অর্জন করেছে। আমরা গর্বিত যে আমাদের শিক্ষার্থীরা
                    তাদের মেধা ও প্রতিভা প্রদর্শন করতে সক্ষম হয়েছে।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের শিক্ষার্থীরা বিভিন্ন সামাজিক ও সাংস্কৃতিক
                    কার্যক্রমে অংশগ্রহণ করে। আমরা আনন্দিত যে আমাদের শিক্ষার্থীরা
                    সৃজনশীল ও দক্ষ হিসেবে নিজেদেরকে প্রকাশ করতে সক্ষম হয়েছে।
                  </p>
                </div>
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের ভবিষ্যৎ পরিকল্পনা সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা আমাদের স্কুলের অবকাঠামোগত উন্নয়ন ও শিক্ষার
                    মানোন্নয়নের লক্ষ্যে কাজ করছি। আমরা চাই আমাদের স্কুল একটি
                    আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে পরিচিতি লাভ করুক।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা আমাদের স্কুলকে একটি আধুনিক ও ডিজিটাল
                    শিক্ষাপ্রতিষ্ঠানে রূপান্তরিত করার লক্ষ্যে কাজ করছি। আমরা চাই
                    আমাদের শিক্ষার্থীরা বিশ্বের সাথে তাল মিলিয়ে চলতে সক্ষম হোক।
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col gap-y-6 rounded-md shadow bg-gray-100 p-4">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <div className=" flex flex-col md:flex-row items-center gap-4">
                <div className="w-56 h-56">
                  <Image
                    src={teacher_2}
                    alt="corner-1"
                    className="w-full object-cover"
                  />
                </div>
                <div className="flex flex-col items-center md:items-start gap-y-2 mt-10 md:mt-0">
                  <Image src={quote} alt="quote-image" />
                  <h3 className="text-xl md:text-2xl font-bold leading-tight">
                    উপাধ্যক্ষের বাণী
                  </h3>
                  <div className="w-[120px] h-1 bg-green-500" />
                  <h4 className="text-base font-semibold">
                    মিসেস শিউলী আক্তার
                  </h4>
                </div>
              </div>
              <div className="max-w-2xl mx-auto mt-10 flex flex-col gap-y-5 p-2 md:p-6 text-sm font-medium leading-5">
                <p>
                  প্রিয় শিক্ষার্থীবৃন্দ, আজ আমি আপনাদের সামনে দাঁড়িয়েছি একজন
                  শিক্ষক হিসেবে, একজন অভিভাবক হিসেবে, এবং একজন বন্ধু হিসেবে। আমি
                  আপনাদেরকে বলতে চাই যে, আপনারা সকলেই সক্ষম। আপনারা সকলেই আপনার
                  সম্পূর্ণ সম্ভাবনায় পৌঁছাতে পারেন। আপনাদেরকে শুধুমাত্র কঠোর
                  পরিশ্রম করতে হবে, সৎ হতে হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হতে
                  হবে। আপনাদেরকে নিজের উপর বিশ্বাস রাখতে হবে এবং কখনই থেমে থাকতে
                  হবে না।
                </p>
                <p>
                  আমি আপনাদের জন্য শুভকামনা জানাই। আমি আশা করি আপনারা সকলেই একজন
                  ভালো মানুষ হিসেবে গড়ে উঠবেন এবং আপনারা আপনার লক্ষ্য অর্জনে
                  সফল হবেন। ধন্যবাদ।
                </p>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2  border-t border-t-gray-200">
              <div className="w-full border-r border-r-gray-200">
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের লক্ষ্য ও উদ্দেশ্য সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের লক্ষ্য হল শিক্ষার্থীদের একটি সুন্দর ও সুস্থ
                    পরিবেশে মানসম্মত শিক্ষা প্রদান করা। আমরা শিক্ষার্থীদেরকে
                    একজন ভালো মানুষ হিসেবে গড়ে তোলার লক্ষ্যে কাজ করছি।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের উদ্দেশ্য হল শিক্ষার্থীদেরকে তাদের সম্পূর্ণ
                    সম্ভাবনায় পৌঁছাতে সাহায্য করা। আমরা শিক্ষার্থীদেরকে তাদের
                    মেধা ও প্রতিভা বিকাশের সুযোগ করে দিচ্ছি।
                  </p>
                </div>
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    শিক্ষার্থীদের জন্য প্রত্যাশা সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা শিক্ষার্থীদের কাছ থেকে আশা করি তারা কঠোর পরিশ্রম
                    করবে, সৎ হবে, এবং অন্যদের প্রতি শ্রদ্ধাশীল হবে। আমরা চাই
                    শিক্ষার্থীরা স্কুল থেকে বেরিয়ে এসে একজন ভালো মানুষ হিসেবে
                    পরিণত হবে।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা শিক্ষার্থীদেরকে তাদের পড়াশোনার প্রতি মনোযোগী হতে
                    উৎসাহিত করছি। আমরা চাই শিক্ষার্থীরা তাদের সম্ভাবনায় পৌঁছাতে
                    কঠোর পরিশ্রম করবে।
                  </p>
                </div>
              </div>
              <div className="w-full">
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের সাফল্য ও অর্জন সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের শিক্ষার্থীরা বিভিন্ন প্রতিযোগিতায় অংশগ্রহণ
                    করে সাফল্য অর্জন করেছে। আমরা গর্বিত যে আমাদের শিক্ষার্থীরা
                    তাদের মেধা ও প্রতিভা প্রদর্শন করতে সক্ষম হয়েছে।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমাদের স্কুলের শিক্ষার্থীরা বিভিন্ন সামাজিক ও সাংস্কৃতিক
                    কার্যক্রমে অংশগ্রহণ করে। আমরা আনন্দিত যে আমাদের শিক্ষার্থীরা
                    সৃজনশীল ও দক্ষ হিসেবে নিজেদেরকে প্রকাশ করতে সক্ষম হয়েছে।
                  </p>
                </div>
                <div className="py-2 md:py-6 px-2 md:px-6 flex flex-col gap-y-5">
                  <h3 className="text-xl font-semibold">
                    স্কুলের ভবিষ্যৎ পরিকল্পনা সম্পর্কে
                  </h3>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা আমাদের স্কুলের অবকাঠামোগত উন্নয়ন ও শিক্ষার
                    মানোন্নয়নের লক্ষ্যে কাজ করছি। আমরা চাই আমাদের স্কুল একটি
                    আদর্শ শিক্ষাপ্রতিষ্ঠান হিসেবে পরিচিতি লাভ করুক।
                  </p>
                  <p className="text-base font-medium tracking-tighter">
                    • আমরা আমাদের স্কুলকে একটি আধুনিক ও ডিজিটাল
                    শিক্ষাপ্রতিষ্ঠানে রূপান্তরিত করার লক্ষ্যে কাজ করছি। আমরা চাই
                    আমাদের শিক্ষার্থীরা বিশ্বের সাথে তাল মিলিয়ে চলতে সক্ষম হোক।
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default page;
