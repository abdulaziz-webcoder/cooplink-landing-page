
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Briefcase, 
  Award, 
  ArrowLeft, 
  Users, 
  TrendingUp,
  Shield,
  Target,
  Heart,
  Sparkles,
  Send
} from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-60 -left-40 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="relative z-50 bg-black/50 backdrop-blur-xl border-b border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3 group">
              <Button variant="ghost" className="text-white hover:bg-gray-800/50">
                <ArrowLeft className="w-5 h-5 mr-2" />
                Orqaga
              </Button>
            </Link>
            <div className="flex items-center space-x-3 group">
              <img 
                src="/lovable-uploads/7b61a36c-e0db-4c3a-a87c-7b1a2819e8a1.png" 
                alt="Cooplink" 
                className="w-10 h-10 transition-transform group-hover:scale-110"
              />
              <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Cooplink
              </h1>
            </div>
            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Loyiha Haqida
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Section */}
          <section className="text-center mb-20 animate-fade-in">
            <div className="mb-8">
              <Badge className="mb-6 bg-gradient-to-r from-purple-900/50 to-blue-900/50 text-purple-200 border-purple-500/30 px-6 py-3 text-lg">
                <Target className="w-5 h-5 mr-2" />
                Platform Tafsilotlari
              </Badge>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                Cooplink'ga xush kelibsiz
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              O'zbekistondagi dasturchilar uchun imkoniyatlar platformasi
            </p>
          </section>

          {/* How it Works Section */}
          <section className="mb-24 animate-fade-in delay-200">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  Cooplink qanday ishlaydi?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Code,
                  title: "Loyihalarni sotish",
                  description: "Dasturchilar o'z loyihalarini platformada ro'yxatga olishlari va sotishlari mumkin.",
                  gradient: "from-green-500 to-emerald-600",
                  delay: "delay-0"
                },
                {
                  icon: Briefcase,
                  title: "Ish topish",
                  description: "Foydalanuvchilar o'z malakalariga mos ish e'lonlarini ko'rib, ularga ariza berishlari mumkin.",
                  gradient: "from-blue-500 to-indigo-600",
                  delay: "delay-200"
                },
                {
                  icon: Award,
                  title: "Malaka tasdiqlash",
                  description: "Maxsus testdan o'tib, tasdiqlangan dasturchi maqomini olish imkoniyati.",
                  gradient: "from-purple-500 to-pink-600",
                  delay: "delay-400"
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className={`bg-black/50 backdrop-blur-xl border-gray-700/50 hover:bg-gray-900/50 transition-all duration-500 group hover:scale-105 animate-fade-in ${feature.delay}`}
                >
                  <CardHeader className="text-center">
                    <div className={`mx-auto w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-3xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 group-hover:rotate-6 relative`}>
                      <feature.icon className="w-10 h-10 text-white" />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-purple-300 transition-colors">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Why Cooplink Section */}
          <section className="mb-24 animate-fade-in delay-400">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Nega Cooplink?
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: Users,
                  title: "Markazlashgan platforma",
                  description: "O'zbekistonda dasturchilar uchun markazlashgan platforma mavjudligi.",
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  icon: TrendingUp,
                  title: "Daromad imkoniyati",
                  description: "O'z mahoratingizni pulga aylantirish va mos ish topish imkoniyati.",
                  gradient: "from-green-500 to-emerald-600"
                },
                {
                  icon: Shield,
                  title: "Ishonchli tizim",
                  description: "Tasdiqlash tizimi bilan ishonchli va ajralib turuvchi dasturchi bo'lish.",
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group animate-fade-in hover:scale-105 transition-all duration-300" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className={`mx-auto w-24 h-24 bg-gradient-to-br ${item.gradient} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 transition-all duration-300 relative overflow-hidden`}>
                    <item.icon className="w-12 h-12 text-white relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent"></div>
                    <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-6 group-hover:text-purple-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-xl leading-relaxed group-hover:text-gray-200 transition-colors">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Join Section */}
          <section className="animate-fade-in delay-600">
            <div className="relative bg-gradient-to-r from-purple-900/30 via-black/50 to-cyan-900/30 backdrop-blur-xl rounded-3xl p-16 text-center border border-gray-700/50 overflow-hidden">
              {/* Background effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-cyan-500/10"></div>
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-bold mb-8">
                  <span className="bg-gradient-to-r from-white via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    Qo'shiling:
                  </span>
                </h2>
                
                <p className="text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Ko'proq bilish uchun ro'yxatdan o'ting yoki bizni ijtimoiy tarmoqlarda kuzating!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white text-xl px-12 py-4 border-0 hover:scale-105 transition-all duration-300 group"
                  >
                    <Heart className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform" />
                    Platformani Kuzating
                  </Button>
                  
                  <a 
                    href="https://t.me/cooplink" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex"
                  >
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="bg-black/50 border-gray-600 text-white hover:bg-gray-900/50 text-xl px-12 py-4 hover:scale-105 transition-all duration-300 hover:border-cyan-500 group"
                    >
                      <Send className="mr-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
                      @cooplink
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/80 backdrop-blur-xl border-t border-gray-800 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/7b61a36c-e0db-4c3a-a87c-7b1a2819e8a1.png" 
                alt="Cooplink" 
                className="w-8 h-8"
              />
              <span className="text-white font-semibold text-xl">Cooplink</span>
              <Badge className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-300 border-purple-500/30">
                Concept
              </Badge>
            </div>
            <p className="text-gray-400 text-lg">
              © 2024 Cooplink Platform Concept. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
