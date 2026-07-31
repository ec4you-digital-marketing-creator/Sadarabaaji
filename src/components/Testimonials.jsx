import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import { Star, User } from 'lucide-react';
import { testimonialsData } from '../data/testimonialsData';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { images } from '../data/images';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section id="testimonials" className="py-12 bg-white relative overflow-hidden">

            {/* Immersive Technical Backdrop */}
            <div className="absolute inset-0 z-0 opacity-40">
                <img
                    src={images.about1}
                    loading="lazy"
                    className="w-full h-full object-cover mix-blend-luminosity brightness-50"
                    alt="Service Environment"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-white"></div>
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 tech-grid opacity-[0.03] pointer-events-none"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 relative z-10">
                <div className="max-w-6xl mx-auto">

                    {/* Header: Happy Clients */}
                    <div className="mb-24 text-center" data-aos="fade-up">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="w-8 h-[1px] bg-primary/30"></div>
                            <span className="text-primary font-black uppercase text-[10px] tracking-[0.5em]">Client Feedback</span>
                            <div className="w-8 h-[1px] bg-primary/30"></div>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight leading-none uppercase">
                            Our <span className="text-primary">Happy Clients</span> Across Chennai
                        </h2>
                        <p className="text-gray-500 font-bold text-lg leading-relaxed max-w-2xl mx-auto mt-6">
                            Thousands of car owners trust Sadarabaaji for professional car wash and detailing services. Here’s
                            what our customers say about their experience.
                        </p>
                    </div>

                    {/* Cinematic Review Slider */}
                    <Swiper
                        modules={[Pagination, Autoplay]}
                        spaceBetween={0}
                        centeredSlides={true}
                        loop={true}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        pagination={{ clickable: true }}
                        breakpoints={{
                            320: { slidesPerView: 1 },
                            768: { slidesPerView: 1.5 },
                            1024: { slidesPerView: 3 },
                        }}
                        className="testimonials-swiper !pt-12 !pb-24 px-4"
                    >
                        {(testimonialsData.length < 6 ? [...testimonialsData, ...testimonialsData] : testimonialsData).map((review, index) => (
                            <SwiperSlide key={`${review.id}-${index}`} className="h-auto px-4 !flex">
                                <div className="relative p-10 rounded-[3.5rem] border transition-all duration-500 w-full flex flex-col justify-between bg-gray-50/80 border-black/5 shadow-xl group">

                                    <div className="relative z-10 text-left">
                                        {/* Star Rating (Top) */}
                                        <div className="flex gap-1 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                            ))}
                                        </div>

                                        {/* Testimonial Content (Middle) */}
                                        <p className="text-base text-black font-bold leading-relaxed tracking-tight mb-12">
                                            "{review.text}"
                                        </p>
                                    </div>

                                    {/* User Profile (Bottom) */}
                                    <div className="flex items-center gap-4 relative z-10">
                                        <div className="relative">
                                            <div className="w-12 h-12 rounded-full border border-primary/20 p-1 bg-white overflow-hidden">
                                                <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center">
                                                    <User className="w-5 h-5 text-gray-400" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-sm font-black text-black tracking-tight leading-none mb-1.5">
                                                {review.name}
                                            </h4>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[9px] text-primary font-black uppercase tracking-widest">
                                                    {review.tier}
                                                </span>
                                                <span className="w-[2px] h-[2px] rounded-full bg-gray-300"></span>
                                                <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">
                                                    {review.loc}
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tactical Overlay Elements */}
                                    <div className="absolute top-4 right-8 flex items-center gap-2 opacity-0 group-hover:opacity-40 transition-opacity">
                                        <span className="text-[8px] font-black text-primary/50">{review.id}</span>
                                        <div className="w-1 h-1 rounded-full bg-primary/50"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .testimonials-swiper .swiper-slide {
                    transition: all 0.5s ease-in-out;
                    opacity: 0.5;
                    transform: scale(0.9);
                    display: flex;
                }

                .testimonials-swiper .swiper-slide-active {
                    opacity: 1 !important;
                    transform: scale(1.05) !important;
                    z-index: 20;
                }

                .testimonials-swiper .swiper-slide-active > div {
                    background: #ffffff !important;
                    border-color: rgba(255, 103, 0, 0.2) !important;
                    box-shadow: 0 25px 50px -12px rgba(255, 103, 0, 0.2) !important;
                }

                .testimonials-swiper .swiper-pagination-bullet {
                    width: 30px;
                    height: 4px;
                    border-radius: 2px;
                    background: rgba(0, 0, 0, 0.1);
                    opacity: 1;
                    transition: all 0.3s;
                }

                .testimonials-swiper .swiper-pagination-bullet-active {
                    background: #ff6700;
                    width: 60px;
                    box-shadow: 0 0 15px rgba(255, 103, 0, 0.3);
                }
            `}} />
        </section>
    );
};

export default Testimonials;
