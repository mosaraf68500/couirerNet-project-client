import React, { useState } from "react";
import custormar from "../../../assets/customer-top.png";
import user from "../../../assets/team-thumb1.png";
import review from "../../../assets/reviewQuote.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const testimonials = [
  { id: 1, name: "Awlad Hossin", role: "Senior Product Designer", message: "Amazing support and gentle alignment throughout the day.", user, review },
  { id: 2, name: "Rosel Ahamed", role: "CTO", message: "Posture Pro changed the way I work. I feel less pain now.", user, review },
  { id: 3, name: "Nasir Uddin", role: "CEO", message: "Great quality! Helps me stay aligned during long meetings.", user, review },
  { id: 4, name: "Arif Rahman", role: "UX Specialist", message: "I didn’t expect such good results. My back feels great!", user, review },
  { id: 5, name: "Jahanara Khatun", role: "HR Manager", message: "This product gave me better posture in just weeks!", user, review },
  { id: 6, name: "Kamal Hossain", role: "Product Manager", message: "A must-have for those working at a desk all day.", user, review },
  { id: 7, name: "Tania Akter", role: "Marketing Lead", message: "Super comfortable and easy to wear daily.", user, review },
  { id: 8, name: "Shahriar Islam", role: "Software Engineer", message: "I use it every day. My posture improved dramatically.", user, review },
  { id: 9, name: "Farzana Rahman", role: "Designer", message: "Beautiful design and very effective support system.", user, review },
  { id: 10, name: "Rafiq Chowdhury", role: "Data Analyst", message: "This posture corrector is a lifesaver for my back.", user, review },
];

const TestimonialSlider = () => {
  return (
    <div className="py-10 px-4 md:px-20 text-center">
      {/* Banner Image */}
      <img src={custormar} alt="Customer Banner" className="mx-auto rounded-lg mb-6" />

      {/* Title */}
      <h2 className="text-3xl font-bold text-[#03373D] mb-2">
        What our customers are saying
      </h2>
      <p className="text-gray-500 mb-10 max-w-xl mx-auto text-sm">
        Enhance posture, mobility, and well-being effortlessly with Posture Pro.
        Achieve proper alignment, reduce pain, and strengthen your body with ease!
      </p>

      {/* Swiper */}
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="p-6 rounded-lg shadow bg-white">
              <img src={testimonial.review} alt="" className="mb-4" />
              <p className="text-gray-700 mb-4 text-sm">“{testimonial.message}”</p>
              <div className="flex items-center gap-4">
                <img className="w-10 h-10 rounded-full" src={testimonial.user} alt={testimonial.name} />
                <div className="text-left">
                  <div className="font-semibold text-sm text-gray-800">{testimonial.name}</div>
                  <div className="text-[10px] font-semibold text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSlider;
