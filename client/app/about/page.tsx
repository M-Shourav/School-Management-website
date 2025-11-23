"use client";
import Container from "@/components/ui/Component";
import { mission, school_Img } from "@/public";
import { ChevronRight, House } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";

const AboutPage = () => {
  return (
    <div>
      {/* Header title */}
      <div className="w-full min-h-48 mx-auto flex items-center justify-center">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
            প্রতিষ্ঠান পরিচিতি
          </h1>
          <div className="flex items-center justify-center">
            <Link
              href={"/"}
              className="flex items-center gap-x-1 text-base text-muted-foreground font-medium"
            >
              {" "}
              <House className="w-5 h-5" /> মূলপাতা
            </Link>
            <ChevronRight />
            <Link href={`/about`} className="text-green-700 font-bold">
              প্রতিষ্ঠান পরিচিতি
            </Link>
          </div>
        </div>
      </div>
      {/* data */}
      <div className="w-full bg-white/80 py-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full lg:pr-10">
              <Image
                src={school_Img}
                alt="school-image"
                className="w-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-y-5">
              <div>
                <h2 className="text-2xl font-semibold">প্রতিষ্ঠান সম্পর্কে</h2>
                <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
              </div>
              <p className="text-base font-medium leading-7">
                এক্সওয়াইজেধ স্কুল এবং কলেজ এর অতীত গৌরবোজ্জ্বল বর্তমান
                প্রশংসনীয়। ২০২৩ ইংরেজীর ২০ শে জানুয়ারী এক্সওয়াইজেধ স্কুল এবং
                কলেজ এর স্থানীয় ম্যাজিষ্ট্রেট অফিসের তৎকালীন প্রধান কারণিক মি:
                এক্সওয়াইজেধ কর্তৃক প্রতিষ্ঠিত। তখন এটা এক্সওয়াইজেধ গভর্ণমেন্ট
                স্কুল নামে পরিচিত ছিল। ৯ জন বাংলাদেশী, ১ জন হিন্দু ও ৮ জন
                মুসলমান বিদ্যোৎসাহী ব্যক্তির একটি কমিটির উপর এর পরিচালনার
                দায়িত্ব ন্যাস্ত ছিল। এদেশের অধিবাসীদের বাংলায় শিক্ষায় শিক্ষিত
                করার জন্য এ বিদ্যালয় চালু করা হয়। ২০২৩ ইংরেজির ১ ই মে মি:
                এক্সওয়াইজেধ বিদ্যালয়ের প্রধান শিক্ষক নিযুক্ত হন।
              </p>
              <p className="text-base font-medium leading-7">
                এক্সওয়াইজেধ স্কুল এবং কলেজ তার উচ্চমানের শিক্ষা, দক্ষ শিক্ষক
                এবং আধুনিক সুযোগ-সুবিধার জন্য পরিচিত। স্কুলটিতে একটি শক্তিশালী
                পাঠ্যক্রম রয়েছে যা শিক্ষার্থীদেরকে তাদের সম্পূর্ণ সম্ভাবনায়
                পৌঁছাতে সাহায্য করে। কলেজটিতে একটি বিস্তৃত কোর্স অফার রয়েছে যা
                শিক্ষার্থীদেরকে তাদের ভবিষ্যতের ক্যারিয়ারের জন্য প্রস্তুত করে।
                এক্সওয়াইজেধ স্কুল এবং কলেজ বাংলাদেশের একটি অন্যতম সেরা শিক্ষা
                প্রতিষ্ঠান। এটি শিক্ষার্থীদেরকে একটি উচ্চমানের শিক্ষা প্রদান করে
                যা তাদেরকে তাদের সম্পূর্ণ সম্ভাবনায় পৌঁছাতে সাহায্য করে।
              </p>
            </div>
          </div>

          {/* প্রতিষ্ঠানের পরিসংখান */}
          <div>
            {/* title */}
            <div className=" flex items-end gap-x-2 mt-16">
              <div className=" shrink-0">
                <h2 className="text-lg md:text-2xl font-semibold md:font-bold tracking-tight">
                  প্রতিষ্ঠানের পরিসংখান
                </h2>
              </div>
              <div className="w-full h-px bg-gray-200" />
            </div>

            <div className="py-15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8">
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৫২০
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    সর্বোমোট শিক্ষার্থী
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ২০
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    শিক্ষক/শিক্ষিকা
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৮
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    অফিশ কর্মচারী
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৪০+
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    সর্বোমোট কক্ষ
                  </h3>
                </div>
              </div>
              <div className="w-36 h-36 md:w-48 md:h-48 flex items-center justify-center rounded-full border border-gray-300 hover:border-green-800 duration-300">
                <div className="flex flex-col items-center justify-center gap-y-1">
                  <p className="text-xl md:text-4xl text-green-700 font-semibold">
                    ৩
                  </p>
                  <h3 className="text-base md:text-lg font-semibold">
                    বিদ্যালয় ভবন
                  </h3>
                </div>
              </div>
            </div>
          </div>
          {/* প্রতিষ্ঠানের মিশন */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="w-full flex flex-col gap-y-2">
              <div>
                <h2 className="text-2xl font-semibold">প্রতিষ্ঠানের মিশন</h2>
                <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
              </div>
              <div className="flex flex-col gap-y-2 p-2">
                <p className="text-[15px] font-medium leading-7">
                  এক্সওয়াইজেধ স্কুল এবং কলেজের মিশন হল শিক্ষার্থীদেরকে একটি
                  উচ্চমানের শিক্ষা প্রদান করা যা তাদেরকে তাদের সম্পূর্ণ
                  সম্ভাবনায় পৌঁছাতে সাহায্য করে। স্কুলটি বিশ্বাস করে যে প্রতিটি
                  শিক্ষার্থীরই সম্ভাবনা রয়েছে এবং তাদেরকে সেই সম্ভাবনাকে
                  অর্জনের জন্য প্রস্তুত করতে চায়।
                </p>
                <h3 className="text-lg font-semibold py-5">
                  স্কুলের মিশনকে বাস্তবায়নের জন্য, স্কুলটি নিম্নলিখিত
                  মূল্যবোধগুলিকে অনুসরণ করে:
                </h3>
                <p className="text-[15px] font-medium leading-7">
                  ● উচ্চমানের শিক্ষা: স্কুলটি একটি শক্তিশালী পাঠ্যক্রম প্রদান
                  করে যা শিক্ষার্থীদেরকে তাদের সম্পূর্ণ সম্ভাবনায় পৌঁছাতে
                  সাহায্য করে। স্কুলটিতে একটি দক্ষ শিক্ষক মন্ডলী রয়েছে যারা
                  শিক্ষার্থীদেরকে তাদের শেখার ক্ষেত্রে সর্বোত্তম সাপোর্ট প্রদান
                  করে।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  ● ব্যক্তিত্ব বিকাশ: স্কুলটি শিক্ষার্থীদেরকে তাদের ব্যক্তিত্ব
                  বিকাশে সহায়তা করে। স্কুলটি বিভিন্ন সহ-পাঠ্যক্রমিক কার্যক্রমের
                  ব্যবস্থা করে যা শিক্ষার্থীদেরকে তাদের দক্ষতা এবং আগ্রহ বিকাশে
                  সাহায্য করে।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  ● সামাজিক দায়বদ্ধতা: স্কুলটি শিক্ষার্থীদেরকে সামাজিক
                  দায়বদ্ধতা সম্পর্কে সচেতন করে। স্কুলটি বিভিন্ন সামাজিক
                  কার্যক্রমের আয়োজন করে যা শিক্ষার্থীদেরকে সমাজের জন্য কিছু
                  করার জন্য অনুপ্রাণিত করে। এক্সওয়াইজেধ স্কুল এবং কলেজ বিশ্বাস
                  করে যে এই মূল্যবোধগুলি শিক্ষার্থীদেরকে তাদের সম্পূর্ণ
                  সম্ভাবনায় পৌঁছাতে সাহায্য করবে।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  এক্সওয়াইজেধ স্কুল এবং কলেজ বিশ্বাস করে যে এই মূল্যবোধগুলি
                  শিক্ষার্থীদেরকে তাদের সম্পূর্ণ সম্ভাবনায় পৌঁছাতে সাহায্য
                  করবে।
                </p>
              </div>
            </div>
            <div className="w-full rounded-md overflow-hidden">
              <Image
                src={mission}
                alt="school-image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* প্রতিষ্ঠানের ভিশন */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16 mb-5">
            <div className="w-full rounded-md overflow-hidden">
              <Image
                src={mission}
                alt="school-image"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="w-full flex flex-col gap-y-2">
              <div>
                <h2 className="text-2xl font-semibold">প্রতিষ্ঠানের ভিশন</h2>
                <div className="w-full max-w-52 h-1.5 bg-green-500 mt-4" />
              </div>
              <div className="flex flex-col gap-y-2 p-2">
                <p className="text-[15px] font-medium leading-7">
                  এক্সওয়াইজেধ ওয়াইজেধ স্কুল এবং কলেজের ভিশন হল একটি বিশ্বমানের
                  শিক্ষা প্রতিষ্ঠান হিসাবে গড়ে তোলা যা শিক্ষার্থীদেরকে তাদের
                  সম্পূর্ণ সম্ভাবনায় পৌঁছাতে সাহায্য করে। স্কুলটি বিশ্বাস করে
                  যে শিক্ষার মাধ্যমে শিক্ষার্থীরা একটি উন্নত ভবিষ্যৎ গড়ে তুলতে
                  পারে এবং একটি উন্নত সমাজ গড়তে অবদান রাখতে পারে।
                </p>
                <h3 className="text-lg font-semibold py-5">
                  স্কুলের ভিশনকে বাস্তবায়নের জন্য, স্কুলটি নিম্নলিখিত
                  লক্ষ্যগুলি অর্জনে প্রতিশ্রুতিবদ্ধ:
                </h3>
                <p className="text-[15px] font-medium leading-7">
                  ● উচ্চমানের শিক্ষা প্রদান: স্কুলটি একটি শক্তিশালী পাঠ্যক্রম
                  এবং দক্ষ শিক্ষক মন্ডলীর মাধ্যমে শিক্ষার্থীদেরকে উচ্চমানের
                  শিক্ষা প্রদান করতে চায়।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  ● ব্যক্তিত্ব বিকাশ: স্কুলটি শিক্ষার্থীদেরকে তাদের ব্যক্তিত্ব
                  বিকাশে সহায়তা করতে চায়। স্কুলটি বিভিন্ন সহ-পাঠ্যক্রমিক
                  কার্যক্রমের ব্যবস্থা করে যা শিক্ষার্থীদেরকে তাদের দক্ষতা এবং
                  আগ্রহ বিকাশে সাহায্য করে।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  ● সামাজিক দায়বদ্ধতা: স্কুলটি শিক্ষার্থীদেরকে সামাজিক
                  দায়বদ্ধতা সম্পর্কে সচেতন করতে চায়। স্কুলটি বিভিন্ন সামাজিক
                  কার্যক্রমের আয়োজন করে যা শিক্ষার্থীদেরকে সমাজের জন্য কিছু
                  করার জন্য অনুপ্রাণিত করে।
                </p>
                <p className="text-[15px] font-medium leading-7">
                  ক্সওয়াইজেধ স্কুল এবং কলেজের ভিশন হল একটি উচ্চাভিলাষী লক্ষ্য,
                  তবে এটি একটি লক্ষ্য যা স্কুলটি অর্জনে প্রতিশ্রুতিবদ্ধ। স্কুলটি
                  বিশ্বাস করে যে শিক্ষার মাধ্যমে শিক্ষার্থীরা একটি উন্নত ভবিষ্যৎ
                  গড়ে তুলতে পারে এবং একটি উন্নত সমাজ গড়তে অবদান রাখতে পারে।
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default AboutPage;
