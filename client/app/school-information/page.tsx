import BannerHeading from "@/components/BannerHeading";
import Container from "@/components/ui/Component";

const page = () => {
  return (
    <div>
      <BannerHeading
        title={"বিদ্যালয়ের তথ্যাদি"}
        currentLabel="বিদ্যালয়ের তথ্যাদি"
        currentLink="/school-information"
      />
      <div className="w-full bg-white/80">
        <Container
          className={"max-w-4xl mx-auto py-5 flex flex-col gap-y-5 px-4 pb-10"}
        >
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের EIIN</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">121314</p>
            </div>
          </div>
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের Code</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">123456</p>
            </div>
          </div>
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের Reg. no</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">121314151617</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের নাম</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">
                এক্সওয়াইজেধ স্কুল এবং কলেজ
              </p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                বিদ্যালয়ের নাম ইংরেজীতে
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">XYZ School & College</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                গ্রাম/বাড়ী ও সড়কের বিবরণ
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">
                XYZ School & College, Main Road, Chilahati,Rangpur
              </p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">ওয়ার্ড নং</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">০৭</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                ইউনিয়ন/পৌরসভা/সিটি কর্পোরেশন
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">
                ১নং ভোগডাবুরী ইউনিয়ন পরিষদ
              </p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">পোস্টঅফিস</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">চিলাহাটি</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">পুলিশ স্টেশন</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">
                চিলাহাটি পুলিশ তদন্ত কেন্দ্র
              </p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">উপজেলা</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">ডোমার</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">জেলা</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">নীলফামারি</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিভাগ</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">রংপুর</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                মোবাইল/ টেলিফোন নাম্বার
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">০১৭১০২৬৭৯৮৫</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">ই-মেইল</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">am.masum1129@gmail.com</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">ওয়েবসাইট</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">
                chilahati-merchants-school.vercel.app
              </p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                বর্তমান শিক্ষার্থীর সংখ্যা
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">১০০০</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের শিফট</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">১ শিফট</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">বিদ্যালয়ের ধরণ</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">বালক/বালিকা</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">শ্রেণি কার্যক্রম</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">ষষ্ঠ-দশম</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">মোট জমির পরিমান (একর)</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">৭</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">ভবন সংখ্যা</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">৩</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">মোট শ্রেণিকক্ষ সংখ্যা</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">৪০</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                মাল্টিমিডিয়া শ্রেণিকক্ষ সংখ্যা
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">৫</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">আইসিটি ল্যাব সংখ্যা</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">২</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                বিজ্ঞানাগার এর জন্য কক্ষ সংখ্যা
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">২</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                পাঠাগার এর জন্য কক্ষ সংখ্যা
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">২</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">অডিটোরিয়াম</h2>
            </div>
            <div>
              <p className="text-lg font-semibold">১</p>
            </div>
          </div>{" "}
          <div className="w-full p-4 bg-gray-200 grid grid-cols-1 md:grid-cols-2 gap-4 rounded-md">
            <div>
              <h2 className="text-base font-semibold">
                সীমানা প্রাচীর আছে কি না
              </h2>
            </div>
            <div>
              <p className="text-lg font-semibold">আছে</p>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default page;
