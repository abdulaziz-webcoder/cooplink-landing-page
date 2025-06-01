
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Briefcase, Award, ArrowRight, Globe, Users, Star } from "lucide-react";
import LinkPreview from "@/components/LinkPreview";

const Index = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (websiteUrl.trim()) {
      setShowPreview(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/7b61a36c-e0db-4c3a-a87c-7b1a2819e8a1.png" 
                alt="Cooplink" 
                className="w-8 h-8"
              />
              <h1 className="text-2xl font-bold text-white">Cooplink</h1>
            </div>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Kirish
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <Badge className="mb-6 bg-blue-500/20 text-blue-200 border-blue-400/30">
            O'zbekiston uchun maxsus platforma
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Cooplink'ga <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">xush kelibsiz</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            O'zbekistondagi dasturchilar uchun imkoniyatlar platformasi
          </p>
          
          {/* URL Input Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Veb-sayt havolasini ulashing
            </h3>
            <form onSubmit={handleUrlSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="url"
                placeholder="https://example.com"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Globe className="w-4 h-4 mr-2" />
                Ulash
              </Button>
            </form>
          </div>

          {showPreview && websiteUrl && <LinkPreview url={websiteUrl} />}
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 py-3">
              Ro'yxatdan o'tish
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-3">
              Ko'proq bilish
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cooplink qanday ishlaydi?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Dasturchilar uchun barcha kerakli imkoniyatlar bir joyda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Loyihalarni sotish</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Dasturchilar o'z loyihalarini platformada ro'yxatga olishlari va sotishlari mumkin.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Ish topish</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Foydalanuvchilar o'z malakalariga mos ish e'lonlarini ko'rib, ularga ariza berishlari mumkin.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-white">Malaka tasdiqlash</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 text-lg leading-relaxed">
                Maxsus testdan o'tib, tasdiqlangan dasturchi maqomini olish imkoniyati.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Cooplink Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nega Cooplink?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Markazlashgan platforma
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              O'zbekistonda dasturchilar uchun markazlashgan platforma mavjudligi.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Star className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Daromad olish
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              O'z mahoratingizni pulga aylantirish va mos ish topish imkoniyati.
            </p>
          </div>

          <div className="text-center group">
            <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Ishonchli platforma
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Tasdiqlash tizimi bilan ishonchli va ajralib turuvchi dasturchi bo'lish.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl p-12 text-center border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Qo'shiling!
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Ko'proq bilish uchun ro'yxatdan o'ting yoki bizni ijtimoiy tarmoqlarda kuzating!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-lg px-8 py-3">
              Ro'yxatdan o'tish
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 text-lg px-8 py-3">
              Biz bilan bog'laning
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/5 backdrop-blur-sm border-t border-white/20">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/7b61a36c-e0db-4c3a-a87c-7b1a2819e8a1.png" 
                alt="Cooplink" 
                className="w-6 h-6"
              />
              <span className="text-white font-semibold">Cooplink</span>
            </div>
            <p className="text-gray-400">
              © 2024 Cooplink. Barcha huquqlar himoyalangan.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
