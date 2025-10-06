import React from "react";
import { Link } from "react-router-dom";
// import { createPageUrl } from "@/utils"; // This line is removed as requested
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Input from "@/components/ui/Input";
import Progress from "@/components/ui/Progress";
import { 
  Music, 
  Play, 
  Instagram, 
  Youtube, 
  Send as Telegram,
  Sparkles,
  Headphones,
  Radio,
  Heart,
  Share2,
  Download,
  Send,
  ChevronLeft
} from "lucide-react";
import { motion } from "framer-motion";

import SongCard from "../components/music/SongCard";
import FeaturedSong from "../components/music/FeaturedSong";

function generateSlug(title) {
  return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
}

export default function FMYousofPage() {
  const featuredSongs = [
    {
      id: 101,
      title: "آغاز جدید",
      singer: "FMYousof",
      genre: "پاپ",
      description: "جدیدترین اثر FMYousof - ترکیبی استثنایی از احساس و انرژی.",
      duration: "4:35",
      plays: "42.8K",
      isNew: true,
      audioUrl: `/songs/aghaz-jadid.mp3`
    },
    {
      id: 102,
      title: "بهترین لحظات",
      singer: "FMYousof",
      genre: "پاپ",
      description: "محبوب‌ترین آهنگ با بیش از ۱۰۰ هزار پخش.",
      duration: "3:52",
      plays: "105.3K",
      isPopular: true,
      audioUrl: `/songs/behtarin-lahazat.mp3`
    },
    {
      id: 103,
      title: "آسمان شب",
      singer: "FMYousof",
      genre: "پاپ",
      description: "ملودی‌ای آرامش‌بخش برای شب‌های پر ستاره.",
      duration: "5:10",
      plays: "78.1K",
      isPopular: true,
      audioUrl: `/songs/aseman-shab.mp3`
    },
    {
      id: 104,
      title: "طلوع خورشید",
      singer: "FMYousof",
      genre: "پاپ",
      description: "یک آهنگ پرانرژی و شاد برای شروع یک روز جدید.",
      duration: "3:20",
      isNew: true,
      plays: "35.5K",
      audioUrl: `/songs/tolou-khorshid.mp3`
    }
  ];

  const songs = [
    { id: 1, title: "شب‌های بی‌ستاره", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۱۰/۱۵", duration: "3:45", plays: "12.5K" },
    { id: 2, title: "رویای شهر", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۹/۲۳", duration: "4:12", plays: "18.2K" },
    { id: 3, title: "سفر به ناشناخته", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۸/۰۵", duration: "5:30", plays: "9.8K" },
    { id: 4, title: "انرژی شب", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۷/۱۸", duration: "3:58", plays: "25.4K" },
    { id: 5, title: "خاطرات گمشده", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۶/۱۲", duration: "4:25", plays: "15.6K" },
    { id: 6, title: "پرواز آزاد", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۵/۰۱", duration: "6:15", plays: "31.2K" },
    { id: 7, title: "جاده ابریشمی", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۴/۱۹", duration: "4:50", plays: "22.1K" },
    { id: 8, title: "رقص نور", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۳/۲۸", duration: "3:33", plays: "41.9K" },
    { id: 9, title: "طوفان درون", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۲/۱۴", duration: "5:05", plays: "19.3K" },
    { id: 10, title: "سکوت اقیانوس", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۳/۰۱/۳۰", duration: "6:40", plays: "11.7K" },
    { id: 11, title: "بازگشت به خانه", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۲/۱۲/۲۰", duration: "4:15", plays: "28.6K" },
    { id: 12, title: "آخرین غروب", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۲/۱۱/۰۸", duration: "3:55", plays: "33.2K" },
    { id: 13, title: "قلب شیشه‌ای", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۲/۱۰/۰۲", duration: "4:00", plays: "24.8K" },
    { id: 14, title: "فصل جدید", singer: "FMYousof", genre: "پاپ", releaseDate: "۱۴۰۲/۰۹/۱۱", duration: "3:48", plays: "29.1K" },
  ].map(s => ({...s, description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ.", audioUrl: `/songs/${generateSlug(s.title)}.mp3` }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 text-white" dir="rtl">
      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-md bg-white/5 border-b border-white/10"
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-2xl"
              >
                <Music className="w-8 h-8" />
              </motion.div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-l from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
                  FMYousof
                </h1>
                <p className="text-sm text-purple-200">خالق موسیقی پاپ</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="#about" className="hover:text-purple-300 transition-colors">درباره</a>
              <a href="#featured" className="hover:text-purple-300 transition-colors">برگزیده</a>
              <a href="#songs" className="hover:text-purple-300 transition-colors">آهنگ‌ها</a>
              <a href="#contact" className="hover:text-purple-300 transition-colors">تماس</a>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* About Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative aspect-square rounded-3xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 flex items-center justify-center">
                    <Headphones className="w-32 h-32 text-white/80" />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                <h2 className="text-4xl md:text-5xl font-bold">درباره من</h2>
              </div>
              <p className="text-xl text-purple-100 leading-relaxed">
                سلام! من FMYousof هستم، یک پرودیوسر و خواننده حرفه‌ای در سبک موسیقی پاپ.
              </p>
              <p className="text-lg text-purple-200 leading-relaxed">
                از سال ۱۳۹۸ فعالیت خودم رو شروع کردم و تا الان بیش از ۵۰ اثر در سبک‌های مختلف پاپ و الکترونیک منتشر کردم. هدف من خلق موسیقی‌هایی هست که احساسات رو برانگیزه و انرژی مثبت به مخاطبانم بده.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge className="bg-purple-500/20 text-purple-200 border-purple-500/50 px-4 py-2 text-sm">
                  <Radio className="w-4 h-4 ml-2" />
                  ۵۰+ اثر منتشر شده
                </Badge>
                <Badge className="bg-pink-500/20 text-pink-200 border-pink-500/50 px-4 py-2 text-sm">
                  <Heart className="w-4 h-4 ml-2" />
                  ۲۰۰K+ شنونده
                </Badge>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Featured Songs Section */}
      <motion.section 
        id="featured"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 py-20 bg-black/20 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-yellow-400" />
              <h2 className="text-4xl md:text-5xl font-bold">آهنگ‌های برگزیده</h2>
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </div>
            <p className="text-xl text-purple-200">محبوب‌ترین و جدیدترین آثار</p>
          </motion.div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {featuredSongs.map((song, index) => (
              <FeaturedSong 
                key={song.id} 
                song={song} 
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Songs Section */}
      <motion.section 
        id="songs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative z-10 container mx-auto px-4 py-20"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Music className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-100">تمام آهنگ‌ها</h2>
          </div>
          <p className="text-xl text-gray-300">مجموعه کامل آثار من</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {songs.map((song, index) => (
            <SongCard 
              key={song.id} 
              song={song} 
              index={index}
            />
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 bg-black/30 backdrop-blur-xl border-t border-white/10 py-16 text-gray-300">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* About */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">FMYousof</h3>
              </div>
              <p className="text-sm leading-relaxed text-gray-400">
                خلق موسیقی‌های جذاب، متفاوت و پرانرژی برای شما. به دنیای من خوش آمدید.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700/50 group-hover:bg-[#E1306C] transition-all">
                    <Instagram />
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700/50 group-hover:bg-[#FF0000] transition-all">
                    <Youtube />
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors group">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-700/50 group-hover:bg-[#0088cc] transition-all">
                    <Telegram />
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">لینک‌های سریع</h4>
              <ul className="space-y-3 text-sm">
                <li><a href="#about" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-[-4px] transition-all"><ChevronLeft className="w-4 h-4 text-purple-400"/>درباره من</a></li>
                <li><a href="#featured" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-[-4px] transition-all"><ChevronLeft className="w-4 h-4 text-purple-400"/>آهنگ‌های برگزیده</a></li>
                <li><a href="#songs" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-[-4px] transition-all"><ChevronLeft className="w-4 h-4 text-purple-400"/>تمام آهنگ‌ها</a></li>
                <li><a href="#" className="flex items-center gap-2 text-gray-400 hover:text-white hover:translate-x-[-4px] transition-all"><ChevronLeft className="w-4 h-4 text-purple-400"/>گالری</a></li>
              </ul>
            </div>

            {/* Latest Songs */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">آخرین آهنگ‌ها</h4>
              <ul className="space-y-3 text-sm">
                {featuredSongs.slice(0, 3).map(song => (
                  <li key={song.id}>
                    <Link to="/SongPlayer" state={{ song }} className="flex items-center gap-3 group">
                      <div className="w-10 h-10 rounded-md bg-white/10 flex items-center justify-center">
                        <Play className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <p className="font-medium group-hover:text-purple-300 transition-colors">{song.title}</p>
                        <p className="text-xs text-gray-400">{song.duration}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">عضویت در خبرنامه</h4>
              <p className="text-sm">از جدیدترین آهنگ‌ها و اخبار باخبر شوید.</p>
              <div className="flex gap-2">
                <Input type="email" placeholder="ایمیل شما" className="bg-white/5 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-500" />
                <Button className="bg-purple-600 hover:bg-purple-700 p-3">
                  <Send className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-center pt-12 mt-12 border-t border-white/10">
            <p className="text-sm text-gray-400">
              © ۱۴۰۳ FMYousof - تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
